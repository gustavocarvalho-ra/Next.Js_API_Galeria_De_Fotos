// "use client"

import ImageResults from "@/app/components/ImageResults";

export default async function SearchPage({ searchParams }: { searchParams: { query?: string } }) {
  const query = searchParams.query || "nature";

  return (
    <div>
      <h2>Resultados para &quot;{query}&quot;</h2>
      <ImageResults query={query} />
    </div>
  );
}