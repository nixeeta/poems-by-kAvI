// components/PoemDisplay.tsx
import React from "react";

interface Poem {
  id: string;
  title: string;
  content: string;
  authorId?: string;
}

interface PoemDisplayProps {
  poem: Poem;
}

export default function PoemDisplay({ poem }: PoemDisplayProps) {
  return (
    <div className="p-4 border rounded-md shadow-sm bg-white hover:shadow-md transition-shadow cursor-pointer">
      <h2 className="text-xl font-semibold mb-2">{poem.title}</h2>
      <p className="text-gray-700 line-clamp-3">{poem.content}</p>
    </div>
  );
}
