"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, query, getDocs, doc } from "firebase/firestore";
import PoemDisplay from "@/components/PoemDisplay";

interface Poem {
  id: string;
  title: string;
  author: string;
  content: string;
  // add other fields as per your Firestore doc
}

export default function PoemsPage() {
  const [poems, setPoems] = useState<Poem[]>([]);

useEffect(() => {
  async function fetchPoems() {
    const q = query(collection(db, "poems"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => {
      const d = doc.data();
      return {
        id: doc.id,
        authorId: d.authorId, // ✅ Add this explicitly if missing
        title: d.title,
        content: d.content,
        // any other fields...
      };
    });
    }
    fetchPoems();
  }, []);

  return (
    <div>
      {poems.length === 0 ? (
        <p>Loading poems...</p>
      ) : (
        poems.map((poem) => <PoemDisplay key={poem.id} poem={poem} />)
      )}
    </div>
  );
}
