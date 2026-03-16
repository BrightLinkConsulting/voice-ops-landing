'use client'

import { useRef } from 'react'

const LAYERS = [
  {
    id: 1,
    label: 'Layer 01',
    sub: 'Funnels, automations, and CRM — done for you',
    color: '#E4A124',
    ringColor: '#BA7517',
    glowColor: '#BA751744',
    glowColorHover: '#BA751760',
    borderColor: '#BA751750',
    bg: '#BA751710',
    bgHover: '#BA751720',
    fillGradId: 'rg1',
    ringId: 'r1',
    fillId: 'f1',
    lblId: 'lbl1',
    lblText: '01 · Marketing Ecosystem, Installed',
    lblFill: '#E4A124',
    lblY: 167,
    r: 98,
    strokeDash: '5 4',
    animDelay: '0s',
  },
  {
    id: 2,
    label: 'Layer 02',
    sub: 'Run your entire business from your phone',
    color: '#5AAEE8',
    ringColor: '#185FA5',
    glowColor: '#185FA544',
    glowColorHover: '#185FA560',
    borderColor: '#185FA550',
    bg: '#185FA510',
    bgHover: '#185FA520',
    fillGradId: 'rg2',
    ringId: 'r2',
    fillId: 'f2',
    lblId: 'lbl2',
    lblText: '02 · Voice-Command Business Intelligence',
    lblFill: '#5AAEE8',
    lblY: 124,
    r: 141,
    strokeDash: '5 4',
    animDelay: '0.5s',
  },
  {
    id: 3,
    label: 'Layer 03',
    sub: 'Know which clients need attention before they go quiet',
    color: '#1DBF96',
    ringColor: '#0F6E56',
    glowColor: '#0F6E5644',
    glowColorHover: '#0F6E5660',
    borderColor: '#0F6E5650',
    bg: '#0F6E5610',
    bgHover: '#0F6E5620',
    fillGradId: 'rg3',
    ringId: 'r3',
    fillId: 'f3',
    lblId: 'lbl3',
    lblText: '03 · Predictive Client Intelligence',
    lblFill: '#1DBF96',
    lblY: 71,
    r: 194,
    strokeDash: '6 5',
    animDelay: '1s',
  },
  {
    id: 4,
    label: 'Layer 04',
    sub: 'Your operating rhythm, continuous and AI-driven',
    color: '#8B82E0',
    ringColor: '#534AB7',
    glowColor: '#534AB744',
    glowColorHover: '#534AB760',
    borderColor: '#534AB750',
    bg: '#534AB710',
    bgHover: '#534AB720',
    fillGradId: 'rg4',
    ringId: 'r4',
    fillId: 'f4',
    lblId: 'lbl4',
    lblText: '04 · AI Chief Executive Operating System',
    lblFill: '#8B82E0',
    lblY: 15,
    r: 250,
    strokeDash: '6 5',
    animDelay: '1.5s',
  },
]

export default function OrbitalRings() {
  const svgRef = useRef<SVGSVGElement>(null)

  function show(n: number) {
    if (!svgRef.current) return
    for (let i = 1; i <= 4; i++) {
      const on = i <= n
      const ring = svgRef.current.getElementById('r' + i) as SVGElement | null
      const fill = svgRef.current.getElementById('f' + i) as SVGElement | null
      const lbl  = svgRef.current.getElementById('lbl' + i) as SVGElement | null
      if (ring) ring.style.strokeOpacity = on ? '0.55' : '0'
      if (fill) fill.style.opacity       = on ? '1'    : '0'
      if (lbl)  lbl.style.opacity        = on ? '1'    : '0'
    }
  }

  function hide() {
    if (!svgRef.current) return
    for (let i = 1; i <= 4; i++) {
      const ring = svgRef.current.getElementById('r' + i) as SVGElement | null
      const fill = svgRef.current.getElementById('f' + i) as SVGElement | null
      const lbl  = svgRef.current.getElementById('lbl' + i) as SVGElement | null
      if (ring) ring.style.strokeOpacity = '0'
      if (fill) fill.style.opacity       = '0'
      if (lbl)  lbl.style.opacity        = '0'
    }
  }

  return (
    <div className="w-full text-center">
      {/* SVG Diagram */}
      <svg
        ref={svgRef}
        width="100%"
        viewBox="0 0 680 520"
        className="block w-full overflow-visible mb-8"
      >
        <defs>
          <radialGradient id="halo-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#E8600A" stopOpacity="1"/>
            <stop offset="40%"  stopColor="#E8600A" stopOpacity="0.55"/>
            <stop offset="100%" stopColor="#E8600A" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="rg1" cx="50%" cy="50%" r="50%">
            <stop offset="58%" stopColor="#BA7517" stopOpacity="0"/>
            <stop offset="100%" stopColor="#BA7517" stopOpacity="0.22"/>
          </radialGradient>
          <radialGradient id="rg2" cx="50%" cy="50%" r="50%">
            <stop offset="58%" stopColor="#185FA5" stopOpacity="0"/>
            <stop offset="100%" stopColor="#185FA5" stopOpacity="0.18"/>
          </radialGradient>
          <radialGradient id="rg3" cx="50%" cy="50%" r="50%">
            <stop offset="58%" stopColor="#0F6E56" stopOpacity="0"/>
            <stop offset="100%" stopColor="#0F6E56" stopOpacity="0.17"/>
          </radialGradient>
          <radialGradient id="rg4" cx="50%" cy="50%" r="50%">
            <stop offset="58%" stopColor="#534AB7" stopOpacity="0"/>
            <stop offset="100%" stopColor="#534AB7" stopOpacity="0.15"/>
          </radialGradient>
        </defs>

        {/* Fill layers — shown cumulatively on hover */}
        <circle id="f4" cx="340" cy="255" r="250" fill="url(#rg4)" opacity="0"
          style={{ transition: 'opacity 0.4s ease' }}/>
        <circle id="f3" cx="340" cy="255" r="194" fill="url(#rg3)" opacity="0"
          style={{ transition: 'opacity 0.4s ease' }}/>
        <circle id="f2" cx="340" cy="255" r="141" fill="url(#rg2)" opacity="0"
          style={{ transition: 'opacity 0.4s ease' }}/>
        <circle id="f1" cx="340" cy="255" r="98"  fill="url(#rg1)" opacity="0"
          style={{ transition: 'opacity 0.4s ease' }}/>

        {/* Rings */}
        <circle id="r4" cx="340" cy="255" r="250" fill="none" stroke="#534AB7"
          strokeWidth="1.5" strokeDasharray="6 5" strokeOpacity="0"
          style={{ transition: 'stroke-opacity 0.4s ease' }}/>
        <circle id="r3" cx="340" cy="255" r="194" fill="none" stroke="#0F6E56"
          strokeWidth="1.5" strokeDasharray="6 5" strokeOpacity="0"
          style={{ transition: 'stroke-opacity 0.4s ease' }}/>
        <circle id="r2" cx="340" cy="255" r="141" fill="none" stroke="#185FA5"
          strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0"
          style={{ transition: 'stroke-opacity 0.4s ease' }}/>
        <circle id="r1" cx="340" cy="255" r="98"  fill="none" stroke="#BA7517"
          strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0"
          style={{ transition: 'stroke-opacity 0.4s ease' }}/>

        {/* Ring labels */}
        <text id="lbl4" x="340" y="15" textAnchor="middle" dominantBaseline="central"
          fontSize="10" fontWeight="500" fontFamily="var(--font-body)" fill="#8B82E0" opacity="0"
          style={{ transition: 'opacity 0.35s ease', pointerEvents: 'none' }}>
          04 · AI Chief Executive Operating System
        </text>
        <text id="lbl3" x="340" y="71" textAnchor="middle" dominantBaseline="central"
          fontSize="10" fontWeight="500" fontFamily="var(--font-body)" fill="#1DBF96" opacity="0"
          style={{ transition: 'opacity 0.35s ease', pointerEvents: 'none' }}>
          03 · Predictive Client Intelligence
        </text>
        <text id="lbl2" x="340" y="124" textAnchor="middle" dominantBaseline="central"
          fontSize="10" fontWeight="500" fontFamily="var(--font-body)" fill="#5AAEE8" opacity="0"
          style={{ transition: 'opacity 0.35s ease', pointerEvents: 'none' }}>
          02 · Voice-Command Business Intelligence
        </text>
        <text id="lbl1" x="340" y="167" textAnchor="middle" dominantBaseline="central"
          fontSize="10" fontWeight="500" fontFamily="var(--font-body)" fill="#E4A124" opacity="0"
          style={{ transition: 'opacity 0.35s ease', pointerEvents: 'none' }}>
          01 · Marketing Ecosystem, Installed
        </text>

        {/* Halo */}
        <g style={{ transformOrigin: '340px 255px', animation: 'halo-breathe 3s ease-in-out infinite' }}>
          <circle cx="340" cy="255" r="82" fill="url(#halo-grad)"/>
        </g>

        {/* Core */}
        <g style={{ transformOrigin: '340px 255px', animation: 'core-breathe 3s ease-in-out infinite' }}>
          <circle cx="340" cy="255" r="54" fill="#E8600A"/>
          <circle cx="340" cy="255" r="54" fill="none" stroke="#FF9240" strokeWidth="1.5" strokeOpacity="0.65"/>
          <text x="340" y="249" textAnchor="middle" dominantBaseline="central"
            fontSize="9.5" fontWeight="400" fontFamily="var(--font-body)" fill="white" opacity="0.85">
            YOUR
          </text>
          <text x="340" y="262" textAnchor="middle" dominantBaseline="central"
            fontSize="10.5" fontWeight="500" fontFamily="var(--font-body)" fill="white">
            BUSINESS
          </text>
        </g>
      </svg>

      {/* Buttons */}
      <div className="flex gap-2 mt-4 mb-3 w-full">
        {LAYERS.map((layer) => (
          <button
            key={layer.id}
            onMouseEnter={() => show(layer.id)}
            onMouseLeave={() => hide()}
            onTouchStart={() => show(layer.id)}
            onTouchEnd={() => hide()}
            className="flex flex-col items-center justify-center flex-1 min-w-0 rounded-xl border py-3 px-2 cursor-pointer transition-all duration-200"
            style={{
              borderColor: layer.borderColor,
              background: layer.bg,
              animation: `btn-glow-${layer.id} ${2.8 + (layer.id - 1) * 0.4}s ease-in-out infinite ${layer.animDelay}`,
            }}
          >
            <span
              className="font-semibold whitespace-nowrap leading-tight"
              style={{
                color: layer.color,
                fontSize: 'clamp(12px, 3.2vw, 18px)',
                letterSpacing: '-0.3px',
              }}
            >
              {layer.label}
            </span>
            <span
              className="leading-tight text-gray-400"
              style={{ fontSize: 'clamp(10px, 2.2vw, 12px)' }}
            >
              {layer.sub}
            </span>
          </button>
        ))}
      </div>

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes core-breathe {
          0%,100% { transform: scale(1); }
          50%      { transform: scale(1.06); }
        }
        @keyframes halo-breathe {
          0%,100% { transform: scale(1); opacity: 0.5; }
          50%      { transform: scale(1.1); opacity: 0.72; }
        }
        @keyframes btn-glow-1 {
          0%,100% { box-shadow: 0 0 7px 1px #BA751744; }
          50%     { box-shadow: 0 0 14px 3px #BA751766; }
        }
        @keyframes btn-glow-2 {
          0%,100% { box-shadow: 0 0 7px 1px #185FA544; }
          50%     { box-shadow: 0 0 14px 3px #185FA566; }
        }
        @keyframes btn-glow-3 {
          0%,100% { box-shadow: 0 0 7px 1px #0F6E5644; }
          50%     { box-shadow: 0 0 14px 3px #0F6E5666; }
        }
        @keyframes btn-glow-4 {
          0%,100% { box-shadow: 0 0 7px 1px #534AB744; }
          50%     { box-shadow: 0 0 14px 3px #534AB766; }
        }
        @media (prefers-reduced-motion: reduce) {
          #core-g, #halo-g { animation: none !important; }
        }
        @media (max-width: 380px) {
          .orbital-btn-row { gap: 5px; }
        }
      `}</style>
    </div>
  )
}
