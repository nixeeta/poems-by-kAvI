// lib/poems.ts
import { db } from "@/lib/firebase"; // your Firestore instance
import { collection, query, where, getDocs } from "firebase/firestore";

export async function getUserPoems(uid: string) {
  const poemsRef = collection(db, "poems");
  const q = query(poemsRef, where("userId", "==", uid));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as any[]; // Replace 'any' with your Poem type if you have one
}
// ...other code in poems.ts

export async function savePoem(
  userId: string,
  title: string,
  content: string,
  isPublished: boolean
): Promise<void> {
  // Implement the logic to save the poem here
  // For example, call an API or interact with a database
}