// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import '@/styles/Navbar.css'; // Assuming you have a CSS file for styles
import '@/styles/globals.css'; // Global styles

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">Poems by kAvI</Link>
      </div>
      <div className="nav-links">
        <Link href="/poems">Explore</Link>
        <Link href='/history'>History</Link>
        <Link href="/explore">Inspiration</Link>
        <Link href="/create">Upload</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/">Login</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">ContactUs</Link>
      </div>
    </nav>
  );
}
