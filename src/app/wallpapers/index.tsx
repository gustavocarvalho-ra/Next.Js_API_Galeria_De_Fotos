"use client";

export default function wall() {
  return (
    <h1>test</h1>
  )
}

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