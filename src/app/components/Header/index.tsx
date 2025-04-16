"use client"

import Link from "next/link";
import { Head } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    router.push(`/ty/search?query=${searchTerm}`);
  };

  return (
    <Head>
      <div className="cont">
        <Link href="/">Galeria Online</Link>
        <div className="search">
          <form onSubmit={handleSearch}>
            <button type="submit" className="lup">
              <AiOutlineSearch />
            </button>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pesquisa de imagens"
            />
          </form>
        </div>
      </div>
      <hr className="hr"/>
    </Head>
  );
}