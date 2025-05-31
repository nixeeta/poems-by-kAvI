// components/InspirationalPanel.tsx
import React from 'react';

const quotes = [
  "Poetry is when an emotion has found its thought and the thought has found words. — Robert Frost",
  "A poem begins as a lump in the throat, a sense of wrong, a homesickness, a lovesickness. — Robert Frost",
  "Poetry is the spontaneous overflow of powerful feelings. — William Wordsworth",
  "The poet is a liar who always speaks the truth. — Jean Cocteau",
];

const InspirationalPanel: React.FC = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <aside className="bg-xanthous p-4 rounded-md mb-6 shadow-md text-dark-purple font-serif">
      <h3 className="mb-2 font-semibold text-lg">Inspirational Quote</h3>
      <p className="italic">"{randomQuote}"</p>
    </aside>
  );
};

export default InspirationalPanel;
