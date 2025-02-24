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
      <h3 className='text-center px-3 font-Montserrat bg-white py-10 font-bold text-2xl'>Aquí nos encontramos</h3>
      <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.9268096031456!2d-77.11078429999999!3d-12.0760828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cbda598d3c25%3A0xf933f4b6b41b7723!2sProlong%20Huascar%20195%2C%20Lima%2007016!5e1!3m2!1ses-419!2spe!4v1740436702543!5m2!1ses-419!2spe" width="600" height="450" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <h3 className='text-center px-3 font-Montserrat bg-white py-10 font-bold text-2xl'></h3>
      <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.7010175397777!2d-77.1076114!3d-12.0231696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cc3d52f51e01%3A0x1f75ae97fb12652c!2sInternational%20Airport%20Jorge%20Ch%C3%A1vez!5e1!3m2!1ses-419!2spe!4v1740436514618!5m2!1ses-419!2spe" width="600" height="450" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}