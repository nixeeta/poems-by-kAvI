// components/PoemCard.tsx
import React from 'react';
import Link from 'next/link';
import type { Poem } from '@/types';

interface PoemCardProps {
  poem: Poem;
}

export default function PoemCard({ poem }: PoemCardProps) {
  return (
    <Link href={`/poems/${poem.id}`}>
      <div className="p-4 bg-white dark:bg-zinc-900 shadow-md rounded-xl hover:shadow-lg transition">
        <h2 className="text-xl font-semibold">{poem.title}</h2>
        <p className="text-sm mt-2 line-clamp-3">{poem.content}</p>
        <p className="text-xs text-gray-500 mt-1">By: {poem.authorName ?? 'Unknown'}</p>
      </div>
    </Link>
  );
}
