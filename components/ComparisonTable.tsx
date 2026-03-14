'use client';

import { Check, X } from 'lucide-react';
import { AnimatedSection } from '@/components/MotionWrapper';

export default function ComparisonTable() {
  const features = [
    { name: 'GHL Platform', diy: '✓ Self-setup', launch: '✓ Built for you', pro: '✓ Built for you' },
    { name: 'Funnel Templates', diy: 'Templates only', launch: '✓ Installed + live', pro: '✓ Installed + live' },
    { name: 'Done-for-you build', diy: false, launch: true, pro: true },
    { name: 'Community infrastructure', diy: false, launch: true, pro: true },
    { name: 'Voice command interface', diy: false, launch: true, pro: true },
    { name: 'CRM commands by voice', diy: false, launch: true, pro: true },
    { name: 'Daily AI business brief', diy: false, launch: false, pro: true },
    { name: 'Client retention scoring', diy: false, launch: false, pro: true },
    { name: 'Proactive churn detection', diy: false, launch: false, pro: true },
    { name: 'Pipeline health alerts', diy: false, launch: false, pro: true },
    { name: 'Quarterly strategy audit', diy: false, launch: false, pro: true },
    { name: 'Monthly cost', diy: '$97–$197', launch: '$197', pro: '$497' },
    { name: 'Setup investment', diy: '$0', launch: '$1,997', pro: '$4,997' },
  ];

  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-[#22C55E] mx-auto" />
      ) : (
        <X className="w-5 h-5 text-[#52525B] mx-auto" />
      );
    }
    return <span className="text-sm text-[#A1A1AA]">{value}</span>;
  };

  return (
    <AnimatedSection id="compare" className="py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F4F4F5]">
            How We Compare
          </h2>
        </div>

        <div className="block md:hidden mb-4">
          <p className="text-sm text-[#52525B] text-center">
            ← Scroll to compare →
          </p>
        </div>

        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#1E1E24]">
                <th className="sticky left-0 bg-[#0A0A0B] z-10 text-left py-4 px-4 text-xs uppercase tracking-wider text-[#52525B] font-semibold">
                  Feature
                </th>
                <th className="text-center py-4 px-4 text-xs uppercase tracking-wider text-[#52525B] font-semibold min-w-[140px]">
                  DIY / GHL Alone
                </th>
                <th className="text-center py-4 px-4 text-xs uppercase tracking-wider text-[#52525B] font-semibold min-w-[140px]">
                  Voice Ops Launch
                </th>
                <th className="text-center py-4 px-4 text-xs uppercase tracking-wider text-brand-orange font-semibold min-w-[140px]">
                  Voice Ops Pro
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-[#1E1E24] ${idx % 2 === 0 ? 'bg-[#111114]' : 'bg-transparent'}`}
                >
                  <td className="sticky left-0 bg-inherit z-10 text-left py-4 px-4 text-sm font-medium text-[#A1A1AA]">
                    {feature.name}
                  </td>
                  <td className="text-center py-4 px-4">{renderCell(feature.diy)}</td>
                  <td className="text-center py-4 px-4">{renderCell(feature.launch)}</td>
                  <td className="text-center py-4 px-4">{renderCell(feature.pro)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-[#52525B] text-center mt-8 max-w-3xl mx-auto">
          *DIY/GHL column reflects self-managed setups using standard GHL tools and publicly available snapshot resources. No voice command or AI intelligence layer is included in any off-the-shelf GHL configuration.
        </p>
      </div>
    </AnimatedSection>
  );
}
