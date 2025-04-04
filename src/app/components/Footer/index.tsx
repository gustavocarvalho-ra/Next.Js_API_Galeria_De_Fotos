import { Foot } from "./styles";

import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <Foot>
      <h3>Gustavo Carvalho Raimundo</h3>
      <div className="icons">
        <Link href="https://github.com/gustavocarvalho-ra" target="_blank">
          <FaGithub />
        </Link>

        <Link href="https://www.linkedin.com/in/gustavo-carvalho-7bb361205/" target="_blank">
          <FaLinkedin />
        </Link>
      </div>
      <h2>Obrigado pela visita!</h2>
    </Foot>
  )
}