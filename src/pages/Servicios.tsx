// Images
import Banner from '../assets/service/banner.webp'
// Components
import { Image } from "@unpic/react";
import { motion } from 'motion/react'
import Container from '../components/utils/Container';
import ServiceCard from '../components/utils/ServiceCard';
import { dataServices } from '../helper/dataServices';
import AskForReservation from '../components/utils/AskForReservation';
import { useEffect } from 'react';

export default function Servicios() {
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
          Servicios
        </motion.h1>
      </header>
      <main className='py-10 w-full h-auto bg-white'>
        <Container>
          <div className='w-full h-auto text-black space-y-10'>
            <h2 className='text-center font-clean_deco font-bold text-3xl'>Nuestros Servicios son</h2>
            <div className='w-full h-auto'>
              {
                dataServices.map((service) => {
                  return (
                    <ServiceCard service={service} />
                  )
                })
              }
            </div>
          </div>
        </Container>
      </main>
      <footer className='w-full h-auto bg-[#202020] py-10'>
        <Container>
          <h2 className='font-bold text-3xl text-white text-center font-clean_deco mb-10'>Haga su reserva aquí mismo</h2>
          <AskForReservation />
        </Container>
      </footer>
    </>
  )
}