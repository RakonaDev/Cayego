
// Images
import Car from '../assets/car.svg'

// Icons
import { SiInstagram, SiMinutemailer } from "react-icons/si";

// Components
import Container from "../components/utils/Container";
import { useFormik } from "formik";
import { Image } from '@unpic/react';
import { FaCheck, FaMapMarkerAlt, FaPhoneAlt, FaTiktok, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { motion } from 'motion/react'
import { FaFacebook } from 'react-icons/fa6';

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
        apellido: '',
        fecha: '',
        hora: '',
        direccion_origen: '',
        direccion_destino: ''
      },
      onSubmit: (values) => {
        console.log(values)
      }
    })
  return (
    <div className="w-full h-auto py-16 bg-gray-200">
      <Container>
        <main className="w-full h-auto space-y-16">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center text-4xl text-black font-Montserrat font-bold"
          >
            Solicita tu reserva con nosotros y un asesor especializado se contactará contigo
          </motion.h2>
          <div className="w-full flex lg:flex-row flex-col justify-evenly gap-10">
            <div className="w-full lg:w-1/3 space-y-5 flex flex-col items-center">
              <form onSubmit={handleSubmit} className="w-full bg-white p-5 rounded-xl space-y-3 flex flex-col items-center">
                <div className='w-full flex gap-2 items-center'>
                  <div className="w-1/2 space-y-2">
                    <label htmlFor="nombre" className="font-medium">Nombre:</label>
                    <input type="text" required id="nombre" value={values.nombre} name="nombre" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300 p-3 rounded-md border border-black" />
                  </div>
                  <div className="w-1/2 space-y-2">
                    <label htmlFor="apellido" className="font-medium">Apellidos:</label>
                    <input type="text" required id="apellido" value={values.apellido} name="apellido" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300 p-3 rounded-md border border-black" />
                  </div>
                </div>
                <div className="w-full space-y-2">
                  <label htmlFor="email" className="font-medium">Email:</label>
                  <input type="email" required id="email" value={values.email} name="email" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300 p-3 rounded-md border border-black" />
                </div>
                <div className="w-full space-y-2">
                  <label htmlFor="celular" className="font-medium">Celular:</label>
                  <input type="text" required id="celular" value={values.celular} name="celular" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300 p-3 rounded-md border border-black" />
                </div>
                <div className='w-full flex gap-2 '>
                  <div className="w-1/2 space-y-2">
                    <label htmlFor="fecha" className="font-medium">Fecha:</label>
                    <input type="date" required id="fecha" value={values.fecha} name="fecha" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300 p-3 rounded-md border border-black" />
                  </div>
                  <div className="w-1/2 space-y-2">
                    <label htmlFor="hora" className="font-medium">Hora:</label>
                    <input type="time" required id="hora" value={values.hora} name="hora" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300 p-3 rounded-md border border-black" />
                  </div>
                </div>
                <div className="w-full space-y-2">
                  <label htmlFor="direccion_origen" className="font-medium">Dirección y Distrito de Origen:</label>
                  <input type="text" required id="direccion_origen" value={values.direccion_origen} name="direccion_origen" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300 p-3 rounded-md border border-black" />
                </div>
                <div className="w-full space-y-2">
                  <label htmlFor="direccion_destino" className="font-medium">Dirección y Distrito de Destino:</label>
                  <input type="text" required id="direccion_destino" value={values.direccion_destino} name="direccion_destino" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300 p-3 rounded-md border border-black" />
                </div>
                <button type="submit" className="px-8 py-2 bg-redPrimary font-medium text-white text-lg rounded-lg">Enviar</button>
              </form>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col items-center space-y-5 font-Montserrat">
              <section className='w-full h-auto p-5 space-y-4 rounded-xl bg-white'>
                <h6 className='flex gap-2 text-redPrimary items-center font-Montserrat'><span><FaMapMarkerAlt size={30} /></span> <span className='font-bold text-xl text-black'>Dirección: </span></h6>
                <p className='text-lg font-medium'>Prolongación Huáscar 195 San Miguel, Lima, Perú</p>
              </section>
              <section className='w-full h-auto p-5 space-y-4 rounded-xl bg-white'>
                <h6 className='flex gap-2 items-center text-redPrimary font-Montserrat'><span><FaPhoneAlt size={30} /></span> <span className='font-bold text-xl text-black'>Teléfonos: </span></h6>
                <p className='text-lg font-medium'>(+51) 904 866 430</p>
                <p className='text-lg font-medium'>(+51) 986 296 366</p>
              </section>
              <section className='w-full px-5 space-y-3'>
                <h6><span className='font-bold text-xl text-black font-Montserrat'>Siguenos en: </span></h6>
                <nav className='flex gap-5 flex-wrap'>
                  <a title='instagram' href="https://www.instagram.com/cayego.pe/" target="_blank" rel="noopener noreferrer" className="font-medium px-4 py-4 bg-redPrimary rounded-lg text-white text-xl flex gap-2 items-center"><span><SiInstagram size={25} /></span></a>
                  <a title='facebook' href="https://www.facebook.com/profile.php?id=61567892079132" target="_blank" rel="noopener noreferrer" className="font-medium px-4 py-4 bg-redPrimary rounded-lg text-white text-xl flex gap-2 items-center"><span><FaFacebook size={25} /></span> </a>
                  <a title='whatsapp' href="https://wa.link/0k68kd" target="_blank" rel="noopener noreferrer" className="font-medium px-4 py-4 bg-redPrimary rounded-lg text-white text-xl flex gap-2 items-center"><span><FaWhatsapp size={25} /></span></a>
                  <a title='tiktok' href="https://www.tiktok.com/@caye.go?_t=ZM-8u3lTccQWf8&_r=1" target="_blank" rel="noopener noreferrer" className="font-medium px-4 py-4 bg-redPrimary rounded-lg text-white text-xl flex gap-2 items-center"><span><FaTiktok size={25} /></span></a>
                  <a title='twitter' href="https://x.com/caye_go" target="_blank" rel="noopener noreferrer" className="font-medium px-4 py-4 bg-redPrimary rounded-lg text-white text-xl flex gap-2 items-center"><span><FaTwitter size={25} /></span></a>
                  <a title='youtube' href="https://www.youtube.com/@CayeGo33" target="_blank" rel="noopener noreferrer" className="font-medium px-4 py-4 bg-redPrimary rounded-lg text-white text-xl flex gap-2 items-center"><span><FaYoutube size={25} /></span></a>
                </nav>
              </section>

            </div>
          </div>
        </main>
        <main className="mt-16">
          <h2 className="text-center text-4xl text-black font-Montserrat font-bold">Conduce con nosotros si cumples con los siguientes requisitos </h2>
          <div className="w-full lg:flex gap-10 py-10">
            <div className="w-full lg:w-1/2 space-y-10 max-lg:flex max-lg:flex-col max-lg:items-center">
              <h3 className="text-redPrimary font-bold text-2xl text-center">Requerimientos</h3>
              <ul className='max-lg:flex max-lg:flex-col max-lg:items-center'>
                <li className='text-black font-medium text-2xl mb-5'>Enviar TODOS estos datos al correo (REQUERIDOS): </li>
                <li className='flex gap-2 text-black text-xl font-medium'><span><FaCheck color='#F22727' /></span> <span>Antecedentes Policiales o Certi Adulto. (PDF o Foto)</span></li>
                <li className='flex gap-2 text-black text-xl font-medium'><span><FaCheck color='#F22727' /></span> <span>SOAT. (PDF o Foto)</span></li>
                <li className='flex gap-2 text-black text-xl font-medium'><span><FaCheck color='#F22727' /></span> <span>Tarjeta de Propiedad. (PDF o Foto)</span></li>
                <li className='flex gap-2 text-black text-xl font-medium'><span><FaCheck color='#F22727' /></span> <span>DNI ambos lados. (PDF o Foto)</span></li>
                <li className='flex gap-2 text-black text-xl font-medium'><span><FaCheck color='#F22727' /></span> <span>Recibo de Luz o Agua a Domicilio Actual (PDF o Foto)</span></li>
                <li className='flex gap-2 text-black text-xl font-medium'><span><FaCheck color='#F22727' /></span> <span>Enviar su RUC</span></li>
                <li className='flex gap-2 text-black text-xl font-medium'><span><FaCheck color='#F22727' /></span> <span>Nº de cuenta BCP o de otro banco con su N° de cita de 20 digitos CCI</span></li>
                <li className='flex gap-2 text-black text-xl font-medium'><span><FaCheck color='#F22727' /></span> <span>La unidad no debe ser mayor a 5 años. </span></li>
                <li className='flex gap-2 text-black text-xl font-medium'><span><FaCheck color='#F22727' /></span> <span>Enviar fotos de la unidad por dentro y por fuera ambos lados y en buen estado. </span></li>
                <li className='flex gap-2 text-black text-xl font-medium'><span><FaCheck color='#F22727' /></span> <span>En caso cuenten con lunas polarizadas, enviar su permiso (PDF). </span></li>
              </ul>
              <ul className='max-lg:flex max-lg:flex-col max-lg:items-center'>
                <li className='text-black font-medium text-2xl mb-5'>Revisión Técnica (Si Aplica): </li>
                <li className='flex gap-2 text-black text-xl font-medium'><span><FaCheck color='#F22727' /></span> <span>Todas las unidades deben contar con aire acondicionado. </span></li>
                <li className='flex gap-2 text-black text-xl font-medium'><span><FaCheck color='#F22727' /></span> <span>Enviar su número de celular y foto ACTUAL. </span></li>
                <li className='flex gap-2 text-black text-xl font-medium'><span><FaCheck color='#F22727' /></span> <span>La vestimenta debe ser formal, pantalón de vestir negro, camisa blanca, zapatos negros y corbata (SACO PRESENTABLE) </span></li>
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