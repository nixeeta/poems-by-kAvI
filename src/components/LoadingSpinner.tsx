// components/LoadingSpinner.tsx
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-xanthous border-solid border-transparent"></div>
    </div>
  );
};

export default LoadingSpinner;
