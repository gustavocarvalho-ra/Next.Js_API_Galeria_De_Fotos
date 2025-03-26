import Link from "next/link";
import { Head } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <Head>
      <div className="cont">
        <Link href={"/"}>Galeria Online</Link>
        <div className="search">
          <input type="text" />
          <AiOutlineSearch className="lup" />
        </div>
        
      </div>
      <hr className="hr"/>
    </Head>
  )
}