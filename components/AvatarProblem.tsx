'use client'

const AvatarProblem = () => {
  const cards = [
    {
      number: '01',
      title: 'Your message is strong. Your machine is weak.',
      body: 'The potential is there. The infrastructure to capture it consistently isn\u2019t.'
    },
    {
      number: '02',
      title: 'You\u2019re running the business. It\u2019s not running itself.',
      body: 'Every hour inside dashboards is an hour you\u2019re not doing the work only you can do.'
    },
    {
      number: '03',
      title: 'You\u2019ve tried the platforms. None of them stuck.',
      body: 'The problem was never the tool. It was the absence of a complete, connected system built around your business.'
    }
  ]

  return (
    <>
      <section id="avatar" className="avatar-section">
        <p className="avatar-eyebrow">Who This Is For</p>
        <h2 className="avatar-headline">
          Your expertise is proven.<br /><em>Your infrastructure isn&apos;t.</em>
        </h2>
        <p className="avatar-subtext">
          This is for consultants, advisors, authors, and coaches with real demand — and a backend that can&apos;t keep pace with it.
        </p>

        <div className="avatar-cards-row">
          {cards.map((card, index) => (
            <div key={index} className="avatar-card">
              <span className="avatar-step-number">{card.number}</span>
              <h3 className="avatar-card-title">{card.title}</h3>
              <p className="avatar-card-body">{card.body}</p>
            </div>
          ))}
        </div>

        <p className="avatar-closing">That changes today.</p>
      </section>

      <style jsx>{`
        .avatar-section {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          text-align: center;
          padding: 80px 40px;
        }

        .avatar-eyebrow {
          font-family: 'DM Sans', var(--font-body), sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c86428;
          margin-bottom: 20px;
        }

        .avatar-headline {
          font-family: 'Cormorant Garamond', var(--font-display), serif;
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 400;
          color: #f0ede6;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .avatar-headline em {
          font-style: italic;
          color: #c86428;
        }

        .avatar-subtext {
          font-family: 'DM Sans', var(--font-body), sans-serif;
          font-size: 16px;
          font-weight: 300;
          color: rgba(240, 237, 230, 0.48);
          line-height: 1.65;
          max-width: 600px;
          margin: 0 auto 56px;
        }

        .avatar-cards-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 52px;
        }

        .avatar-card {
          position: relative;
          padding: 36px 28px 40px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 18px;
          overflow: hidden;
          transition: border-color 0.4s ease, background 0.4s ease;
          text-align: left;
        }

        .avatar-card::after {
          content: '';
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 75%;
          height: 80px;
          background: radial-gradient(ellipse, rgba(200, 100, 40, 0.22) 0%, transparent 70%);
          pointer-events: none;
          opacity: 0.7;
          transition: opacity 0.4s ease;
        }

        .avatar-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent);
          border-radius: 18px 18px 0 0;
        }

        .avatar-card:hover {
          border-color: rgba(200, 100, 40, 0.35);
          background: rgba(255, 255, 255, 0.055);
        }

        .avatar-card:hover::after {
          opacity: 1;
        }

        .avatar-step-number {
          font-family: 'Cormorant Garamond', var(--font-display), serif;
          font-size: 64px;
          font-weight: 500;
          line-height: 1;
          color: #c86428;
          display: block;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .avatar-card-title {
          font-family: 'DM Sans', var(--font-body), sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #f0ede6;
          margin-bottom: 12px;
          line-height: 1.4;
          letter-spacing: -0.01em;
        }

        .avatar-card-body {
          font-family: 'DM Sans', var(--font-body), sans-serif;
          font-size: 13.5px;
          font-weight: 300;
          color: rgba(240, 237, 230, 0.48);
          line-height: 1.65;
        }

        .avatar-closing {
          font-family: 'Cormorant Garamond', var(--font-display), serif;
          font-style: italic;
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 400;
          color: #c86428;
        }

        @media (max-width: 860px) {
          .avatar-cards-row { grid-template-columns: 1fr 1fr; }
          .avatar-step-number { font-size: 52px; }
        }

        @media (max-width: 560px) {
          .avatar-cards-row { grid-template-columns: 1fr; }
          .avatar-section { padding: 60px 20px; }
          .avatar-step-number { font-size: 48px; }
        }
      `}</style>
    </>
  )
}

export default AvatarProblem
