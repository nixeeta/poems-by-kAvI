// components/SearchHistory.tsx
import React from 'react';

interface SearchHistoryProps {
  history: string[];
  onSelect: (term: string) => void;
  onClear?: () => void;
}

const SearchHistory: React.FC<SearchHistoryProps> = ({ history, onSelect, onClear }) => {
  if (history.length === 0) return null;

  return (
    <div className="bg-xanthous p-3 rounded-md mb-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-dark-purple">Recent Searches</h4>
        {onClear && (
          <button
            onClick={onClear}
            className="text-sm text-crayola hover:underline focus:outline-none"
            aria-label="Clear search history"
          >
            Clear
          </button>
        )}
      </div>
      <ul className="flex flex-wrap gap-2">
        {history.map((term, idx) => (
          <li key={idx}>
            <button
              onClick={() => onSelect(term)}
              className="text-sm bg-white px-3 py-1 rounded-full shadow hover:bg-crayola hover:text-white focus:outline-none"
            >
              {term}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
