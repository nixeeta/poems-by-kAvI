import { useEffect, useState } from 'react';
import Link from 'next/link';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    if (typeof window !== 'undefined') {
      const mode = localStorage.getItem('theme');
      if (mode === 'dark') {
        document.documentElement.classList.add('dark');
        setDarkMode(true);
      }
    }
    return () => unsub();
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    setDarkMode(!isDark);
  };

  return (
    <nav className="navbar-container">
      <Link href="/" className="navbar-logo">📝 kAvI</Link>
      <div className="navbar-links">
        <Link href="/create">Create</Link>
        <Link href="/upload">Upload</Link>
        <Link href="/inspire">Inspire</Link>
        <Link href="/history">History</Link>
        {user ? <Link href="/profile">Profile</Link> : <Link href="/login">Login</Link>}
        <button onClick={toggleDarkMode}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}
