import Link from "next/link";
import { Head } from "./styles";

export default function Header() {
  return (
    <Head>
      <div className="cont">
        <Link href={"/"}>Galeria Online</Link>
        {/* <div className="space"></div> */}
        
      </div>
      <hr className="hr"/>
    </Head>
  )
}