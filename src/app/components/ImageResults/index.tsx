"use client";

import { useMemo } from 'react';
import { useImageSearch } from './../../hooks/useImages';
import { SearchSty } from "./styles";
import Image from "next/image";

interface Props {
  query: string;
}

const NUM_COLUMNS = 3;

export default function ImageResults({ query }: Props) {
  const { images, loading, error } = useImageSearch(query);

  const columns = useMemo(() => {
    const cols: typeof images[] = Array.from({ length: NUM_COLUMNS }, () => []);
    images.forEach((image, index) => {
      cols[index % NUM_COLUMNS].push(image);
    });
    return cols;
  }, [images]);

  if (loading) return <p>Carregando imagens...</p>;
  if (error) return <p>Erro ao carregar imagens.</p>;

  return (
    <SearchSty className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-4">
          {column.map((img) => (
            <Image
              key={img.id}
              src={img.urls.small}
              alt={img.alt_description || "Imagem"}
              width={300}
              height={200}
              className="rounded object-cover w-full"
            />
          ))}
        </div>
      ))}
    </SearchSty>
  );
}