'use client';

import { AnimatedSection } from '@/components/MotionWrapper';

const rows = [
  { feature: 'CRM & Pipeline Management', replaces: 'HubSpot, Salesforce', cost: '$97–$297+/mo' },
  { feature: 'Sales Funnels', replaces: 'ClickFunnels, Kartra', cost: '$97–$297+/mo' },
  { feature: 'Email Marketing', replaces: 'ActiveCampaign, Mailchimp', cost: '$97–$297+/mo' },
  { feature: 'SMS Marketing', replaces: 'Twilio, SimpleTexting', cost: '$97–$297+/mo' },
  { feature: 'Booking & Calendars', replaces: 'Calendly Pro, Acuity', cost: '$29–$79+/mo' },
  { feature: 'Courses & Products', replaces: 'Kajabi, Thinkific', cost: '$99–$199+/mo' },
  { feature: 'Community Platform', replaces: 'Circle, Skool', cost: '$49–$99+/mo' },
  { feature: 'Workflow Automations', replaces: 'Zapier, Make', cost: '$49–$169+/mo' },
  { feature: 'Website Builder', replaces: 'Webflow, Squarespace', cost: '$29–$79+/mo' },
  { feature: 'Voice Command Business Agent', replaces: 'Nothing else offers this', cost: 'Priceless' },
  { feature: 'Client Retention Intelligence', replaces: 'Gainsight, ChurnZero', cost: '$500–$2,000+/mo' },
  { feature: 'CEO Operating System', replaces: 'EOS/Traction consulting', cost: '$1,000–$5,000+/mo' },
];

export default function WhatItReplaces() {
  return (
    <AnimatedSection id="replaces" className="py-24 md:py-36 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-4">
            THE MATH IS SIMPLE
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F4F4F5] mb-6">
            Replace a Patchwork Stack with One<br />
            Connected Operating Environment.
          </h2>
          <p className="text-base leading-relaxed text-[#A1A1AA] max-w-3xl mx-auto">
            The point is not just saving on software. It is reducing operational drag, eliminating handoff friction, and giving your business one coherent operating environment — instead of a pile of disconnected apps that each demand your attention.
          </p>
        </div>

        {/* Scroll hint on mobile */}
        <div className="block md:hidden mb-4">
          <p className="text-sm text-[#52525B] text-center">
            &larr; Scroll to see full table &rarr;
          </p>
        </div>

        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-[#1E1E24]">
                <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-[#52525B] font-semibold">
                  Feature
                </th>
                <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-[#52525B] font-semibold">
                  What You&apos;re Replacing
                </th>
                <th className="text-right py-4 px-4 text-xs uppercase tracking-wider text-[#52525B] font-semibold">
                  Typical Cost
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-[#1E1E24] ${idx % 2 === 0 ? 'bg-[#111114]' : 'bg-[#0A0A0B]'}`}
                >
                  <td className="py-4 px-4 text-sm font-medium text-[#F4F4F5]">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-sm text-[#A1A1AA]">
                    {row.replaces}
                  </td>
                  <td className="py-4 px-4 text-sm text-[#A1A1AA] text-right whitespace-nowrap">
                    {row.cost}
                  </td>
                </tr>
              ))}

              {/* Total row */}
              <tr
                className="border-t-2"
                style={{ borderColor: '#E8600A' }}
              >
                <td
                  className="py-6 px-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(232,96,10,0.15) 0%, rgba(232,96,10,0.05) 100%)',
                  }}
                >
                  <span className="text-lg md:text-xl font-bold text-[#F4F4F5]">
                    TOTAL IF BOUGHT SEPARATELY
                  </span>
                </td>
                <td
                  className="py-6 px-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(232,96,10,0.15) 0%, rgba(232,96,10,0.05) 100%)',
                  }}
                >
                  <span className="text-lg md:text-xl font-bold text-[#F4F4F5]">
                    $2,500–$10,000+/mo
                  </span>
                </td>
                <td
                  className="py-6 px-4 text-right"
                  style={{
                    background: 'linear-gradient(135deg, rgba(232,96,10,0.15) 0%, rgba(232,96,10,0.05) 100%)',
                  }}
                >
                  <span className="text-lg md:text-2xl font-bold text-[#E8600A]">
                    Starting at $97/mo<br />
                    <span className="text-sm font-normal text-[#A1A1AA]">with BrightLink</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="#pricing"
            className="px-8 py-4 bg-[#E8600A] text-white rounded-lg font-semibold hover:bg-[#d4570a] transition-all duration-200 hover:shadow-[0_0_30px_rgba(232,96,10,0.4)]"
          >
            See Which Layer Fits Your Stage &rarr;
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
