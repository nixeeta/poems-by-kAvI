// components/StyleSelector.tsx
import React from 'react';

interface StyleSelectorProps {
  size: string;
  setSize: (value: string) => void;
  style: string;
  setStyle: (value: string) => void;
}

const poemSizes = ['Short', 'Medium', 'Long'];
const poemStyles = ['Sonnet', 'Haiku', 'Free Verse', 'Limerick'];

const StyleSelector: React.FC<StyleSelectorProps> = ({ size, setSize, style, setStyle }) => {
  return (
    <div className="mb-4 flex space-x-4">
      <div className="flex-1">
        <label htmlFor="size" className="block font-semibold mb-1 text-dark-purple">
          Poem Size:
        </label>
        <select
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="w-full border border-crayola rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-xanthous"
        >
          {poemSizes.map((option) => (
            <option key={option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="style" className="block font-semibold mb-1 text-dark-purple">
          Poem Style:
        </label>
        <select
          id="style"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="w-full border border-crayola rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-xanthous"
        >
          {poemStyles.map((option) => (
            <option key={option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default StyleSelector;