import { useEffect, useState } from "react";
import { imageprops } from "@/app/types/imag";

export function useImageSearch(query: string) {
  const [images, setImages] = useState<imageprops[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(`/api/photos?query=${query}`);
        if (!res.ok) {
          throw new Error(`Erro HTTP: ${res.status}`);
        }
        const data = await res.json();
        setImages(Array.isArray(data) ? data : []);
        // setImages(data);
      } catch (err) {
        console.error("Erro ao buscar imagens:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchImages();
    }
  }, [query]);

  return { images, loading, error };
}