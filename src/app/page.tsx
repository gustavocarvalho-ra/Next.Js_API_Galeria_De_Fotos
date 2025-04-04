"use client"

import CartImage from "./components/Footer";
import { Gallery } from "./components/Gallery";

export default function Home() {
  return (
    <>
      <Gallery imageType="random"/>
      <CartImage />
    </>
  );
}
