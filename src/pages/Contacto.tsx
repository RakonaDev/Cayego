// Images
import Banner from '../assets/contacto/banner.webp'
import Background from '../assets/inicio/background1.webp'
// Components 
import { Image } from "@unpic/react";
import { motion } from 'motion/react'
import ContactLayout from '../layouts/ContactLayout';
import { MdOutlineTimer } from 'react-icons/md';
import { FaCarAlt } from 'react-icons/fa';
import { RiPoliceCarFill } from 'react-icons/ri';
import Container from '../components/utils/Container';
import { useEffect } from 'react';

export default function Contacto() {
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
          className='font-bold font-clean_deco text-white z-20 text-2xl lg:text-4xl'
        >
          Contacto
        </motion.h1>
      </header>
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
      <ContactLayout />
    </>
  )
}