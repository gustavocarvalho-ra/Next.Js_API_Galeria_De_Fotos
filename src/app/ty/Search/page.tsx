import { imageprops } from "@/app/types/imag";
import { Suspense } from "react";

export default function SearchPage({ searchParams }: { searchParams: { query?: string } }) {
  const query = searchParams.query || "nature";

  return (
    <div>
      <h2>Resultados para {query}</h2>
      <Suspense fallback={<p>Carregando imagens...</p>}>
        <ImageResults query={query} />
      </Suspense>
    </div>
  );
}

async function ImageResults({ query }: { query: string }) {
  const res = await fetch(`/api/photos?query=${query}`);
  const images = await res.json();

  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {images.map((img: imageprops) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={img.id} src={img.urls.small} alt={img.alt_description || "Image"} className="rounded" />
      ))}
    </div>
  );
}