"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { imageprops, ImageDivProps } from "./../../types/imag";

import { Gall } from "./styles";

const ImageDiv: React.FC<ImageDivProps> = ({ imageUrl }) => {
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setDimensions({ width: img.width, height: img.height });
  }, [imageUrl]);

  if (!dimensions) {
    return <div>Carregando...</div>;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        width: dimensions.width,
        height: dimensions.height,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default function Gallery() {
  const [images, setImages] = useState<imageprops[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch("/api/unsplash?query=random");
      const data = await response.json();
      setImages(data);
      setLoading(false);
      console.log(data);
    }
    fetchImages();
  }, []);

  if (loading) return <p>Carregando..</p>;

  return (
    <Gall>
      <div className="windowGallery">
        {images.map((image) => (
          <div className="image" key={image.id}>
            <div className="grid">
              <Link href={image.urls.full} target="_blank">
                <ImageDiv imageUrl={image.urls.small} />
              </Link>
            </div>
            <div className="grid">
              <Link href={image.urls.full} target="_blank">
                <ImageDiv imageUrl={image.urls.small} />
              </Link>
            </div>
            <div className="grid">
              <Link href={image.urls.full} target="_blank">
                <ImageDiv imageUrl={image.urls.small} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Gall>
  );
}