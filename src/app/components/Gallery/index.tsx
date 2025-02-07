"use client"
import { useState, useEffect} from "react";

import { Gall } from "./styles";
import Image from "next/image";

interface imageprops{
  id: string;
  alt_description: string;
  urls: {small: string};
}

export default function Gallery() {
  const [images, setImages] = useState<imageprops[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch("/api/unsplash?query=technology");
      const data = await response.json();
      setImages(data);
      setLoading(false);

      console.log(data)
    }


    fetchImages();
  }, []);

  if (loading) return <p>Carregando..</p>;

  return (
    <Gall>
      {images.map((image) => (
        <Image
          width={700}
          height={500}
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
        />
      ))}

    </Gall>
  )
}