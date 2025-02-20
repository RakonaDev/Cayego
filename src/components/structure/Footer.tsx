// Images
import LogosPeru from '../../assets/lp.svg'
import LogoSecundario from '../../assets/footer/logo-secundario.png'

// Components
import { Image } from "@unpic/react";
import Container from "../utils/Container";
import { SiGooglemaps, SiInstagram } from 'react-icons/si';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FaTiktok, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  return (
    <div className="w-full">
      <footer className='w-full h-auto bg-red-700 py-10'>
        <Container>
          <footer className='w-full h-auto flex max-lg:flex-col gap-10 justify-evenly'>
            <section className='w-full lg:w-1/2 font-Montserrat text-white space-y-5'>
              <Image
                src={LogoSecundario}
                width={400}
                height={300}
                layout='constrained'
              />
              <div>
                <a href="https://maps.app.goo.gl/C86y55DGFHDPyhV76" target="_blank" rel="noopener noreferrer" className="font-medium px-4 py-2 text-white text-xl flex gap-2 items-center"><span><SiGooglemaps size={30} /></span> <span>Prolongación Huáscar 195 San Miguel, Lima, Perú</span></a>
              </div>
            </section>
            <section className='w-full lg:w-1/2 font-Montserrat text-white space-y-4 text-lg font-medium'>
              <h5 className='font-bold text-white text-2xl' >Contacto: </h5>
              <p>Email: cayego33gmail.com</p>
              <p>Telefono: (+51) 986 296 366</p>
              <p>Telefono: (+51) 904 866 430</p>
              <div className='pt-4 space-y-5'>
                <h6 className='text-2xl font-bold'>Síguenos en: </h6>
                <nav className='flex gap-5'>
                  <a title='instagram' href="https://www.instagram.com/cayego.pe/" target="_blank" rel="noopener noreferrer" className="font-medium px-4 py-4 bg-white rounded-lg text-redPrimary text-xl flex gap-2 items-center"><span><SiInstagram size={30} /></span></a>
                  <a title='facebook' href="https://www.facebook.com/profile.php?id=61567892079132" target="_blank" rel="noopener noreferrer" className="font-medium px-4 py-4 bg-white rounded-lg text-redPrimary text-xl flex gap-2 items-center"><span><FaFacebook size={30} /></span> </a>
                  <a title='whatsapp' href="https://wa.link/0k68kd" target="_blank" rel="noopener noreferrer" className="font-medium px-4 py-4 bg-white rounded-lg text-redPrimary text-xl flex gap-2 items-center"><span><FaWhatsapp size={30} /></span></a>
                  <a title='tiktok' href="https://www.tiktok.com/@caye.go?_t=ZM-8u3lTccQWf8&_r=1" target="_blank" rel="noopener noreferrer" className="font-medium px-4 py-4 bg-white rounded-lg text-redPrimary text-xl flex gap-2 items-center"><span><FaTiktok size={30} /></span></a>
                  <a title='twitter' href="https://x.com/caye_go" target="_blank" rel="noopener noreferrer" className="font-medium px-4 py-4 bg-white rounded-lg text-redPrimary text-xl flex gap-2 items-center"><span><FaTwitter size={30} /></span></a>
                  <a title='youtube' href="https://www.youtube.com/@CayeGo33" target="_blank" rel="noopener noreferrer" className="font-medium px-4 py-4 bg-white rounded-lg text-redPrimary text-xl flex gap-2 items-center"><span><FaYoutube size={30} /></span></a>
                </nav>
              </div>
            </section>
          </footer>
        </Container>
      </footer>
      <footer className='w-full h-auto bg-red-950 py-5'>
        <Container>
          <div className="space-y-5 flex flex-col items-center">
            <p className="text-center font-medium text-white">© 2025 CayeGo. Todos los derechos reservados.</p>
            <p className="text-center font-medium text-white flex gap-2">Diseñado por <span><a title='si' href="https://logosperu.com.pe/"><Image src={LogosPeru} width={30} height={30} /></a></span></p>
          </div>
        </Container>
      </footer>
    </div>
  )
}