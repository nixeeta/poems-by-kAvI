// components/WordInclusion.tsx
import React from 'react';

interface WordInclusionProps {
  words: string;
  setWords: (value: string) => void;
}

const WordInclusion: React.FC<WordInclusionProps> = ({ words, setWords }) => {
  return (
    <div className="mb-4">
      <label htmlFor="words" className="block font-semibold mb-1 text-dark-purple">
        Words to Include:
      </label>
      <input
        id="words"
        type="text"
        value={words}
        onChange={(e) => setWords(e.target.value)}
        className="w-full border border-crayola rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-xanthous"
        placeholder="Separate words with commas"
      />
    </div>
  );
};

export default WordInclusion;
