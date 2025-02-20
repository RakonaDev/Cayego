// Imagenes
import Banner from '../assets/inicio/banner.webp'
import Banner1 from '../assets/inicio/banner1.webp'
import Banner2 from '../assets/inicio/banner2.webp'
import Car from '../assets/inicio/car.svg'

// Componentes
import { SwiperPropsInterface } from "../interfaces/SwiperDinamicInterface";
import SwiperDinamic from "../components/features/SwiperDinamic";
import Container from '../components/utils/Container';
import { Image } from '@unpic/react';

// Iconos
import { motion } from 'motion/react';
import { dataServices } from '../helper/dataServices'
import ServiceCard from '../components/utils/ServiceCard'
import ContactLayout from '../layouts/ContactLayout'
import { useEffect } from 'react'

// Metadata
const BannerInicio: SwiperPropsInterface[] = [
  {
    // text: 'Tu camino, nuestra prioridad',
    text: 'En todas partes y en cualquier lugar',
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
          <section className='w-full h-auto bg-gray-100 shadow-xl shadow-black'>
            <Container>
              <div className='block lg:flex gap-10 items-center font-raleway'>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className='text-white w-full lg:w-1/2 space-y-10 text-lg font-medium'
                >
                  <h3 className='text-redPrimary font-bold text-4xl text-center font-Montserrat'>¿Quienes Somos?</h3>
                  <p className='text-lg text-black'>CayeGo es una empresa especializada en servicios de traslado, diseñada para ofrecer soluciones de movilidad seguras, eficientes y accesibles. Nos enfocamos en brindar una experiencia de transporte confiable, cómoda y a la medida, tanto para particulares como para empresas. Con un equipo de profesionales altamente capacitados y una flota moderna, nos aseguramos de que cada trayecto sea puntual, seguro y placentero. Ya sea para viajes locales o de larga distancia, en CayeGo trabajamos para hacer que tu traslado sea una experiencia sin complicaciones, adaptándonos siempre a tus necesidades y tiempos.</p>
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
                className='text-4xl text-center py-16 font-Montserrat font-bold'
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
          <section className='w-full h-auto bg-[#202020]'>
            <ContactLayout />
          </section>
        </main>
      </div>
    </>
  )
}