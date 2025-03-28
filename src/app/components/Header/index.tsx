import Link from "next/link";
import { Head } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <Head>
      <div className="cont">
        <Link href={"/"}>Galeria Online</Link>
        <div className="search">
          <form action="">
            <button className="lup">
              <AiOutlineSearch />
            </button>
            <input type="string" />
          </form>
        </div>
        
      </div>
      <hr className="hr"/>
    </Head>
  )
}