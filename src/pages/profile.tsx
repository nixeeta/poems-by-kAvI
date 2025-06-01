import { useEffect, useState } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) {
        router.push('/login');
      } else {
        setUser(u);
      }
    });
    return () => unsub();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  return (
    <main className="main-container">
      <h1 className="heading mb-4">User Profile</h1>
      {user && (
        <div className="section-box space-y-4">
          <p><strong>Email:</strong> {user.email}</p>
          <button className="button-primary w-full" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      )}
    </main>
  );
}