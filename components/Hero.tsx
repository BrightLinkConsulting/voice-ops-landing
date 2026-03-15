'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Message {
  type: 'user' | 'aios' | 'status';
  content: string;
}

interface Conversation {
  messages: Message[];
}

const conversations: Conversation[] = [
  {
    messages: [
      { type: 'user', content: "Who hasn't responded to my last follow-up this week?" },
      {
        type: 'aios',
        content:
          '4 contacts: Sarah M., James T., Apex Digital, and Coach Rebecca. Want me to send a follow-up sequence to all four?',
      },
      { type: 'user', content: 'Yes, send it. And add a note to each profile.' },
      {
        type: 'aios',
        content: 'Done. Follow-ups sent. Notes added to all four GHL profiles.',
      },
      { type: 'status', content: '✓ 4 emails sent' },
      { type: 'status', content: '✓ 4 CRM notes created' },
      { type: 'status', content: '✓ Pipeline updated' },
    ],
  },
  {
    messages: [
      { type: 'user', content: "What's my pipeline looking like this week?" },
      {
        type: 'aios',
        content:
          '12 active deals. Total value: $34,200. 3 proposals pending over 5 days. Highest priority: DataFlow Inc at $8,500.',
      },
      { type: 'user', content: 'Draft a follow-up to DataFlow.' },
      {
        type: 'aios',
        content: 'Done. Email drafted and ready for review.',
      },
      { type: 'status', content: '✓ Draft created' },
      { type: 'status', content: '✓ Queued for review' },
    ],
  },
  {
    messages: [
      {
        type: 'user',
        content:
          "Add a note to Marcus Cole's profile — great call today, schedule follow-up in 2 weeks.",
      },
      {
        type: 'aios',
        content:
          'Note added to Marcus Cole. Follow-up reminder set for March 28th.',
      },
      { type: 'status', content: '✓ CRM note logged' },
      { type: 'status', content: '✓ Reminder scheduled' },
    ],
  },
];

function Terminal() {
  const [currentConversationIndex, setCurrentConversationIndex] = useState(0);
  const [displayedMessages, setDisplayedMessages] = useState<Message[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const conversation = conversations[currentConversationIndex];
    let messageIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const showNextMessage = () => {
      if (messageIndex < conversation.messages.length) {
        setDisplayedMessages((prev) => [...prev, conversation.messages[messageIndex]]);
        messageIndex++;
        timeoutId = setTimeout(showNextMessage, 600);
      } else {
        // All messages shown, wait then transition
        timeoutId = setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            setCurrentConversationIndex(
              (prev) => (prev + 1) % conversations.length
            );
            setDisplayedMessages([]);
            setIsVisible(true);
          }, 300);
        }, 3000);
      }
    };

    timeoutId = setTimeout(showNextMessage, 600);

    return () => clearTimeout(timeoutId);
  }, [currentConversationIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="relative bg-[#111114] border border-[#1E1E24] rounded-xl p-6 overflow-hidden h-80"
      style={{
        boxShadow: '0 0 40px rgba(232, 96, 10, 0.08)',
      }}
    >
      {/* Gradient overlay at bottom for fade effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111114] opacity-0 md:opacity-100 pointer-events-none rounded-xl" />

      {/* Header */}
      <div className="font-mono text-[#52525B] text-xs mb-4 border-b border-[#1E1E24] pb-4">
        // Telegram — Voice Ops AI
      </div>

      {/* Messages Container */}
      <div className="space-y-3 overflow-hidden max-h-64">
        {displayedMessages.filter(Boolean).map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`text-xs md:text-sm font-mono ${
              message.type === 'user'
                ? 'text-[#F4F4F5] text-right pr-2'
                : message.type === 'aios'
                  ? 'text-[#A1A1AA] text-left pl-2'
                  : 'text-[#22C55E] text-left pl-2'
            }`}
          >
            {message.type === 'user' && <span className="block">{message.content}</span>}
            {message.type === 'aios' && <span className="block">{message.content}</span>}
            {message.type === 'status' && <span className="block">{message.content}</span>}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 md:pt-32 pb-20 px-4 md:px-8 overflow-hidden">
      {/* Gradient glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
          style={{
            background:
              'radial-gradient(circle, rgba(232,96,10,0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Grain overlay */}
      <div className="grain absolute inset-0 pointer-events-none opacity-5" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column */}
          <div className="md:col-span-3 space-y-6">
            {/* Eyebrow */}
            <motion.div
              variants={itemVariants}
              className="text-xs uppercase tracking-[0.2em] text-[#E8600A] font-body"
            >
              FOR SUBJECT MATTER EXPERTS READY TO SCALE
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
                <div>
                  <span className="italic text-[#E8600A]">You Have the Expertise.</span>
                </div>
                <div>Now Command the</div>
                <div>Business Around It.</div>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div variants={itemVariants}>
              <p className="text-lg text-[#A1A1AA] font-body leading-relaxed max-w-xl">
                Built for subject matter experts who are done managing software and ready to command their business instead. We install a complete client acquisition system inside GoHighLevel — funnels, automations, community, and an AI operating layer you run by voice from your phone. Your expertise reaches more people. Your business handles the rest.
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.div
              variants={itemVariants}
              className="text-sm text-[#52525B] font-body"
            >
              Humans command. AI executes.
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row gap-4 md:gap-4 pt-4"
            >
              <button className="px-8 py-4 bg-[#E8600A] text-white rounded-lg font-semibold flex items-center justify-center hover:bg-[#d4570a] transition-all duration-200 animate-pulse-orange hover:shadow-[0_0_30px_rgba(232,96,10,0.4)]">
                See What Gets Built →
              </button>
              <button className="px-8 py-4 border border-[#2E2E38] text-[#A1A1AA] rounded-lg font-semibold hover:border-[#E8600A] hover:text-white transition-all duration-200">
                Watch the 3-Minute Overview
              </button>
            </motion.div>
          </div>

          {/* Right Column - Terminal */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Terminal />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
