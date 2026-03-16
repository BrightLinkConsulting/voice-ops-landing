"use client"

import { useEffect, useRef } from "react"

export function BrightLinkHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl") || (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null)
    if (!gl) return

    const vert = `
      attribute vec2 a_position;
      void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
    `

    const frag = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;

      float beamGlow(vec2 uv, float xOff, float freq, float amp, float spd, float w) {
        float wave = sin((uv.x + xOff + spd) * freq) * amp;
        float d = abs(uv.y - wave);
        return w * 0.6 / (d + 0.0008) + w * 1.8 / (d * d * 18.0 + 0.04);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
        float t = u_time * 0.20;
        float xNorm = gl_FragCoord.x / u_resolution.x;

        float b1 = beamGlow(uv,  0.00, 1.05, 0.33, t,        0.030);
        float b2 = beamGlow(uv,  0.20, 1.14, 0.27, t*0.93,   0.022);
        float b3 = beamGlow(uv, -0.24, 0.96, 0.40, t*1.07,   0.024);
        float b4 = beamGlow(uv,  0.44, 1.24, 0.21, t*0.87,   0.016);
        float b5 = beamGlow(uv, -0.40, 0.90, 0.35, t*1.13,   0.013);

        vec3 white  = vec3(1.00, 0.98, 0.95);
        vec3 orange = vec3(0.95, 0.40, 0.04);
        vec3 amber  = vec3(0.98, 0.62, 0.08);
        vec3 red    = vec3(0.72, 0.18, 0.02);
        vec3 gold   = vec3(0.99, 0.75, 0.15);
        float cx = xNorm;

        vec3 col = mix(white, orange, smoothstep(0.08, 0.60, cx)) * b1
                 + mix(white, amber,  smoothstep(0.05, 0.55, cx)) * b2
                 + mix(white, red,    smoothstep(0.12, 0.65, cx)) * b3
                 + mix(white, gold,   smoothstep(0.06, 0.50, cx)) * b4
                 + mix(white, orange, smoothstep(0.10, 0.58, cx)) * b5;

        col = 1.0 - exp(-col * 1.05);
        col *= 1.0 - smoothstep(0.4, 1.5, length(uv * vec2(0.65, 1.0)));
        col = mix(col, vec3(0.0), smoothstep(0.85, 1.0, xNorm) * 0.7);

        gl_FragColor = vec4(col, 1.0);
      }
    `

    function makeShader(glCtx: WebGLRenderingContext, type: number, src: string) {
      const s = glCtx.createShader(type)!
      glCtx.shaderSource(s, src)
      glCtx.compileShader(s)
      return s
    }

    const prog = gl.createProgram()!
    gl.attachShader(prog, makeShader(gl, gl.VERTEX_SHADER, vert))
    gl.attachShader(prog, makeShader(gl, gl.FRAGMENT_SHADER, frag))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    )

    const aPos = gl.getAttribLocation(prog, "a_position")
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(prog, "u_resolution")
    const uTime = gl.getUniformLocation(prog, "u_time")

    let animId: number
    let t = 0

    function resize() {
      const w = canvas!.clientWidth
      const h = canvas!.clientHeight
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width = w
        canvas!.height = h
        gl!.viewport(0, 0, w, h)
      }
    }

    function render() {
      resize()
      gl!.uniform2f(uRes, canvas!.width, canvas!.height)
      gl!.uniform1f(uTime, t)
      gl!.drawArrays(gl!.TRIANGLES, 0, 6)
      t += 0.01
      animId = requestAnimationFrame(render)
    }

    render()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "#060708",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* WebGL shader canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      {/* Hero content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 40px",
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        {/* Eyebrow */}
        <div className="hero-eyebrow">
          For Expert-Led Businesses Ready to Scale
        </div>

        {/* H1 bold lines */}
        <span className="hero-headline-bold">
          <span className="hero-word-your">Your </span>
          <span className="hero-word-business">Business</span>
          <br />
          <span className="hero-word-infra">Infrastructure.</span>
        </span>

        {/* Italic orange line */}
        <span className="hero-headline-italic">Built to Scale.</span>

        {/* Subtitle */}
        <p className="hero-tagline">
          We Install the{" "}
          <em>Funnels, Automations,</em> and{" "}
          <em>AI-Powered Operating System</em>{" "}
          Your Business Needs to Scale — Without Patching Together Tools,
          Dashboards, and Disconnected Software.
        </p>

        {/* CTA buttons */}
        <div className="hero-cta-row">
          <button
            className="hero-btn"
            onClick={() => {
              document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            See Which Layer Fits Your Stage →
          </button>
          <button
            className="hero-btn"
            onClick={() => {
              document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Watch the 3-Minute Overview
          </button>
        </div>
      </div>

      {/* Scoped styles */}
      <style>{`
        @keyframes hero-from-top {
          0%   { opacity: 0; transform: translateY(-28px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-from-left {
          0%   { opacity: 0; transform: translateX(-60px) skewX(4deg); }
          100% { opacity: 1; transform: translateX(0) skewX(0); }
        }
        @keyframes hero-from-right {
          0%   { opacity: 0; transform: translateX(60px) skewX(-4deg); }
          100% { opacity: 1; transform: translateX(0) skewX(0); }
        }
        @keyframes hero-from-bottom-right {
          0%   { opacity: 0; transform: translate(40px, 36px) rotate(1.5deg); }
          100% { opacity: 1; transform: translate(0, 0) rotate(0); }
        }
        @keyframes hero-fade-up {
          0%   { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .hero-eyebrow {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #E8600A;
          text-transform: uppercase;
          margin-bottom: 14px;
          text-shadow: 0 0 20px rgba(0,0,0,0.9);
          opacity: 0;
          animation: hero-from-top 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s forwards;
        }

        .hero-headline-bold {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(56px, 9.5vw, 96px);
          line-height: 0.88;
          color: #F4F4F5;
          letter-spacing: 0.01em;
          text-transform: none;
          display: block;
          text-shadow: 0 0 40px rgba(0,0,0,0.98), 0 0 80px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.95);
        }

        .hero-word-your {
          display: inline-block;
          opacity: 0;
          animation: hero-from-left 0.65s cubic-bezier(0.22,1,0.36,1) 0.35s forwards;
        }
        .hero-word-business {
          display: inline-block;
          opacity: 0;
          animation: hero-from-right 0.65s cubic-bezier(0.22,1,0.36,1) 0.5s forwards;
        }
        .hero-word-infra {
          display: inline-block;
          opacity: 0;
          animation: hero-from-left 0.7s cubic-bezier(0.22,1,0.36,1) 0.65s forwards;
        }

        .hero-headline-italic {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          font-size: clamp(64px, 11vw, 112px);
          line-height: 0.92;
          color: #E8600A;
          display: block;
          margin-top: 2px;
          letter-spacing: 0.01em;
          text-shadow: 0 0 35px rgba(0,0,0,0.98), 0 0 70px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.95);
          opacity: 0;
          animation: hero-from-bottom-right 0.8s cubic-bezier(0.22,1,0.36,1) 0.85s forwards;
        }

        .hero-tagline {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(15px, 2.2vw, 19px);
          font-weight: 400;
          color: rgba(244,244,245,0.55);
          letter-spacing: 0.04em;
          margin-top: 22px;
          line-height: 1.65;
          text-shadow: 0 0 20px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,0.85);
          opacity: 0;
          animation: hero-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 1.15s forwards;
        }

        .hero-tagline em {
          font-style: italic;
          font-weight: 400;
          color: rgba(244,244,245,0.88);
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(17px, 2.5vw, 22px);
          letter-spacing: 0.02em;
        }

        .hero-cta-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-top: 44px;
          opacity: 0;
          animation: hero-fade-up 0.6s cubic-bezier(0.22,1,0.36,1) 1.45s forwards;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          color: #fff;
          border: 1.5px solid rgba(255,255,255,0.35);
          padding: 14px 28px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 6px;
          background: rgba(255,255,255,0.05);
          text-shadow: none;
          box-shadow: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .hero-btn:hover {
          border-color: rgba(232,96,10,0.6);
          box-shadow:
            0 0 18px 4px rgba(232,96,10,0.35),
            0 0 40px 8px rgba(232,96,10,0.15);
        }

        @media (max-width: 640px) {
          .hero-cta-row {
            flex-direction: column;
            gap: 10px;
          }
          .hero-btn {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-eyebrow,
          .hero-word-your,
          .hero-word-business,
          .hero-word-infra,
          .hero-headline-italic,
          .hero-tagline,
          .hero-cta-row {
            opacity: 1 !important;
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
