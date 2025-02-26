// Components
import { Image } from '@unpic/react';
// Images
import Logos from '../../assets/lp.svg'
// Icons
import { IoIosArrowDown, IoIosLogOut } from 'react-icons/io';
import { AnimatePresence } from 'motion/react';
import React from 'react';
import {motion} from 'framer-motion'
import axios from 'axios';
import { apiURL } from '../../helper/apiAuth';
import { useTokenAccess } from '../../store/useTokenAccess';
import { useNavigate } from 'react-router-dom';

export default function UserHeader() {
  const navigate = useNavigate()
  const { clearToken, token } = useTokenAccess()
  const [open, setOpen] = React.useState(false)
  const handleChange = () => {
    console.log(open)
    setOpen(!open)
  }
  const logout = async () => {
    const response = await axios.post(`${apiURL}/logout`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (response.status === 200) {
      clearToken()
      navigate('/')
    }
  }
  return (
    <div className="w-full bg-[#222529] py-5 flex justify-end text-white">
      <header className="px-8 flex gap-5 items-center relative">
        <div>
          <Image
            src={Logos}
            width={40}
            height={40}
            layout='constrained'
          />
        </div>
        <div>
          <h3 className="text-base font-medium text-white">Administrador</h3>
          <p className='italic text-sm'>Cayego</p>
        </div>
        <button type='button' onClick={handleChange} title='button' className='text-white'>
          <IoIosArrowDown size={26} />
        </button>
        <AnimatePresence>
          {
            open && (
              <motion.div 
                initial={{ opacity: 0, x: 0 }}
                exit={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', duration: 1 }}
                className='absolute top-[150%] right-5 w-full rounded-xl h-full bg-white text-black flex flex-col justify-center items-center'
              >
                <button type='button' onClick={logout} className='flex items-center gap-4'>
                  <span><IoIosLogOut /></span>
                  <span>Cerrar Sesión</span>
                </button>
              </motion.div>
            )
          }
        </AnimatePresence>
      </header>
    </div>
  )
}