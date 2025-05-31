// components/PoemList.tsx
import React from 'react';
import PoemCard from './PoemCard';

interface Poem {
  id: string;
  title: string;
  content: string;
  authorId: string;
  isPublic: boolean;
}

interface PoemListProps {
  poems: Poem[];
  onSelectPoem?: (id: string) => void;
}

const PoemList: React.FC<PoemListProps> = ({ poems, onSelectPoem }) => {
  if (poems.length === 0) {
    return <p className="text-center text-gray-600">No poems found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {poems.map((poem) => (
        <PoemCard
          key={poem.id}
          title={poem.title}
          content={poem.content}
          authorId={poem.authorId}
          isPublic={poem.isPublic}
          onSelect={() => onSelectPoem?.(poem.id)}
        />
      ))}
    </div>
  );
};

export default PoemList;
