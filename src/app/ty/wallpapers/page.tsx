// "use client";

// import Link from "next/link";
// import { Gall } from "../styles";
// import { useImages } from './../../hooks/useImages';
// import { ImageDiv } from './../../components/ImageDiv/index';

// export default function Gallery() {
//   const { images, loading, error } = useImages("walpaper");

//   if (loading) return <p>Carregando...</p>;
//   if (error) return <p>{error}</p>;

//   const first = images.filter((_, index) => index % 3 === 0);
//   const second = images.filter((_, index) => index % 3 === 1);
//   const third = images.filter((_, index) => index % 3 === 2);

//   return (
//     <Gall>
//       <div className="windowGallery">
//         <div className="cln">
//           {first.map((image) => (
//             <div className="image" key={image.id}>
//               <Link href={image.urls.full} target="_blank">
//                 <ImageDiv imageUrl={image.urls.small} />
//               </Link>
//             </div>
//           ))}
//         </div>
//         <div className="cln">
//           {second.map((image) => (
//             <div className="image" key={image.id}>
//               <Link href={image.urls.full} target="_blank">
//                 <ImageDiv imageUrl={image.urls.small} />
//               </Link>
//             </div>
//           ))}
//         </div>
//         <div className="cln">
//           {third.map((image) => (
//             <div className="image" key={image.id}>
//               <Link href={image.urls.full} target="_blank">
//                 <ImageDiv imageUrl={image.urls.small} />
//               </Link>
//             </div>
//           ))}
//         </div>
        
//       </div>
//     </Gall>
//   );
// }

"use client";

import Link from "next/link";
import { Gall } from "../styles";
import { useImages } from "@/app/hooks/useImages";
import { ImageDiv } from "@/app/components/ImageDiv";
import { useMemo } from "react";

interface GalleryProps {
  category?: string;
}

export default function Gallery({ category = "wallpaper" }: GalleryProps) {
  const { images, loading, error } = useImages(category); 

  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const columns = useMemo(() => {
    return [[], [], []].map((_, colIndex) =>
      images.filter((_, index) => index % 3 === colIndex)
    );
  }, [images]);

  return (
    <Gall>
      <div className="windowGallery">
        {columns.map((colImages, colIndex) => (
          <GalleryColumn key={colIndex} images={colImages} />
        ))}
      </div>
    </Gall>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function GalleryColumn({ images }: { images: any[] }) {
  return (
    <div className="cln">
      {images.map((image) => (
        <div className="image" key={image.id}>
          <Link href={image.urls.full} target="_blank">
            <ImageDiv imageUrl={image.urls.small} />
          </Link>
        </div>
      ))}
    </div>
  );
}