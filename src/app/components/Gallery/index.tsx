"use client";

import Link from "next/link";
import { Gall } from "./styles";
import { useImages } from './../../hooks/useImages';
import { ImageDiv } from './../ImageDiv/index';

export default function Gallery() {
  const { images, loading, error } = useImages("random");

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Gall>
      <div className="windowGallery">
        {images.map((image) => (
          <div className="image" key={image.id}>
            <Link href={image.urls.full} target="_blank">
              <ImageDiv imageUrl={image.urls.small} />
            </Link>
          </div>
        ))}
      </div>
    </Gall>
  );
}