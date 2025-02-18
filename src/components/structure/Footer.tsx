
// Images
import LogosPeru from '../../assets/lp.svg'

// Components
import { Image } from "@unpic/react";
import Container from "../utils/Container";

export default function Footer() {
  return (
    <div className="w-full bg-red-700 py-10">
      <Container>
        <div className="space-y-5 flex flex-col items-center">
          <p className="text-center font-medium text-white">© 2025 CayeGo. Todos los derechos reservados.</p>
          <p className="text-center font-medium text-white flex gap-2">Diseñado por <span><a href="https://logosperu.com.pe/"><Image src={LogosPeru} width={30} height={30}/></a></span></p>
        </div>
      </Container>
    </div>
  )
}