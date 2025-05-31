// inspiration page

'use client';

import { useState } from 'react';
import { generatePoem } from '@/lib/ai'; 
import '@/styles/globals.css'; // Global styles

export default function ExplorePage() {
  const [poem, setPoem] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generatePoem("Write a beautiful inspirational poem.");
    setPoem(result);
    setLoading(false);
  };

  return (
    <main className='main-container'>
      <h1 className='heading'>Explore AI-Generated Poetry</h1>
      <h1 className='subheading'>Got your own ideas? Let's build on it!
      </h1>
      <button onClick={handleGenerate} className='button'>
        {loading ? "Generating..." : "Generate Poem"}
      </button>
      {poem && <pre>{poem}</pre>}
    </main>
  );
}
