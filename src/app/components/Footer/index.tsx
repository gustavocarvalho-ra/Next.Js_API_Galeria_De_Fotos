import { Foot } from "./styles";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <Foot>
      <h1>test cart</h1>
      <div className="icons">
        <FaGithub />
        <FaLinkedin />
      </div>
    </Foot>
  )
}