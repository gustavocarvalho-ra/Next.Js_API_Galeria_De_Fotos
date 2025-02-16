"use client"

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import CartImage from "./components/CartImages";
import Nav from "./components/Nav";
export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Gallery />
      <CartImage />
    </>
  );
}
