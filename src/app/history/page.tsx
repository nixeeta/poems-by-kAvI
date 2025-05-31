// app/history/page.tsx
import { getUserPoems } from "@/lib/poems"; // hypothetical helper
import { currentUser } from "@/lib/auth";   // get current user (Firebase or custom)
import PoemDisplay from "@/components/PoemDisplay"; // reusing poem card

export default async function HistoryPage() {
  const user = await currentUser();
  if (!user) return <p className="text-center mt-10">Please log in to view your history.</p>;

  const poems = await getUserPoems(user.uid); // Fetch saved poems

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Poetry History</h1>
      {poems.length === 0 ? (
        <p>No saved poems yet. Start creating!</p>
      ) : (
        <div className="grid gap-4">
          {poems.map((poem) => (
            <PoemDisplay key={poem.id} poem={poem} />
          ))}
        </div>
      )}
    </div>
  );
}
