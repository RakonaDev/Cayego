import { Image } from '@unpic/react'
import Logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
import { FaCar } from 'react-icons/fa6'
import { LuInfo } from "react-icons/lu";
import { useEffect, useState } from 'react';

const itemsSelected = [
  {
    top: 'hidden'
  },
  {
    top: 'top-[2.7rem] absolute' 
  },
  {
    top: 'top-[8.1rem] absolute'
  }
]

export default function MenuHeader () {
  const location = useLocation()
  const [itemSelected, setItemSelected] = useState(itemsSelected[0].top)
  useEffect(() => {
    if (location.pathname.includes('servicios')) {
      setItemSelected(itemsSelected[1].top)
    }
    else if (location.pathname.includes('conductores')) {
      setItemSelected(itemsSelected[2].top)
    }
    else {
      setItemSelected(itemsSelected[0].top)
    }
  }, [location.pathname])
  return (
    <>
      <header className="w-[60vw] lg:w-1/4 space-y-10 h-dvh flex flex-col pt-20 items-center fixed bg-[#2B2E35] top-0 left-0">
        <Link to='/admin/dashboard'>
          <Image 
            src={Logo}            
            width={140}
            height={140}
            layout='constrained'
          />
        </Link>
        <nav className='text-white relative flex flex-col space-y-16 font-bold'>
          <div className={`${itemSelected} -left-6 rounded-lg w-48 h-16 bg-redPrimary duration-500 transition-all`}></div>
          <Link to='/admin/servicios' className='text-base flex gap-4 items-center z-10'>
            
            <span><LuInfo size={20} /></span>
            <span className='font-Montserrat'>Servicios</span>
          </Link>
          <Link to='/admin/conductores' className='text-base flex gap-4 items-center z-10'>

            <span><FaCar size={20} /></span>
            <span className='font-Montserrat'>Conductores</span>
          </Link>
        </nav>
      </header>
    </>
  )
}