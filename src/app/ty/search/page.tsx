"use client";
import { Suspense } from "react";

import Header from "@/app/components/Header";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Search from "@/app/components/SearchContent";

export default function SearchPage() {
  return (
    <>
      <Header />
      <Nav />
      <Suspense fallback={<div>Carregando busca...</div>}>
        <Search />
      </Suspense>
      <Footer />
    </>
  );
}