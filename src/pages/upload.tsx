// src/pages/upload.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function UploadPoem() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const user = auth.currentUser;
    if (!user) {
      router.push('/login');
      return;
    }

    try {
      await addDoc(collection(db, 'poems'), {
        userId: user.uid,
        title,
        content,
        tags: tags.split(',').map(tag => tag.trim()),
        createdAt: serverTimestamp(),
        type: 'original',
      });
      setSuccess(true);
      setTitle('');
      setContent('');
      setTags('');
    } catch (error) {
      console.error('Error uploading poem:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="main-container">
      <h1 className="heading mb-6">Upload Your Original Poem</h1>

      <form onSubmit={handleUpload} className="space-y-4 section-box">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Write your poem here..."
          className="w-full p-2 border rounded h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Tags (comma-separated)"
          className="w-full p-2 border rounded"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <button type="submit" className="button-primary w-full" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload Poem'}
        </button>

        {success && <p className="text-green-600 mt-2">Poem uploaded successfully!</p>}
      </form>
    </main>
  );
}
