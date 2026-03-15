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

export default function TerminalChat() {
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111114] opacity-0 md:opacity-100 pointer-events-none rounded-xl" />

      <div className="font-mono text-[#52525B] text-xs mb-4 border-b border-[#1E1E24] pb-4">
        // Telegram — Voice Ops AI
      </div>

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
