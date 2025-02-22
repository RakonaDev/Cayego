// Images
import Banner from '../assets/about/banner.webp'
import Mision from '../assets/about/mision.svg'
import Vision from '../assets/about/vision.svg'
import Car from '../assets/inicio/car.svg'
// Components
import { motion } from 'motion/react'
import { Image } from "@unpic/react";
import ContactLayout from '../layouts/ContactLayout';
import Container from '../components/utils/Container';
// Icons
import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])
  return (
    <>
      <header className="w-full h-[50dvh] overflow-hidden relative flex justify-center items-center">
        <Image
          src={Banner}
          width={1440}
          height={980}
          className='w-full object-cover h-[50dvh] brightness-75 absolute top-0'
        />
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 1 }}
          className='font-bold font-clean_deco text-white z-20 text-2xl lg:text-3xl'
        >
          Nosotros
        </motion.h1>
      </header>
      <main className='w-full py-10 bg-gray-100'>
        <Container>
          <div className='space-y-6'>
            <h2 className='text-center text-2xl font-bold font-Montserrat'>¿Quiénes Somos?</h2>
            <p className='text-center text-base'>CayeGo es una empresa especializada en servicios de traslado, diseñada para ofrecer soluciones de movilidad seguras, eficientes y accesibles. Nos enfocamos en brindar una experiencia de transporte confiable, cómoda y a la medida, tanto para particulares como para empresas. Con un equipo de profesionales altamente capacitados y una flota moderna, nos aseguramos de que cada trayecto sea puntual, seguro y placentero. Ya sea para viajes locales o de larga distancia, en CayeGo trabajamos para hacer que tu traslado sea una experiencia sin complicaciones, adaptándonos siempre a tus necesidades y tiempos.</p>
            <Image
              src={Car}
              width={600}
              height={600}
              loading='lazy'
              className='mx-auto'
            />
          </div>
          <article className='w-full flex flex-col lg:flex-row gap-10'>
            <div className='w-full lg:w-1/2 space-y-6'>
              <h2 className='text-center font-bold text-2xl font-Montserrat'>Misión</h2>
              <p className='lg:text-start text-base text-center'>Brindar servicios de traslado seguros, eficientes y accesibles, adaptados a las necesidades de nuestros clientes, a través de un equipo humano altamente calificado y una flota moderna. Nos comprometemos a garantizar una experiencia de viaje cómoda, confiable y placentera, impulsando la movilidad sostenible y generando valor para nuestros stakeholders.</p>
              <Image
                src={Mision}
                width={500}
                height={500}
                layout='constrained'
                className='mx-auto'
              />
            </div>
            <div className='w-full lg:w-1/2 space-y-6'>
              <h2 className='text-center font-bold text-2xl font-Montserrat'>Visión</h2>
              <p className='lg:text-start text-center text-base'>Ser la empresa líder en soluciones de movilidad, reconocida por ofrecer un servicio de traslado excepcional, innovador y sostenible, que supere las expectativas de nuestros clientes y contribuya a mejorar la calidad de vida de las personas.</p>
              <Image
                src={Vision}
                width={500}
                height={500}
                layout='constrained'
                className='mx-auto'
              />
            </div>
          </article>
        </Container>
      </main>
      <section className='w-full h-auto bg-[#202020]'>
        <ContactLayout />
      </section>
    </>
  )
}