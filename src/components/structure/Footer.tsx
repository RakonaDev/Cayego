// Images
import LogosPeru from '../../assets/lp.svg'
import LogoSecundario from '../../assets/footer/logo-secundario.png'

// Components
import { Image } from "@unpic/react";
import Container from "../utils/Container";
import { SiInstagram } from 'react-icons/si';
import { MdOutlineEmail, MdOutlineHomeWork, MdOutlinePhoneAndroid, MdOutlineSupportAgent } from "react-icons/md";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { FaBook, FaBookBookmark, FaMap, FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  return (
    <div className="w-full">
      <footer className='w-full h-auto bg-red-700 py-10'>
        <Container>
          <footer className='w-full h-auto flex max-lg:flex-col gap-10 justify-evenly'>
            <section className='w-full lg:w-1/3 font-Montserrat text-white space-y-5'>
              <div className='relative'>
                {/*<p className='italic text-white bg-red-700 text-[12px] absolute left-36 top-[7.3rem] px-5'>En todas partes y en cualquier lugar</p>*/}
                <Image
                  src={LogoSecundario}
                  width={310}
                  height={300}
                  layout='constrained'
                  className='max-lg:w-1/2'
                />
              </div>

              <div className='font-Montserrat lg:px-4 space-y-4'>
                <a href="https://maps.app.goo.gl/C86y55DGFHDPyhV76" target="_blank" rel="noopener noreferrer" className="text-white text-sm lg:text-base flex gap-2"><span><FaMap size={20} /></span> <span>Prolongación Huascar 195 Dpto. 5 , San Miguel, Lima, Perú</span></a>
                <p className='flex gap-2 items-center'><span><MdOutlineHomeWork size={20} /></span> <span><span className='font-bold'>Número de RUC:</span> 20613752146</span></p>
                <p className='flex gap-2'><span><MdOutlineHomeWork size={20} /></span> <span className='my-auto'><span className='font-bold'>Nombre de la Empresa:</span> SAN CAYETANO REMISSE CJ S.A.C. </span></p>
              </div>
            </section>
            <section className='w-full lg:w-1/3 font-Montserrat text-white space-y-5'>
              <h5 className='font-bold text-white text-base lg:text-lg' >Información</h5>
              <ul className='space-y-5'>
                <li ><a href="mailto:cayego33@gmail.com" className='flex gap-2 items-center'><span><FaBook size={22} /></span> <span>Libro de Sugerencias</span></a></li>
                <li ><a href="mailto:cayego33@gmail.com" className='flex gap-2 items-center'><span><FaBookBookmark size={22} /></span> <span>Libro de Reclamaciones</span></a></li>
              </ul>
            </section>
            <section className='w-full lg:w-1/3 font-Montserrat text-white space-y-4 text-md lg:text-base'>
              <h5 className='font-bold text-white text-base lg:text-lg' >Contáctanos: </h5>
              <p className='flex gap-2 items-center text-md lg:text-base'><span><MdOutlineEmail size={30} /></span> <span><span className='font-bold'>Email:</span> cayego33@gmail.com</span></p>
              <p className='flex gap-2 items-center text-md lg:text-base'><span><MdOutlinePhoneAndroid size={30} /></span> <span><span className='font-bold'>Celular Principal:</span> (+51) 986 296 366</span></p>
              <p className='flex gap-2 items-center text-md lg:text-base'><span><MdOutlineSupportAgent size={30} /></span> <span className='font-bold'>Hora Atención: <span className='font-normal'>24 Horas</span></span></p>
              <div className='pt-4 space-y-5'>
                <h6 className='text-base lg:text-lg font-bold'>Síguenos en: </h6>
                <nav className='flex gap-5 flex-wrap max-lg:justify-evenly'>
                  <a title='instagram' href="https://www.instagram.com/cayego.pe/" target="_blank" rel="noopener noreferrer" className="font-medium w-10 h-10 justify-center bg-white rounded-lg text-redPrimary flex gap-2 items-center"><span><SiInstagram size={20} /></span></a>
                  <a title='facebook' href="https://www.facebook.com/profile.php?id=61567892079132" target="_blank" rel="noopener noreferrer" className="font-medium w-10 h-10 justify-center bg-white rounded-lg text-redPrimary text-xl flex gap-2 items-center"><span><FaFacebook size={20} /></span> </a>
                  <a title='whatsapp' href="https://wa.link/0k68kd" target="_blank" rel="noopener noreferrer" className="font-medium w-10 h-10 bg-white rounded-lg text-redPrimary flex gap-2 items-center justify-center"><span><FaWhatsapp size={20} /></span></a>
                  <a title='tiktok' href="https://www.tiktok.com/@caye.go?_t=ZM-8u3lTccQWf8&_r=1" target="_blank" rel="noopener noreferrer" className="font-medium w-10 h-10 justify-center bg-white rounded-lg text-redPrimary text-xl flex gap-2 items-center"><span><FaTiktok size={20} /></span></a>
                  <a title='twitter' href="https://x.com/caye_go" target="_blank" rel="noopener noreferrer" className="font-medium w-10 h-10 justify-center bg-white rounded-lg text-redPrimary flex gap-2 items-center"><span><FaXTwitter size={20} /></span></a>
                  <a title='youtube' href="https://www.youtube.com/@CayeGo33" target="_blank" rel="noopener noreferrer" className="font-medium w-10 h-10 justify-center bg-white rounded-lg text-redPrimary flex gap-2 items-center"><span><FaYoutube size={20} /></span></a>
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