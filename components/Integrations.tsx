'use client';

import { Check } from 'lucide-react';
import { AnimatedSection } from '@/components/MotionWrapper';

export default function Integrations() {
  const integrations = [
    'GoHighLevel',
    'Zapier',
    'Slack',
    'Zoom',
    'Kajabi',
    'Skool',
    'Circle',
    'Stripe',
    'PayPal',
    'Google Workspace',
    'Calendly',
    'Notion',
    'HubSpot',
    'ClickFunnels',
    'Fathom',
    'Otter.ai',
  ];

  const orbitLabels = [
    { ring: 1, labels: ['GoHighLevel', 'Stripe', 'Slack'] },
    { ring: 2, labels: ['Zoom', 'Kajabi', 'Calendly', 'HubSpot'] },
    { ring: 3, labels: ['Circle', 'Notion', 'Zapier', 'Fathom', 'Skool'] },
  ];

  const getOrbitPosition = (index: number, total: number, ringIndex: number) => {
    const angle = (index / total) * 360;
    const ringRadius = [100, 170, 240][ringIndex];
    const x = Math.cos((angle * Math.PI) / 180) * ringRadius;
    const y = Math.sin((angle * Math.PI) / 180) * ringRadius;
    return { x, y, angle };
  };

  return (
    <AnimatedSection id="integrations" className="py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">
            WORKS WITH YOUR EXISTING STACK
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F4F4F5] mb-4">
            Your Tools Stay. The Chaos Goes.
          </h2>
          <p className="text-[#A1A1AA] max-w-2xl mx-auto">
            Voice Ops connects to every platform your business already uses, from communication tools to payment processors. Your existing integrations keep working, but now they're voice-triggered and fully automated.
          </p>
        </div>

        {/* Marquee for mobile/tablet, hidden on desktop */}
        <div className="block lg:hidden mb-12">
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-scroll">
              {[...integrations, ...integrations].map((integration, idx) => (
                <div
                  key={idx}
                  className="bg-[#16161A] border border-[#1E1E24] rounded-full px-4 py-2 text-sm font-body text-[#A1A1AA] whitespace-nowrap"
                >
                  {integration}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Orbital diagram for desktop */}
        <div className="hidden lg:flex justify-center mb-16">
          <div className="relative w-full max-w-2xl aspect-square">
            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-[#E8600A] to-[#FF7A1F] flex items-center justify-center text-white font-bold text-sm animate-pulse-orange z-20">
              AIOS
            </div>

            {/* Orbital rings */}
            {[200, 340, 480].map((size, ringIndex) => (
              <div
                key={ringIndex}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[rgba(232,96,10,0.12)] rounded-full"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  animation: `orbit-${ringIndex} ${8 + ringIndex * 6}s linear infinite`,
                }}
              />
            ))}

            {/* Orbiting labels */}
            {orbitLabels.map((ring, ringIndex) => (
              ring.labels.map((label, idx) => {
                const { x, y } = getOrbitPosition(idx, ring.labels.length, ringIndex);
                const ringRadius = [100, 170, 240][ringIndex];
                return (
                  <div
                    key={`${ringIndex}-${idx}`}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      width: `${ringRadius * 2}px`,
                      height: `${ringRadius * 2}px`,
                    }}
                  >
                    <div
                      className="absolute w-full h-full"
                      style={{
                        animation: `counter-orbit-${ringIndex} ${8 + ringIndex * 6}s linear infinite`,
                      }}
                    >
                      <div
                        className="absolute bg-[#111114] border border-[#1E1E24] rounded-full px-3 py-1 text-xs text-[#A1A1AA] whitespace-nowrap"
                        style={{
                          left: '50%',
                          top: '0',
                          transform: 'translateX(-50%)',
                        }}
                      >
                        {label}
                      </div>
                    </div>
                  </div>
                );
              })
            ))}
          </div>
        </div>

        {/* Center feature panel */}
        <div className="max-w-3xl mx-auto border border-[#1E1E24] bg-[#111114] rounded-xl p-8 mb-12">
          <p className="text-[#A1A1AA] mb-6 leading-relaxed">
            Voice Ops connects to your entire business ecosystem. Every integration point—from GoHighLevel to Slack, Zapier to Stripe—becomes a voice-activated trigger. Your existing tools work harder, your team works smarter, and nothing gets lost in translation.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
              <span className="text-sm text-[#A1A1AA]">Native integrations with 50+ platforms</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
              <span className="text-sm text-[#A1A1AA]">Custom Zapier workflows included</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
              <span className="text-sm text-[#A1A1AA]">Voice-triggered actions across your stack</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
              <span className="text-sm text-[#A1A1AA]">Real-time sync and data consistency</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-[#52525B] text-center">
          GoHighLevel remains the core backbone—all voice operations run through GHL, but Voice Ops extends its power to every tool you already use.
        </p>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        @keyframes orbit-0 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbit-1 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbit-2 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes counter-orbit-0 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes counter-orbit-1 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes counter-orbit-2 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </AnimatedSection>
  );
}
