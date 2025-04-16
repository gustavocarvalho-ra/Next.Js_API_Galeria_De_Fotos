"use client";

import { useMemo } from 'react';
import { useImageSearch } from './../../hooks/useImages';
import { SearchSty } from "./styles";
import { ImageDiv } from '../ImageDiv';
import Link from 'next/link';

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
            <Link key={img.id} href={img.urls.full} target='_blank'>
              <ImageDiv
                key={img.id}
                imageUrl={img.urls.small}
              />
            </Link>
          ))}
        </div>
      ))}
    </SearchSty>
  );
}