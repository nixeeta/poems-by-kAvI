// app/inspirational/page.tsx
"use client";

import { useState } from "react";
import { generatePrompt } from "@/lib/ai"; // AI prompt generation (Gemini/Genkit)

export default function InspirationalPage() {
  const [prompt, setPrompt] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const idea = await generatePrompt(); // Example: returns "A rainy night in Tokyo"
    setPrompt(idea);
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Need Inspiration?</h1>
      <p className="mb-6">Click below to get a fresh poetic idea or setting to write about.</p>
      <button
        onClick={handleGenerate}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        disabled={loading}
      >
        {loading ? "Thinking..." : "Get Inspired"}
      </button>
      {prompt && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="font-semibold text-xl mb-2">Your Prompt</h2>
          <p>{prompt}</p>
        </div>
      )}
    </div>
  );
}
