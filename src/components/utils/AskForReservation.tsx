// Images
import { useFormik } from 'formik';
import Car from '../../assets/inicio/car.svg'
// Components
import { Image } from "@unpic/react";

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
        mensaje: ''
      },
      onSubmit: (values) => {
        console.log(values)
      }
    })
  return (
    <>
      <section className="w-full h-auto flex max-lg:flex-col gap-10 items-center" id='reserva'>
        <div className='w-full lg:w-1/2'>
          <form onSubmit={handleSubmit} className="w-full bg-white p-5 rounded-md space-y-3 flex flex-col items-center">
            <div className="w-full space-y-2">
              <label htmlFor="nombre" className="font-medium">Nombre de la Empresa:</label>
              <input required type="text" id="nombre" value={values.nombre} name="nombre" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300 p-3 rounded-md border border-black" />
            </div>
            <div className="w-full space-y-2">
              <label htmlFor="email" className="font-medium">Email de la Empresa:</label>
              <input required type="email" id="email" value={values.email} name="email" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300 p-3 rounded-md border border-black" />
            </div>
            <div className="w-full space-y-2">
              <label htmlFor="celular" className="font-medium">Número de la Empresa:</label>
              <input required type="text" id="celular" value={values.celular} name="celular" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300 p-3 rounded-md border border-black" />
            </div>
            <div className="w-full space-y-2">
              <label htmlFor="mensaje" className="font-medium">Mensaje de la Empresa:</label>
              <textarea required name="mensaje" id="mensaje" value={values.mensaje} cols={30} rows={7} onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300 p-3 rounded-md border border-black resize-none"></textarea>
            </div>
            {/*<a href='' type='button'>Enviar mi Reserva por Whatsapp</a>*/}
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