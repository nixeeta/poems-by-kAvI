// components/UserProfile.tsx
import React, { useState, useEffect } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const UserProfile: React.FC = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  useEffect(() => {
    setDisplayName(user?.displayName || '');
    setEmail(user?.email || '');
  }, [user]);

  const handleUpdate = async () => {
    setLoading(true);
    setError(null);
    setSuccessMsg(null);

    try {
      if (user) {
        await updateProfile(user, { displayName });
        setSuccessMsg('Profile updated successfully!');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to update profile.');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return <p>Please log in to view profile.</p>;
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-dark-purple">Your Profile</h2>
      {error && <ErrorMessage message={error} />}
      {successMsg && <div className="text-green-600 mb-3">{successMsg}</div>}
      {loading && <LoadingSpinner />}
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-dark-purple" htmlFor="displayName">
          Display Name
        </label>
        <input
          id="displayName"
          type="text"
          className="w-full border border-crayola rounded-md p-2"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-dark-purple" htmlFor="email">
          Email (read-only)
        </label>
        <input
          id="email"
          type="email"
          className="w-full border border-crayola rounded-md p-2 bg-gray-100"
          value={email}
          disabled
        />
      </div>
      <button
        onClick={handleUpdate}
        disabled={loading}
        className="bg-dark-purple text-white px-4 py-2 rounded hover:bg-crayola hover:text-dark-purple transition"
      >
        Update Profile
      </button>
    </div>
  );
};

export default UserProfile;