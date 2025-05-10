"use client";

import { useSearchParams } from "next/navigation";
import ImageResults from "../ImageResults";

import { Wind } from "./styles";

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "random";

  return (
    <Wind>
      <h2>Resultados para: &quot;<span>{query}</span>&quot;</h2>
      <div className="mainWin">
        <ImageResults query={query} />
      </div>
    </Wind>
  )
}