import { Image } from '@unpic/react'
import Aside from '../assets/login/aside.webp'
import Logo from '../assets/login/logo.png'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Login () {
  return (
    <div  className="h-dvh w-full flex relative">
      <Link to='/' className='absolute left-5 top-5 text-white flex gap-3 items-center font-bold'>
        <span><FaArrowLeft size={30} /></span>
        <span>Volver al Inicio</span>
      </Link>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-8">
        <div className='w-full flex flex-col items-center'>
          <Image 
            src={Logo}
            width={200}
            height={200}
            className='mx-auto'
          />
          <form className='max-w-lg w-full p-5 space-y-6 flex flex-col items-center'>
            <div className='space-y-3 w-full flex flex-col'>
              <label htmlFor="email" className='text-lg font-medium text-redPrimary'>Usuario:</label>
              <input type="email" name="email" id="email" className='w-full rounded-lg p-3 text-black font-medium'/>
            </div>
            <div className='space-y-3 w-full flex flex-col'>
              <label htmlFor="password" className='text-lg font-medium text-redPrimary'>Contraseña:</label>
              <input type="password" name="password" id="password" className='w-full rounded-lg p-3 text-black font-medium'/>
            </div>
            <button type='submit' className='bg-redPrimary font-medium text-white text-lg mx-auto px-8 py-2 rounded-xl'>Ingresar</button>
          </form>
        </div>
      </div>
      <div className="w-1/2 max-lg:hidden"> 
        <Image 
          src={Aside}
          width={1200}
          height={1080}
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  )
}