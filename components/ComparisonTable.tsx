'use client';

import { AnimatedSection } from '@/components/MotionWrapper';

export default function ComparisonTable() {
  const features = [
    { name: 'Done-for-you GHL build', diy: false, starter: true, signature: true, pro: true, proPlus: true },
    { name: 'All 4 funnel types installed', diy: false, starter: true, signature: true, pro: true, proPlus: true },
    { name: 'Community infrastructure', diy: false, starter: true, signature: true, pro: true, proPlus: true },
    { name: 'Business Intelligence Agent', diy: false, starter: false, signature: true, pro: true, proPlus: true },
    { name: 'AIOS intelligence layer', diy: false, starter: false, signature: true, pro: true, proPlus: true },
    { name: 'Daily morning brief', diy: false, starter: false, signature: true, pro: true, proPlus: true },
    { name: 'ClientBloom intelligence', diy: false, starter: false, signature: false, pro: true, proPlus: true },
    { name: 'Client retention scoring (CRS)', diy: false, starter: false, signature: false, pro: true, proPlus: true },
    { name: 'Proactive churn detection', diy: false, starter: false, signature: false, pro: true, proPlus: true },
    { name: 'CE.OS operating system', diy: false, starter: false, signature: false, pro: false, proPlus: true },
    { name: 'OPI performance scoring', diy: false, starter: false, signature: false, pro: false, proPlus: true },
    { name: 'CE.OS community access', diy: false, starter: false, signature: false, pro: false, proPlus: true },
  ];

  const pricing = { name: 'Monthly', diy: 'DIY', starter: '$97', signature: '$147', pro: '$497', proPlus: '$997' };

  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <span className="text-base md:text-lg text-brand-orange font-bold">&#10003;</span>
      ) : (
        <span className="text-base md:text-lg text-gray-600">&#10007;</span>
      );
    }
    return <span className="text-sm text-[#A1A1AA]">{value}</span>;
  };

  return (
    <AnimatedSection id="compare" className="py-20 md:py-28 lg:py-40 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F4F4F5] mb-5 md:mb-6">
            How the Layers Stack Up
          </h2>
        </div>

        <div className="block md:hidden mb-4">
          <p className="text-sm text-[#52525B] text-center">
            &larr; Scroll to compare all 4 tiers &rarr;
          </p>
        </div>

        <div className="relative overflow-x-auto -mx-4 px-4">
          <table className="w-full border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-[#1E1E24]">
                <th className="sticky left-0 bg-[#0A0A0B] z-10 text-left py-3 md:py-4 px-4 text-xs md:text-sm font-medium uppercase tracking-wide text-gray-300 min-w-[140px]">
                  Feature
                </th>
                <th className="text-center py-3 md:py-4 px-3 text-xs uppercase tracking-wider text-[#52525B] font-semibold min-w-[90px]">
                  DIY / GHL Alone
                </th>
                <th className="text-center py-3 md:py-4 px-3 text-xs uppercase tracking-wider text-[#52525B] font-semibold min-w-[90px]">
                  Starter
                </th>
                <th className="text-center py-3 md:py-4 px-3 text-xs uppercase tracking-wider text-[#52525B] font-semibold min-w-[90px]">
                  Signature
                </th>
                <th className="text-center py-3 md:py-4 px-3 text-xs uppercase tracking-wider text-brand-orange font-semibold min-w-[90px]">
                  Pro
                </th>
                <th className="text-center py-3 md:py-4 px-3 text-xs uppercase tracking-wider font-semibold min-w-[90px]" style={{ color: '#8B82E0' }}>
                  Pro Plus
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-[#1E1E24] ${idx % 2 === 0 ? 'bg-[#111114]' : 'bg-transparent'}`}
                >
                  <td className="sticky left-0 z-10 text-left py-3 md:py-4 px-4 text-xs md:text-sm font-medium uppercase tracking-wide text-gray-300 min-w-[140px]" style={{ backgroundColor: idx % 2 === 0 ? '#111114' : '#0A0A0B' }}>
                    {feature.name}
                  </td>
                  <td className="text-center py-3 md:py-4 px-3 min-w-[90px]">{renderCell(feature.diy)}</td>
                  <td className="text-center py-3 md:py-4 px-3 min-w-[90px]">{renderCell(feature.starter)}</td>
                  <td className="text-center py-3 md:py-4 px-3 min-w-[90px]">{renderCell(feature.signature)}</td>
                  <td className="text-center py-3 md:py-4 px-3 min-w-[90px]">{renderCell(feature.pro)}</td>
                  <td className="text-center py-3 md:py-4 px-3 min-w-[90px]">{renderCell(feature.proPlus)}</td>
                </tr>
              ))}
              {/* Pricing row */}
              <tr className="border-b border-[#1E1E24] bg-[#111114]">
                <td className="sticky left-0 z-10 text-left py-3 md:py-4 px-4 text-xs md:text-sm font-semibold uppercase tracking-wide text-[#F4F4F5] min-w-[140px]" style={{ backgroundColor: '#111114' }}>
                  {pricing.name}
                </td>
                <td className="text-center py-3 md:py-4 px-3 min-w-[90px]"><span className="text-sm text-[#A1A1AA]">{pricing.diy}</span></td>
                <td className="text-center py-3 md:py-4 px-3 min-w-[90px]"><span className="text-sm text-[#A1A1AA]">{pricing.starter}</span></td>
                <td className="text-center py-3 md:py-4 px-3 min-w-[90px]"><span className="text-sm text-[#A1A1AA]">{pricing.signature}</span></td>
                <td className="text-center py-3 md:py-4 px-3 min-w-[90px]"><span className="text-sm font-semibold text-brand-orange">{pricing.pro}</span></td>
                <td className="text-center py-3 md:py-4 px-3 min-w-[90px]"><span className="text-sm font-semibold" style={{ color: '#8B82E0' }}>{pricing.proPlus}</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-[#52525B] text-center mt-8 max-w-3xl mx-auto">
          *DIY/GHL column reflects self-managed setups using standard GHL tools and publicly available snapshot resources. No AI intelligence layer is included in any off-the-shelf GHL configuration.
        </p>
      </div>
    </AnimatedSection>
  );
}
