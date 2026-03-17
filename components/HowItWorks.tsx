'use client'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Strategic Mapping',
      body: 'Your environment, gaps, and offer structure. We arrive with the build spec.'
    },
    {
      number: '02',
      title: 'System Deployment',
      body: 'GHL infrastructure built, integrated, and validated before anything goes live.'
    },
    {
      number: '03',
      title: 'Full Integration',
      body: 'Every automation, funnel, and workflow connected and tested. The system runs before you see it.'
    },
    {
      number: '04',
      title: 'Executive Go-Live',
      body: 'One live Zoom. Every system confirmed. You leave fully operational.'
    }
  ]

  return (
    <>
      <section
        id="how-it-works"
        className="hiw-section"
      >
        <p className="hiw-eyebrow">The Installation Process</p>
        <h2 className="hiw-headline">
          Strategy call to <em>fully operating</em><br />in 7&ndash;14 days.
        </h2>

        <div className="hiw-cards-row">
          {steps.map((step, index) => (
            <div key={index} className="hiw-card">
              <span className="hiw-step-number">{step.number}</span>
              <h3 className="hiw-card-title">{step.title}</h3>
              <p className="hiw-card-body">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .hiw-section {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          text-align: center;
          padding: 80px 40px;
        }

        .hiw-eyebrow {
          font-family: 'DM Sans', var(--font-body), sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c86428;
          margin-bottom: 20px;
        }

        .hiw-headline {
          font-family: 'Cormorant Garamond', var(--font-display), serif;
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 400;
          color: #f0ede6;
          line-height: 1.1;
          margin-bottom: 56px;
        }

        .hiw-headline em {
          font-style: italic;
          color: #c86428;
        }

        .hiw-cards-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .hiw-card {
          position: relative;
          padding: 36px 28px 40px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 18px;
          overflow: hidden;
          transition: border-color 0.4s ease, background 0.4s ease;
          text-align: left;
        }

        .hiw-card::after {
          content: '';
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 75%;
          height: 80px;
          background: radial-gradient(ellipse, rgba(200, 100, 40, 0.22) 0%, transparent 70%);
          pointer-events: none;
          transition: opacity 0.4s ease;
          opacity: 0.7;
        }

        .hiw-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent);
          border-radius: 18px 18px 0 0;
        }

        .hiw-card:hover {
          border-color: rgba(200, 100, 40, 0.35);
          background: rgba(255, 255, 255, 0.055);
        }

        .hiw-card:hover::after {
          opacity: 1;
        }

        .hiw-step-number {
          font-family: 'Cormorant Garamond', var(--font-display), serif;
          font-size: 64px;
          font-weight: 500;
          line-height: 1;
          color: #c86428;
          display: block;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .hiw-card-title {
          font-family: 'DM Sans', var(--font-body), sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #f0ede6;
          margin-bottom: 12px;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .hiw-card-body {
          font-family: 'DM Sans', var(--font-body), sans-serif;
          font-size: 13.5px;
          font-weight: 300;
          color: rgba(240, 237, 230, 0.48);
          line-height: 1.65;
        }

        @media (max-width: 900px) {
          .hiw-cards-row { grid-template-columns: 1fr 1fr; }
          .hiw-step-number { font-size: 52px; }
        }

        @media (max-width: 560px) {
          .hiw-cards-row { grid-template-columns: 1fr; }
          .hiw-section { padding: 60px 20px; }
          .hiw-step-number { font-size: 48px; }
        }
      `}</style>
    </>
  )
}

export default HowItWorks
