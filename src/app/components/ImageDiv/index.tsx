import { ImageDivProps } from "@/app/types/imag";
import { useEffect, useState } from "react";

export const ImageDiv: React.FC<ImageDivProps> = ({ imageUrl }) => {
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