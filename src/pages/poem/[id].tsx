import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';

type Poem = {
  title: string;
  content: string;
  author?: string;
  type: string;
};

export default function PoemDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [poem, setPoem] = useState<Poem | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchPoem = async () => {
      const ref = doc(db, 'poems', id as string);
      const snapshot = await getDoc(ref);
      if (snapshot.exists()) {
        setPoem(snapshot.data() as Poem);
      }
    };

    fetchPoem();
  }, [id]);

  if (!poem) return <p className="main-container">Loading poem...</p>;

  return (
    <main className="main-container">
      <h1 className="heading">{poem.title}</h1>
      {poem.author && <p className="text-center text-gray-500 mb-2">by {poem.author}</p>}
      <p className="mb-4 text-center italic text-sm capitalize">{poem.type} poem</p>
      <div className="section-box whitespace-pre-line text-lg leading-relaxed">{poem.content}</div>
    </main>
  );
}
