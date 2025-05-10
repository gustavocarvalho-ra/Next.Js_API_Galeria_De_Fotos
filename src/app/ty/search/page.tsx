"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import Header from "@/app/components/Header";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";


export default function SearchPage() {
  return (
    <>
      <Header />
      <Nav />
      <Suspense fallback={<div>Carregando busca...</div>}>
        <SearchContent />
      </Suspense>
      <Footer />
    </>
  );
}