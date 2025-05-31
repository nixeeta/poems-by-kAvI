// lib/auth.ts
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export async function currentUser(): Promise<null | { uid: string; email: string | null }> {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe(); // stop listening after first call
      if (user) {
        resolve({ uid: user.uid, email: user.email });
      } else {
        resolve(null);
      }
    });
  });
}
