// src/pages/create.tsx
import { useState } from 'react';

export default function CreatePoem() {
  const [theme, setTheme] = useState('');
  const [style, setStyle] = useState('');
  const [length, setLength] = useState('medium');
  const [keywords, setKeywords] = useState('');
  const [generatedPoem, setGeneratedPoem] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/generate-poem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ theme, style, length, keywords }),
      });
      const data = await res.json();
      setGeneratedPoem(data.poem);
    } catch (err) {
      console.error('Error generating poem:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="main-container">
      <h1 className="heading mb-6">Create a Poem with AI</h1>
      <form onSubmit={handleGenerate} className="space-y-4 section-box">
        <input
          type="text"
          placeholder="Theme (e.g., love, nature)"
          className="w-full p-2 border rounded"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Style (e.g., haiku, rhymed, free verse)"
          className="w-full p-2 border rounded"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          required
        />
        <select
          className="w-full p-2 border rounded"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        >
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
        </select>
        <input
          type="text"
          placeholder="Keywords (comma separated)"
          className="w-full p-2 border rounded"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
        <button type="submit" className="button-primary w-full" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Poem'}
        </button>
      </form>

      {generatedPoem && (
        <div className="section-box mt-6 whitespace-pre-line">
          <h2 className="text-2xl font-semibold mb-2">Your Poem:</h2>
          <p>{generatedPoem}</p>
        </div>
      )}
    </main>
  );
}
