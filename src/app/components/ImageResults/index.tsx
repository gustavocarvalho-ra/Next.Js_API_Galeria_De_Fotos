"use client";

import { useEffect, useState } from "react";
import { imageprops } from "@/app/types/imag";
import { SearchSty } from "./styles";

interface Props {
  query: string;
}

export default function ImageResults({ query }: Props) {
  const [images, setImages] = useState<imageprops[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(`/api/photos?query=${query}`);
        if (!res.ok) {
          throw new Error(`Erro HTTP: ${res.status}`);
        }
  
        const data = await res.json();
        setImages(data);
        console.log(data)
      } catch (err) {
        console.error("Erro ao buscar imagens:", err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchImages();
  }, [query]);

  if (loading) return <p>Carregando imagens...</p>;

  return (
    <SearchSty>
      {images.map((img) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={img.id}
          src={img.urls.small}
          alt={img.alt_description || "Imagem"}
          className="rounded"
        />
      ))}
    </SearchSty>
  );
}