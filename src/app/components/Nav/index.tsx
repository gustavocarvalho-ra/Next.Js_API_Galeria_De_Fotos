import Link from "next/link";
import { NavBar } from "./styles";

export default function Nav() {
  return (
    <NavBar>
      <Link href={"../../ty/wallpapers"}>wallpaper</Link>
      <Link href={"../../ty/textura"}>textura</Link>
      <Link href={"../../ty/universo"}>universo</Link>
      <Link href={"../../ty/carro"}>carro</Link>
      <Link href={"../../ty/wallpapers"}>wallpaper</Link>
      <Link href={"../../ty/wallpapers"}>wallpaper</Link>
      

    </NavBar>
  )
}