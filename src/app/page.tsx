"use client"

import CartImage from "./components/CartImages";
import { Gallery } from "./components/Gallery";

export default function Home() {
  return (
    <>
      <Gallery imageType="random"/>
      <CartImage />
    </>
  );
}
