import Link from "next/link";
import { NavBar } from "./styles";

export default function Nav() {
  return (
    <NavBar>
      <Link href={"../../ty/foto"}>Foto</Link>
      <Link href={"../../ty/wallpapers"}>Wallpaper</Link>
      <Link href={"../../ty/textura"}>Textura</Link>
      <Link href={"../../ty/universo"}>Universo</Link>
      <Link href={"../../ty/natureza"}>Natureza</Link>
      <Link href={"../../ty/carro"}>Carro</Link>
      <Link href={"../../ty/moto"}>Moto</Link>
      <Link href={"../../ty/animais"}>Animais</Link>
      <Link href={"../../ty/rua"}>Rua</Link>
      <Link href={"../../ty/viagem"}>Viagem</Link>
      <Link href={"../../ty/flor"}>Flor</Link>
      <Link href={"../../ty/viagem"}>Viagem</Link>
      

    </NavBar>
  )
}