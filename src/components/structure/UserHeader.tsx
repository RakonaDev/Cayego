// Components
import { Image } from '@unpic/react';
// Images
import Logos from '../../assets/lp.svg'
// Icons
import { IoIosArrowDown } from 'react-icons/io';

export default function UserHeader() {
  return (
    <div className="w-full bg-[#222529] py-5 flex justify-end text-white">
      <header className="px-8 flex gap-5 items-center">
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
        <button title='button' className='text-white'>
          <IoIosArrowDown size={26} />
        </button>
      </header>
    </div>
  )
}