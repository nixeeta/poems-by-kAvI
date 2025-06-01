import { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { auth } from '../utils/firebase';

export default function PoemListPage({ personal }: { personal: boolean }) {
  const [poems, setPoems] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('');
  const [userId, setUserId] = useState('');

  const router = useRouter();

  useEffect(() => {
    const fetchPoems = async () => {
      let q;
      if (personal) {
        const user = auth.currentUser;
        if (!user) {
          router.push('/login');
          return;
        }
        setUserId(user.uid);
        q = query(collection(db, 'poems'), where('userId', '==', user.uid));
      } else {
        q = query(collection(db, 'poems'), where('isInspire', '==', true));
      }

      const snapshot = await getDocs(q);
      const list = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setPoems(list);
      setFiltered(list);
    };

    fetchPoems();
  }, [personal]);

  useEffect(() => {
    const filteredList = poems.filter((poem) => {
      const matchesSearch =
        poem.title.toLowerCase().includes(search.toLowerCase()) ||
        poem.content.toLowerCase().includes(search.toLowerCase());

      const matchesType = filterType ? poem.type === filterType : true;
      return matchesSearch && matchesType;
    });

    setFiltered(filteredList);
  }, [search, filterType, poems]);

  return (
    <main className="main-container">
      <h1 className="heading">{personal ? 'My Poem History' : 'Inspirational Poems'}</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          className="w-full md:w-1/2 p-2 border rounded"
          placeholder="Search poems..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="w-full md:w-1/4 p-2 border rounded"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="haiku">Haiku</option>
          <option value="limerick">Limerick</option>
          <option value="free">Free Verse</option>
          <option value="sonnet">Sonnet</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p>No poems found.</p>
      ) : (
        <div className="grid gap-4">
          {filtered.map((poem) => (
            <Link key={poem.id} href={`/poem/${poem.id}`} className="block">
              <div className="section-box hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                <h2 className="text-xl font-semibold">{poem.title}</h2>
                <p className="text-sm text-gray-500">{poem.type}</p>
                <p className="line-clamp-2 mt-2 text-gray-700 dark:text-gray-200">{poem.content}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
