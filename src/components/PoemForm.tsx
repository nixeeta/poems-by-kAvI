// components/PoemForm.tsx
import React, { useState } from 'react';

interface PoemFormProps {
  onSubmit: (title: string, content: string, isPublic: boolean) => void;
  initialTitle?: string;
  initialContent?: string;
  initialIsPublic?: boolean;
}

const PoemForm: React.FC<PoemFormProps> = ({
  onSubmit,
  initialTitle = '',
  initialContent = '',
  initialIsPublic = false,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [isPublic, setIsPublic] = useState(initialIsPublic);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content, isPublic);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-md shadow-md">
      <div>
        <label htmlFor="title" className="block font-semibold mb-1 text-dark-purple">
          Title:
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border border-crayola rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-xanthous"
        />
      </div>
      <div>
        <label htmlFor="content" className="block font-semibold mb-1 text-dark-purple">
          Content:
        </label>
        <textarea
          id="content"
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full border border-crayola rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-xanthous resize-none"
        />
      </div>
      <div className="flex items-center space-x-2">
        <input
          id="isPublic"
          type="checkbox"
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}
          className="w-4 h-4"
        />
        <label htmlFor="isPublic" className="text-dark-purple select-none">
          Make poem public
        </label>
      </div>
      <button
        type="submit"
        className="bg-dark-purple text-white px-4 py-2 rounded-md hover:bg-crayola transition-colors"
      >
        Save Poem
      </button>
    </form>
  );
};

export default PoemForm;
