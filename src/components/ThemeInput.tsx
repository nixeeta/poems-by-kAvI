// components/ThemeInput.tsx
import React from 'react';

interface ThemeInputProps {
  theme: string;
  setTheme: (value: string) => void;
}

const ThemeInput: React.FC<ThemeInputProps> = ({ theme, setTheme }) => {
  return (
    <div className="mb-4">
      <label htmlFor="theme" className="block font-semibold mb-1 text-dark-purple">
        Enter Poem Theme:
      </label>
      <input
        id="theme"
        type="text"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="w-full border border-crayola rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-xanthous"
        placeholder="e.g., Love, Nature, Hope..."
      />
    </div>
  );
};

export default ThemeInput;
