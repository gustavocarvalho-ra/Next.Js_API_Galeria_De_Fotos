"use client"
import { useState, useEffect} from "react";
// import Image from "next/image";
import { imageprops } from './../../types/imag';

import { Gall } from "./styles";
import Link from "next/link";

export default function Gallery() {
  const [images, setImages] = useState<imageprops[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch("/api/unsplash?query=random");
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
      <div className="windowGallery">
        {images.map((image) => (
          <div className="image" key={image.id}>
            <Link href={image.urls.full} key={image.id} target="_blanck">
              <div className="img" key={image.id} style= {{ backgroundImage: `url(${image.urls.small})` }}>
                
              </div>
              {/* <Image
                width={400}
                height={267}
                key={image.id}
                src={image.urls.small}
                alt={image.alt_description}
              /> */}
            </Link>
          </div>
        ))}
      </div>

    </Gall>
  )
}