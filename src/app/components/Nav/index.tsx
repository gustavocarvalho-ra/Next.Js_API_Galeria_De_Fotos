import Link from "next/link";
import { NavBar } from "./styles";

export default function Nav() {
  return (
    <NavBar>
      <Link href={"/"}>test nav</Link>

    </NavBar>
  )
}