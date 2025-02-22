// Images
import Banner from '../assets/contacto/banner.webp'
// Components 
import { Image } from "@unpic/react";
import { motion } from 'motion/react'
import ContactLayout from '../layouts/ContactLayout';
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
          className='font-bold font-clean_deco text-white z-20 text-2xl lg:text-3xl'
        >
          Contacto
        </motion.h1>
      </header>
      <ContactLayout />
    </>
  )
}