"use client";

import { useSearchParams } from "next/navigation";
import ImageResults from "@/app/components/ImageResults";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "nature";

  return (
    <div>
      <h2>Resultados para: &quot;{query}&quot;</h2>
      <ImageResults query={query} />
    </div>
  );
}