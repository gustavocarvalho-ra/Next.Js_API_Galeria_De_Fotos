"use client";

import Link from "next/link";
import { Gall } from "./styles";
import { ImageDiv } from "../../components/ImageDiv";
import { useMemo } from "react";
import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";
import { useImageSearch } from './../../hooks/useImages';

const NUM_COLUMNS = 3;

interface GalleryProps {
  imageType: string;
}

export function Gallery({ imageType }: GalleryProps) {
  const { images = [], loading, error } = useImageSearch(imageType);

  const columns = useMemo(() => {
    const cols: typeof images[] = Array.from({ length: NUM_COLUMNS }, () => []);
    images.forEach((image, index) => {
      cols[index % NUM_COLUMNS].push(image);
    });
    return cols;
  }, [images]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <Nav />
      
      <Gall>
        <div className="windowGallery">
          {columns.map((col, colIndex) => (
            <div className="cln" key={colIndex}>
              {col.map((image) => (
                <div className="image" key={image.id}>
                  <Link href={image.urls.full} target="_blank">
                    <ImageDiv imageUrl={image.urls.small} />
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Gall>
      <Footer />
    </>
  );
}