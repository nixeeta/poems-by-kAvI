// src/pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="main-container">
      <h1 className="heading mb-4">Welcome to Poems by kAvI</h1>
      <p className="subheading mb-8">A place where AI meets poetry.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/create">
          <div className="section-box hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">Create with AI</h2>
            <p>Generate poems based on theme, style, and keywords.</p>
          </div>
        </Link>

        <Link href="/upload">
          <div className="section-box hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">Upload Your Original</h2>
            <p>Share your own poetic creations with the world.</p>
          </div>
        </Link>

        <Link href="/inspire">
          <div className="section-box hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">Get Inspired</h2>
            <p>Explore poems by renowned authors.</p>
          </div>
        </Link>

        <Link href="/history">
          <div className="section-box hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">Your History</h2>
            <p>View all the poems you've created or uploaded.</p>
          </div>
        </Link>
      </div>

      <div className="mt-8">
        <Link href="/login">
          <div className="button-primary">Login / Signup</div>
        </Link>
      </div>
    </main>
  );
}
