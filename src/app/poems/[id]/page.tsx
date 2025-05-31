interface PoemPageProps {
  params: { id: string };
}

export default function PoemPage({ params }: PoemPageProps) {
  const { id } = params;
  return <div className="text-xl">Poem #{id} (Details coming soon)</div>;
}