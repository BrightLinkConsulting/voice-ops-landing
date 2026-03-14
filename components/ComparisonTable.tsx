'use client';

import { Check, X } from 'lucide-react';
import { AnimatedSection } from '@/components/MotionWrapper';

export default function ComparisonTable() {
  const features = [
    { name: 'Voice-Triggered Automations', voiceOps: true, ghl: true, selfSetup: false, templatesOnly: false },
    { name: 'Done-For-You Systems Build', voiceOps: true, ghl: false, selfSetup: false, templatesOnly: false },
    { name: 'Custom Integration Development', voiceOps: true, ghl: false, selfSetup: false, templatesOnly: false },
    { name: 'Workflow Optimization', voiceOps: true, ghl: false, selfSetup: false, templatesOnly: false },
    { name: 'Analytics & Reporting', voiceOps: true, ghl: true, selfSetup: true, templatesOnly: false },
    { name: 'White-Label Capabilities', voiceOps: true, ghl: true, selfSetup: false, templatesOnly: false },
    { name: 'Dedicated Support', voiceOps: true, ghl: false, selfSetup: false, templatesOnly: false },
    { name: 'Multi-Platform Integration', voiceOps: true, ghl: true, selfSetup: true, templatesOnly: true },
    { name: 'Pre-Built Templates', voiceOps: true, ghl: true, selfSetup: true, templatesOnly: true },
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
                <th className="text-center py-4 px-4 text-xs uppercase tracking-wider text-[#52525B] font-semibold min-w-[120px]">
                  Voice Ops
                </th>
                <th className="text-center py-4 px-4 text-xs uppercase tracking-wider text-[#52525B] font-semibold min-w-[120px]">
                  GHL Pro
                </th>
                <th className="text-center py-4 px-4 text-xs uppercase tracking-wider text-[#52525B] font-semibold min-w-[120px]">
                  Self-setup
                </th>
                <th className="text-center py-4 px-4 text-xs uppercase tracking-wider text-[#52525B] font-semibold min-w-[120px]">
                  Templates Only
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
                  <td className="text-center py-4 px-4">{renderCell(feature.voiceOps)}</td>
                  <td className="text-center py-4 px-4">{renderCell(feature.ghl)}</td>
                  <td className="text-center py-4 px-4">{renderCell(feature.selfSetup)}</td>
                  <td className="text-center py-4 px-4">{renderCell(feature.templatesOnly)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-[#52525B] text-center mt-8">
          Voice Ops includes professional implementation, ongoing optimization, and white-label capabilities. Other solutions require manual configuration and technical knowledge.
        </p>
      </div>
    </AnimatedSection>
  );
}
