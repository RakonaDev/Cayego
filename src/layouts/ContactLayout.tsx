
// Images
import Car from '../assets/car.svg'

// Icons
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { SiGooglemaps, SiMinutemailer } from "react-icons/si";

// Components
import Container from "../components/utils/Container";
import { useFormik } from "formik";
import { Image } from '@unpic/react';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'motion/react'
import { IoMdPhonePortrait } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

export default function ContactLayout() {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit
  }
    = useFormik({
      initialValues: {
        nombre: '',
        email: '',
        celular: '',
        mensaje: ''
      },
      onSubmit: (values) => {
        console.log(values)
      }
    })
  return (
    <div className="w-full h-auto py-16 bg-[#202020]">
      <Container>
        <main className="w-full h-auto space-y-16">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center text-3xl text-redPrimary font-clean_deco font-bold"
          >
            ¿Estás interesado en nuestros servicios?
          </motion.h2>
          <div className="w-full flex lg:flex-row flex-col justify-evenly gap-10">
            <div className="w-full lg:w-1/3 space-y-5 flex flex-col items-center">
              <h3
                className="text-redPrimary font-medium text-xl lg:text-2xl text-center"
              >
                Información
              </h3>
              <div className="space-y-2 font-medium rounded-md px-4 py-2 bg-white text-black text-xl flex gap-2 items-center">
                <p className='flex gap-2 items-center'><span><MdEmail /></span> cayego33gmail.com</p>
              </div>
              <div className="space-y-2 font-medium rounded-md px-4 py-2 bg-white text-black text-xl">
                <p className='flex gap-2 items-center'><span><IoMdPhonePortrait /></span>  <span>(+51) 986 296 366</span></p>
                <p className='flex gap-2 items-center'><span><IoMdPhonePortrait /></span>  <span>(+51) 904 866 430</span></p>
              </div>
              <a href="https://maps.app.goo.gl/C86y55DGFHDPyhV76" target="_blank" rel="noopener noreferrer" className="font-medium rounded-md px-4 py-2 bg-white text-black text-xl flex gap-2 items-center"><span><SiGooglemaps size={30} /></span> <span>Prolong Huascar 195, Lima 07016 </span></a>
            </div>
            <div className="w-full lg:w-1/3 space-y-5 flex flex-col items-center">
              <h3 className="text-redPrimary font-medium text-2xl text-center">Contacto</h3>
              <form onSubmit={handleSubmit} className="w-full bg-white p-5 rounded-md space-y-3 flex flex-col items-center">
                <div className="w-full space-y-2">
                  <label htmlFor="nombre" className="font-medium">Nombre de la Empresa:</label>
                  <input type="text" id="nombre" value={values.nombre} name="nombre" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300 p-3 rounded-md border border-black" />
                </div>
                <div className="w-full space-y-2">
                  <label htmlFor="email" className="font-medium">Email de la Empresa:</label>
                  <input type="email" id="email" value={values.email} name="email" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300 p-3 rounded-md border border-black" />
                </div>
                <div className="w-full space-y-2">
                  <label htmlFor="celular" className="font-medium">Número de la Empresa:</label>
                  <input type="text" id="celular" value={values.celular} name="celular" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300 p-3 rounded-md border border-black" />
                </div>
                <div className="w-full space-y-2">
                  <label htmlFor="mensaje" className="font-medium">Mensaje de la Empresa:</label>
                  <textarea name="mensaje" id="mensaje" value={values.mensaje} cols={30} rows={7} onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300 p-3 rounded-md border border-black resize-none"></textarea>
                </div>
                <button type="submit" className="px-8 py-2 bg-redPrimary font-medium text-white text-lg rounded-lg">Enviar</button>
              </form>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col items-center space-y-5">
              <h3 className="text-redPrimary font-medium text-2xl">Redes</h3>
              <a href="https://www.instagram.com/cayego.pe/" target="_blank" rel="noopener noreferrer" className="font-medium rounded-md px-4 py-2 bg-white text-black text-xl flex gap-2 items-center"><span><FaInstagram size={30} /></span><span>CayeGo </span></a>
              <a href="https://www.facebook.com/profile.php?id=61567892079132" target="_blank" rel="noopener noreferrer" className="font-medium rounded-md px-4 py-2 bg-white text-black text-xl flex gap-2 items-center"><span><FaFacebook size={30} /></span><span>CayeGo </span> </a>
              <a href="https://wa.link/0k68kd" target="_blank" rel="noopener noreferrer" className="font-medium rounded-md px-4 py-2 bg-white text-black text-xl flex gap-2 items-center"><span><FaWhatsapp size={30} /></span> <span>CayeGo </span></a>
            </div>
          </div>
        </main>
        <main className="mt-16">
          <h2 className="text-center text-3xl text-redPrimary font-clean_deco font-bold">¿Quieres trabajar con nosotros?</h2>
          <div className="w-full lg:flex gap-10 py-10">
            <div className="w-full lg:w-1/2 space-y-10 max-lg:flex max-lg:flex-col max-lg:items-center">
              <h3 className="text-redPrimary font-medium text-2xl text-center">Requerimientos</h3>
              <ul className='max-lg:flex max-lg:flex-col max-lg:items-center'>
                <li className='text-white font-medium text-2xl mb-5'>Enviar TODOS estos datos al correo (REQUERIDOS): </li>
                <li className='flex gap-2 text-white text-xl font-medium'><span><FaCheck color='#F22727' /></span> <span>Antecedentes Policiales o Certi Adulto. (PDF o Foto)</span></li>
                <li className='flex gap-2 text-white text-xl font-medium'><span><FaCheck color='#F22727' /></span> <span>SOAT. (PDF o Foto)</span></li>
                <li className='flex gap-2 text-white text-xl font-medium'><span><FaCheck color='#F22727' /></span> <span>Tarjeta de Propiedad. (PDF o Foto)</span></li>
                <li className='flex gap-2 text-white text-xl font-medium'><span><FaCheck color='#F22727' /></span> <span>DNI. (PDF o Foto)</span></li>
                <li className='flex gap-2 text-white text-xl font-medium'><span><FaCheck color='#F22727' /></span> <span>Enviar su RUC</span></li>
                <li className='flex gap-2 text-white text-xl font-medium'><span><FaCheck color='#F22727' /></span> <span>Nº de Cuenta BCP</span></li>
              </ul>
              <a href="mailto:cayego33gmail.com" className=' bg-redPrimary text-white font-medium text-lg px-6 py-2 rounded-lg flex gap-2 w-fit items-center'><span>Estoy Interesado</span> <span><SiMinutemailer size={30} /></span></a>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src={Car}
                width={500}
                height={500}
                className='w-full h-auto'
              />
            </div>
          </div>
        </main>
      </Container>
    </div>
  )
}