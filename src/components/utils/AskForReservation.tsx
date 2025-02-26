// Images
import { useFormik } from 'formik';
import Car from '../../assets/contacto/hombre.webp'
// Components
import { Image } from "@unpic/react";
import { IoMdInformationCircleOutline } from 'react-icons/io';
import ReCAPTCHA from 'react-google-recaptcha';
import { createRef, useState } from 'react';
import Swal from 'sweetalert2';
import axios, { AxiosError } from 'axios';
import { apiURL } from '../../helper/apiAuth';

export default function AskForReservation() {
  const [token, setToken] = useState<string | null | undefined>(null)
  const refCAPTCHA = createRef<ReCAPTCHA>()
  const [loading, setLoading] = useState(false)

  const handleCaptcha = () => {
    setToken(refCAPTCHA.current?.getValue())
  }
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
        distrito_origen: '',
        direccion_destino: '',
        distrito_destino: ''
      },
      onSubmit: async (values) => {
        if (loading) return
        setLoading(true)
        if (!token) {
          setLoading(false)
          Swal.fire({
            title: 'Error!',
            text: 'Debes comprobar que no eres un robot para realizar esta acción.',
            icon: 'error',
          })
          return
        }
        try {
          const response = await axios.post(`${apiURL}/reservation`, {
            nombres: values.nombre,
            email: values.email,
            celular: values.celular,
            apellidos: values.apellido,
            fecha: values.fecha,
            hora: values.hora,
            distrito_origen: values.direccion_origen,
            distrito_destino: values.direccion_destino
          })
          if (response.status === 200) {
            setLoading(false)
            Swal.fire({
              title: '¡Reserva enviada!',
              icon: 'success',
            })
          }
          else {
            throw new Error('Error')
          }
        }
        catch (error) {
          if (error instanceof AxiosError) {
            Swal.fire({
              title: 'Error!',
              text: error.response?.data.detail,
              icon: 'error',
            })
          }
          setLoading(false)
        }
      }
    })
  return (
    <>
      <section className="w-full h-auto flex max-lg:flex-col gap-10 items-center" id='reserva'>
        <div className='w-full lg:w-1/2'>
          <div className="w-full text-white space-y-3 mb-3">
            <h3 className='text-redPrimary font-medium text-lg lg:text-xl'>Importante: </h3>
            <ul className='max-lg:flex max-lg:flex-col max-lg:items-center space-y-3'>
              <li className='flex gap-2 items-center text-sm lg:text-md text-redPrimary font-medium'><span><IoMdInformationCircleOutline size={30} /></span> <span className='text-white'>Déjanos un mensaje o escríbenos a través de WhatsApp nuestra asistente virtual Cayetana te atenderá.</span></li>
              <li className='flex gap-2 items-center text-sm lg:text-md text-redPrimary font-medium'><span><IoMdInformationCircleOutline size={30} /></span> <span className='text-white'>Todas las solicitudes de reserva deberán realizarse como mínimo con una hora de anticipación.</span></li>
              <li className='flex gap-2 items-center text-sm lg:text-md text-redPrimary font-medium'><span><IoMdInformationCircleOutline size={30} /></span> <span className='text-white'>De solicitar una unidad al momento se deberá llamar a la central telefónica para poder conseguir una unidad disponible.</span></li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="w-full bg-white py-2 px-5 lg:p-5 rounded-xl space-y-3 flex flex-col items-center">
            <div className='w-full flex gap-2 items-center'>
              <div className="w-1/2 space-y-2">
                <label htmlFor="nombre" className="text-sm font-medium">Nombres:</label>
                <input type="text" required id="nombre" value={values.nombre} name="nombre" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
              </div>
              <div className="w-1/2 space-y-2">
                <label htmlFor="apellido" className="text-sm font-medium">Apellidos:</label>
                <input type="text" required id="apellido" value={values.apellido} name="apellido" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
              </div>
            </div>
            <div className="w-full space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email:</label>
              <input type="email" required id="email" value={values.email} name="email" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
            </div>
            <div className="w-full space-y-2">
              <label htmlFor="celular" className="text-sm font-medium">Celular:</label>
              <input type="text" required id="celular" value={values.celular} name="celular" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
            </div>
            <div className='w-full flex gap-2 '>
              <div className="w-1/2 space-y-2">
                <label htmlFor="fecha" className="text-sm font-medium">Fecha:</label>
                <input type="date" required id="fecha" value={values.fecha} name="fecha" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
              </div>
              <div className="w-1/2 space-y-2">
                <label htmlFor="hora" className="text-sm font-medium">Hora:</label>
                <input type="time" required id="hora" value={values.hora} name="hora" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
              </div>
            </div>
            <div className="w-full space-y-2 flex flex-col">
              <label htmlFor="direccion_origen" className="text-sm font-bold text-redPrimary">Origen (Recojo)</label>
              <label htmlFor="direccion_origen" className="text-sm font-medium">Dirección y Distrito</label>
              <input type="text" required id="direccion_origen" value={values.direccion_origen} name="direccion_origen" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-2 rounded-md border border-black" />
            </div>
            <div className="w-full space-y-2 flex flex-col">
              <label htmlFor="direccion_origen" className="text-sm font-bold">Destino (Llegada)</label>
              <label htmlFor="direccion_destino" className=" text-sm font-medium">Dirección y Distrito:</label>
              <input type="text" required id="direccion_destino" value={values.direccion_destino} name="direccion_destino" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-2 rounded-md border border-black" />
            </div>
            {/*<div className="w-full flex gap-2 max-lg:flex-col">
              <div className='w-full lg:w-1/2'>
                <label htmlFor="direccion_origen" className="text-sm font-medium">Dirección de Origen:</label>
                <input type="text" required id="direccion_origen" value={values.direccion_origen} name="direccion_origen" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
              </div>
              <div className='w-full lg:w-1/2'>
                <label htmlFor="distrito_origen" className="text-sm font-medium">Distrito de Origen:</label>
                <input type="text" required id="distrito_origen" value={values.distrito_origen} name="distrito_origen" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
              </div>
            </div>
            <div className="w-full flex gap-2 max-lg:flex-col">
              <div className='w-full lg:w-1/2'>
                <label htmlFor="direccion_destino" className="text-sm font-medium">Dirección y Distrito de Destino:</label>
                <input type="text" required id="direccion_destino" value={values.direccion_destino} name="direccion_destino" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
              </div>
              <div className='w-full lg:w-1/2'>
                <label htmlFor="direccion_destino" className="text-sm font-medium">Dirección y Distrito de Destino:</label>
                <input type="text" required id="direccion_destino" value={values.direccion_destino} name="direccion_destino" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
              </div>
        </div>*/}
        <div className='w-full flex justify-center'>
          <ReCAPTCHA
            ref={refCAPTCHA}
            sitekey='6LdptTUqAAAAAEN7szwumM1ksjY_WBlDGfSv6PPq'
            onChange={handleCaptcha}
          />
        </div>
        <button type="submit" className="px-8 py-2 bg-redPrimary font-medium text-white text-base lg:text-lg rounded-lg">{loading ? 'Enviando Reserva...' : 'Enviar'}</button>
      </form>
    </div >
      <div className='w-full lg:w-1/2'>
        <Image
          src={Car}
          width={600}
          height={600}
          className='w-full'
        />
      </div>
      </section >
    </>
  )
}