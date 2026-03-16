'use client'

import { StaggerChild, motion } from '@/components/MotionWrapper'
import OrbitalRings from '@/app/components/OrbitalRings'

interface Layer {
  number: string
  badge: string
  badgeColor: string
  headline: string
  body: string[]
  bullets: string[]
  whoFor: string
  includesAbove: boolean
  credentialLine?: string
}

const layers: Layer[] = [
  {
    number: 'LAYER 01',
    badge: 'STARTER',
    badgeColor: '#E4A124',
    headline: 'Installed Infrastructure. Done for You.',
    body: [
      'We install the core infrastructure first \u2014 funnels, automation, CRM architecture, follow-up systems, and the operating backend your business should have had all along.',
    ],
    bullets: [
      'Lead Magnet Funnel + automation sequence',
      'SLO Funnel with 2 upsells',
      'VSL + Call Booking Funnel',
      'Flagship Offer Page',
      'Free + Paid Community Groups',
      'Products and Courses infrastructure',
    ],
    whoFor:
      'You have the expertise and the audience but your acquisition infrastructure is fragmented and founder-dependent. You need a complete, professional operating backend installed \u2014 not another platform to configure yourself.',
    includesAbove: false,
  },
  {
    number: 'LAYER 02',
    badge: 'SIGNATURE',
    badgeColor: '#5AAEE8',
    headline: 'AIOS: Your Business Intelligence Layer.',
    body: [
      'AIOS gives you a live operating interface into your business through Telegram, briefings, queries, and guided action.',
    ],
    bullets: [
      'Dedicated AIOS BI Agent via Telegram',
      'Conversational interface into business data',
      'Pipeline queries and CRM actions on demand',
      'Voice and text commands across your full stack',
      'Daily operating brief, delivered before you ask',
    ],
    whoFor:
      'You have the infrastructure. Now you want the intelligence layer that connects it, interprets it, and lets you operate from context instead of from dashboards.',
    includesAbove: true,
  },
  {
    number: 'LAYER 03',
    badge: 'PRO',
    badgeColor: '#1DBF96',
    headline: 'ClientBloom: Revenue Protection Through Client Intelligence.',
    body: [
      'Getting clients is expensive. Keeping the right ones is where your margin lives. ClientBloom gives the system visibility into fulfillment, engagement, risk signals, and client health.',
    ],
    bullets: [
      'ClientBloom intelligence engine embedded',
      'Client Retention Score (CRS) \u2014 updates continuously',
      'Behavioral baseline scoring per account',
      'Proactive churn risk detection',
      'Engagement pattern monitoring across all touchpoints',
      'Morning brief upgraded with client health actions',
    ],
    whoFor:
      'You have an active client base and retention directly affects your revenue. You want to stop managing relationships by instinct and start operating from real intelligence on what is actually happening inside each account.',
    includesAbove: true,
    credentialLine:
      'ClientBloom is the official digital implementation of Mike Walker\u2019s Amazon #1 bestseller, The Exceptional Experience.',
  },
  {
    number: 'LAYER 04',
    badge: 'PRO PLUS',
    badgeColor: '#8B82E0',
    headline: 'CE.OS: The Executive Layer for Founders Who Have Outgrown Manual Operating Systems.',
    body: [
      'CE.OS brings executive rhythm, decision support, reflection, accountability, and strategic guidance into the operating environment.',
    ],
    bullets: [
      'CE.OS Executive Operating Layer activated',
      'Built on 20+ years of leadership expertise',
      'Long-term persistent memory for context',
      'OPI \u2014 leadership performance tracked over time',
      'Daily executive brief with strategic recs',
      'Decision journal with pattern recognition',
      'Replaces quarterly frameworks with AI rhythm',
      'Private CE.OS Community (Circle)',
      'Ongoing CE.OS framework updates',
    ],
    whoFor:
      'You have outgrown spreadsheet scorecards and quarterly check-ins. You want an operating layer that runs continuously, knows your business deeply, and gives you the same quality of strategic guidance a world-class operating partner would \u2014 without the consulting fee or the scheduling dependency.',
    includesAbove: true,
  },
]

const layerScreenshots: Record<string, { src: string; alt: string; label: string; lines: string[]; glowColor: string }> = {
  STARTER: {
    src: '/screenshots/layer1-infrastructure.png',
    alt: 'BrightLink system confirmation showing all infrastructure installed and running',
    label: 'What you see after installation',
    lines: [
      'Six green checkmarks. Everything installed, branded, and running. Funnels, automations, CRM, communities. You didn\'t configure any of it.',
      'This is what "done for you" actually looks like.',
    ],
    glowColor: '#E4A124',
  },
  SIGNATURE: {
    src: '/screenshots/aios-voice-command.png',
    alt: 'AIOS voice command interface on iPhone showing real-time business intelligence through Telegram',
    label: 'Real conversation · AIOS via Telegram',
    lines: [
      'Ask for a pulse check. Get your pipeline status and flagged clients back in seconds. Request draft messages and approve them right from the thread.',
      'No dashboard. No login. Just talk to your business.',
    ],
    glowColor: '#5AAEE8',
  },
  PRO: {
    src: '/screenshots/layer3-clientbloom.png',
    alt: 'ClientBloom agent proactively flagging an at-risk client and handling the outreach',
    label: 'Real conversation · ClientBloom via Telegram',
    lines: [
      'The agent notices a client has gone quiet. It drafts a check-in message. You say "send it." It books a follow-up call for the next one. You never opened a dashboard.',
      'Revenue protection that works like a conversation, not a spreadsheet.',
    ],
    glowColor: '#1DBF96',
  },
  'PRO PLUS': {
    src: '/screenshots/layer4-ceos.png',
    alt: 'CE.OS morning brief delivered as a simple conversation with three clear priorities',
    label: 'Real conversation · CE.OS via Telegram',
    lines: [
      'Three priorities. Calendar already blocked. Renewal email already drafted. A pattern from your own decisions surfaced without you asking.',
      'Strategic guidance that arrives before your day starts.',
    ],
    glowColor: '#8B82E0',
  },
}

const CheckIcon = ({ color }: { color: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-5 h-5 flex-shrink-0 mt-0.5">
    <path d="M5 10.5L8.5 14L15 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const FourLayerSystem = () => {
  return (
    <section
      id="system"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-40"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-sm tracking-widest text-brand-orange uppercase mb-4">
          THE FOUR-LAYER SYSTEM
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-5 md:mb-6 mt-3 md:mt-4">
          One Operating Environment.{'\n'}Four Levels of Intelligence.
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-[#A1A1AA] max-w-3xl">
          Each layer adds a new level of visibility, intelligence, and operating leverage. Start where you are. Add layers as your business grows.
        </p>
      </div>

      {/* Orbital Rings */}
      <OrbitalRings />
      <p className="text-sm text-gray-500 text-center mb-16 mt-2">
        Hover each layer to see how the operating environment expands.
      </p>

      {/* Product Screenshots */}
      <div className="mb-20">
        <div className="flex flex-col items-center text-center mb-10">
          <p className="text-sm tracking-widest text-brand-orange uppercase mb-4">
            WHAT IT LOOKS LIKE IN PRACTICE
          </p>
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-5 md:mb-6 mt-3 md:mt-4">
            Real Intelligence. Real Execution.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {[
            {
              label: '[ Telegram \u00b7 Voice Command Interface ]',
              caption: 'Send instructions, query your pipeline, update client records \u2014 all through the AIOS interface on your phone.',
              path: '/screenshots/telegram.png',
            },
            {
              label: '[ GoHighLevel \u00b7 Funnels Dashboard ]',
              caption: 'Four complete funnel types installed, branded, and live inside your GHL sub-account.',
              path: '/screenshots/ghl.png',
            },
            {
              label: '[ AIOS \u00b7 Morning CEO Brief ]',
              caption: 'Your daily operating brief arrives before your workday starts. No dashboard required.',
              path: '/screenshots/brief.png',
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-[#111114] border border-[#1E1E24] rounded-xl p-5"
            >
              <div className="aspect-video bg-[#0A0A0B] rounded-lg flex items-center justify-center mb-3">
                <span className="text-xs text-[#52525B] font-mono text-center px-4">
                  {card.label}
                </span>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-[#A1A1AA]">
                {card.caption}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#52525B] text-center mt-6">
          Screenshots shown after installation. Replace placeholder images with actual product screenshots using the image paths /screenshots/telegram.png, /screenshots/ghl.png, /screenshots/brief.png
        </p>
      </div>

      {/* Layer Cards */}
      <div className="relative">
        {/* Vertical connector line - desktop only */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0" style={{ borderLeft: '2px solid rgba(232, 96, 10, 0.2)' }} />

        <div className="space-y-6">
          {layers.map((layer, index) => (
            <StaggerChild key={index}>
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#111114] border border-[#1E1E24] rounded-xl p-5 md:p-8 pb-6 relative md:ml-12">
                  {/* Includes above tag */}
                  {layer.includesAbove && (
                    <p className="text-xs text-[#52525B] mb-3">+ Includes everything above</p>
                  )}

                  {/* Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-sm font-mono font-semibold"
                      style={{ color: layer.badgeColor }}
                    >
                      {layer.number} · {layer.badge}
                    </span>
                    {layer.badge === 'PRO' && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#1DBF96', color: 'white' }}>
                        ClientBloom
                      </span>
                    )}
                    {layer.badge === 'PRO PLUS' && (
                      <>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#8B82E0', color: 'white' }}>
                          CE.OS
                        </span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#2A2A32] text-[#A1A1AA]">
                          ELITE
                        </span>
                      </>
                    )}
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl md:text-2xl font-semibold text-[#F4F4F5] mb-5 md:mb-6">
                    {layer.headline}
                  </h3>

                  {/* Body */}
                  <div className="text-base md:text-lg leading-relaxed text-[#A1A1AA] mb-6 space-y-3">
                    {layer.body.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-6">
                    {layer.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <CheckIcon color={layer.badgeColor} />
                        <span className="text-base leading-relaxed text-[#A1A1AA]">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Layer screenshot mockup */}
                  {layerScreenshots[layer.badge] && (
                    <div className="mb-6">
                      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        {/* iPhone screenshot */}
                        <div className="relative flex-shrink-0 w-[240px] sm:w-[280px] md:w-[300px]">
                          {/* Colored glow behind the phone */}
                          <div
                            className="absolute inset-0 rounded-3xl blur-2xl opacity-20"
                            style={{ backgroundColor: layerScreenshots[layer.badge].glowColor }}
                          />
                          <img
                            src={layerScreenshots[layer.badge].src}
                            alt={layerScreenshots[layer.badge].alt}
                            className="relative w-full h-auto rounded-2xl"
                          />
                        </div>
                        {/* Caption alongside */}
                        <div className="flex-1 text-center md:text-left">
                          <p className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">
                            {layerScreenshots[layer.badge].label}
                          </p>
                          {layerScreenshots[layer.badge].lines.map((line, li) => (
                            <p key={li} className={`text-base md:text-lg leading-relaxed text-[#A1A1AA]${li > 0 ? ' mt-3' : ''}`}>
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Who this is for */}
                  <div className="bg-[#0A0A0B] border border-[#1E1E24] rounded-lg p-5">
                    <p className="text-xs text-[#52525B] uppercase tracking-wider mb-2 font-semibold">Who this is for</p>
                    <p className="text-base leading-relaxed text-[#A1A1AA]">
                      {layer.whoFor}
                    </p>
                  </div>

                  {/* Credential line for Layer 03 */}
                  {layer.credentialLine && (
                    <p className="text-xs text-[#52525B] italic mt-4">
                      {layer.credentialLine}
                    </p>
                  )}
                </div>
              </motion.div>
            </StaggerChild>
          ))}
        </div>
      </div>

      {/* Closing line */}
      <p className="text-xl font-semibold text-center text-white mt-8">
        The system installs the machine. AIOS makes it intelligent. ClientBloom protects the client layer. CE.OS sharpens the executive.
      </p>
    </section>
  )
}

export default FourLayerSystem
