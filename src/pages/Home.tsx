// Imagenes
import Banner from '../assets/inicio/banner.webp'
import Banner1 from '../assets/inicio/banner1.webp'
import Banner2 from '../assets/inicio/banner2.webp'
import Background from '../assets/inicio/background1.webp'
import Car from '../assets/inicio/car.svg'
import Border from '../assets/border.svg'

// Componentes
import { SwiperPropsInterface } from "../interfaces/SwiperDinamicInterface";
import SwiperDinamic from "../components/features/SwiperDinamic";
import Container from '../components/utils/Container';
import { Image } from '@unpic/react';

// Iconos
import { RiPoliceCarFill } from 'react-icons/ri';
import { MdOutlineTimer } from 'react-icons/md';
import { FaCarAlt } from 'react-icons/fa';
import { motion } from 'motion/react';
import { dataServices } from '../helper/dataServices'
import ServiceCard from '../components/utils/ServiceCard'
import ContactLayout from '../layouts/ContactLayout'
import { useEffect } from 'react'

// Metadata
const BannerInicio: SwiperPropsInterface[] = [
  {
    text: 'Tu camino, nuestra prioridad',
    image_url: Banner
  },
  {
    text: 'Traslados seguros, eficientes y a tu medida',
    image_url: Banner1
  },
  {
    text: 'La mejor experiencia de transporte, sin complicaciones',
    image_url: Banner2
  }
]

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])
  return (
    <>
      <div className="w-full min-h-screen">
        <header className="w-full h-dvh overflow">
          <SwiperDinamic
            data={BannerInicio}
          />
        </header>
        <main className='w-full h-auto'>
          <section className='w-full'>
            <article className='w-full relative overflow-hidden py-20'>
              <Image
                src={Background}
                width={1440}
                height={1320}
                layout='constrained'
                className='w-full h-full object-cover absolute top-0'
                loading='lazy'
              />
              <Container>
                <div className='flex gap-5 justify-evenly z-30 relative flex-wrap'>
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='font-clean_deco px-10 text-white py-5 min-w-[250px] max-w-[350px] w-full flex flex-col gap-5 items-center justify-center'
                  >
                    <RiPoliceCarFill size={80} color='#F22727' />
                    <h2 className='font-clean_deco text-2xl font-bold'>SEGURIDAD</h2>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='font-clean_deco px-10 text-white py-5 min-w-[250px] max-w-[350px] w-full flex flex-col gap-5 items-center justify-center'
                  >
                    <MdOutlineTimer size={80} color='#F22727' />
                    <h2 className='font-clean_deco text-2xl font-bold'>PUNTUALIDAD</h2>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className=' px-10 text-white py-5 min-w-[250px] max-w-[350px] w-full flex flex-col gap-5 items-center justify-center'
                  >
                    <FaCarAlt size={80} color='#F22727' />
                    <h2 className='font-clean_deco text-2xl font-bold'>SERVICIO</h2>
                  </motion.div>
                </div>
              </Container>
            </article>
          </section>
          <section className='w-full h-auto bg-gradient-to-t from-dark to-background py-10 shadow-xl shadow-black'>
            <Container>
              <div className='block lg:flex gap-10 items-center font-raleway'>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className='text-white w-full lg:w-1/2 space-y-10 text-lg font-medium'
                >
                  <h3 className='text-redPrimary font-bold text-4xl text-center font-clean_deco'>¿Quienes Somos?</h3>
                  <p><strong>CayeGo</strong> es una empresa especializada en servicios de traslado, diseñada para ofrecer soluciones de movilidad seguras, eficientes y accesibles. Nos enfocamos en brindar una experiencia de transporte confiable, cómoda y a medida, tanto para particulares como para empresas. Con un equipo de profesionales altamente capacitados y una flota moderna, nos aseguramos de que cada trayecto sea puntual, seguro y placentero. Ya sea para viajes locales o de larga distancia, en <strong>CayeGo</strong> trabajamos para hacer que tu traslado sea una experiencia sin complicaciones, adaptándonos siempre a tus necesidades y tiempos.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className='text-white w-full lg:w-1/2'
                >
                  <Image
                    src={Car}
                    width={600}
                    height={600}
                    loading='lazy'
                  />
                </motion.div>
              </div>
            </Container>
          </section>
          <section className='w-full h-auto bg-white text-black pb-16'>
            <Container>
              <motion.h3
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className='text-4xl text-center py-16 font-clean_deco font-bold'
              >
                Nuestros Servicios
              </motion.h3>
              <div className='space-y-10'>
                {
                  dataServices.map((service) => {
                    return (
                      <ServiceCard service={service} key={service.id} />
                    )
                  })
                }
              </div>
            </Container>
          </section>
          <section className='w-full h-auto bg-white'>
            <Image
              src={Border}
              width={1440}
              height={980}
              layout='constrained'
              className='w-full h-auto object-cover'
            />
          </section>
          <section className='w-full h-auto bg-[#202020]'>
            <ContactLayout />
          </section>
        </main>
      </div>
    </>
  )
}