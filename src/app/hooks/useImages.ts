import { useState, useEffect } from "react";
import { imageprops } from "../types/imag";

export function useImages(query: string = "random") {
  const [images, setImages] = useState<imageprops[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(`/api/unsplash?query=${query}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar imagens");
        }
        const data = await response.json();
        setImages(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [query]);

  return { images, loading, error };
}