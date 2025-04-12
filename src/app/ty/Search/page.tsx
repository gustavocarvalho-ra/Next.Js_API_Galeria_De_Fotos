"use client";

import { useSearchParams } from "next/navigation";
import ImageResults from "@/app/components/ImageResults";
import Header from "@/app/components/Header";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import { Wind } from "./styles";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "nature";

  return (
    <>
      <Header />
      <Nav />
      <Wind>
        <h2>Resultados para: &quot;{query}&quot;</h2>
        <ImageResults query={query} />
      </Wind>
      <Footer />
    </>
  );
}