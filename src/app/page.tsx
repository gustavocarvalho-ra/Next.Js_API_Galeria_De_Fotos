"use client"

import Header from "./components/Header";
import CartImage from "./components/CartImages";
import Nav from "./components/Nav";
import { Gallery } from "./components/Gallery";

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Gallery imageType="random"/>
      <CartImage />
    </>
  );
}
