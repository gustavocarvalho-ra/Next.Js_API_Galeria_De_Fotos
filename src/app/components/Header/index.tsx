import Link from "next/link";
import { Head } from "./styles";

export default function Header() {
  return (
    <Head>
      <Link href={"/"}>Galeria Online</Link>
      <hr className="hr"/>
    </Head>
  )
}