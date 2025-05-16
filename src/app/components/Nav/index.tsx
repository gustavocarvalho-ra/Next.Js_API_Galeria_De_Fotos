import Link from "next/link";
import { NavBar } from "./styles";
import { usePathname } from "next/navigation";
import clsx from "clsx"

export default function Nav() {
  const path = usePathname();

  return (
    <NavBar>
      <Link href={"/ty/foto"} className={clsx({ active: path === "/ty/foto" })}>Foto</Link>
      <Link href={"/ty/wallpapers"} className={clsx({ active: path === "/ty/wallpapers" })}>Wallpaper</Link>
      <Link href={"/ty/textura"} className={clsx({ active: path === "/ty/textura" })}>Textura</Link>
      <Link href={"/ty/universo"} className={clsx({ active: path === "/ty/universo" })}>Universo</Link>
      <Link href={"/ty/natureza"} className={clsx({ active: path === "/ty/natureza" })}>Natureza</Link>
      <Link href={"/ty/carro"} className={clsx({ active: path === "/ty/carro" })}>Carro</Link>
      <Link href={"/ty/moto"} className={clsx({ active: path === "/ty/moto" })}>Moto</Link>
      <Link href={"/ty/animais"} className={clsx({ active: path === "/ty/animais" })}>Animais</Link>
      <Link href={"/ty/rua"} className={clsx({ active: path === "/ty/rua" })}>Rua</Link>
      <Link href={"/ty/viagem"} className={clsx({ active: path === "/ty/viajem" })}>Viagem</Link>
      <Link href={"/ty/flor"} className={clsx({ active: path === "/ty/flor" })}>Flor</Link>
      <Link href={"/ty/moda"} className={clsx({ active: path === "/ty/moda" })}>Moda</Link>
    </NavBar>
  )
}