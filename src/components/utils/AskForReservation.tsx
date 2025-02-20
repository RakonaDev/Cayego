// Images
import { useFormik } from 'formik';
import Car from '../../assets/inicio/car.svg'
// Components
import { Image } from "@unpic/react";
import { IoMdInformationCircleOutline } from 'react-icons/io';

export default function AskForReservation() {
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
    <>
      <section className="w-full h-auto flex max-lg:flex-col gap-10 items-center" id='reserva'>
        <div className='w-full lg:w-1/2'>
          <div className="w-full text-white space-y-3 mb-3">
            <h3 className='text-redPrimary font-medium text-2xl'>Recuerde: </h3>
            <ul className='max-lg:flex max-lg:flex-col max-lg:items-center space-y-3'>
              <li className='flex gap-2 items-center text-redPrimary font-medium'><span><IoMdInformationCircleOutline size={30} /></span> <span className='text-white'>Déjanos un mensaje o escríbenos a través de WhatsApp nuestra asistente virtual Cayetana te atenderá.</span></li>
              <li className='flex gap-2 items-center text-redPrimary font-medium'><span><IoMdInformationCircleOutline size={30} /></span> <span className='text-white'>Todas las solicitudes de reserva deberán realizarse como mínimo con una hora de anticipación, de solicitar una unidad al momento se deberá llamar a la central telefónica para poder conseguir una unidad disponible.</span></li>
            </ul>
          </div>
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
        <div className='w-full lg:w-1/2'>
          <Image
            src={Car}
            width={600}
            height={600}
            className='w-full'
          />
        </div>
      </section>
    </>
  )
}