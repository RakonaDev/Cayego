import { Image } from "@unpic/react";
import { SpaceInterface } from "../../interfaces/SpaceInterface";
import { TbArmchair } from "react-icons/tb";
/*
import Yape from '../../assets/metodos_pago/yape.webp'
import Plin from '../../assets/metodos_pago/plin.avif'
import Visa from '../../assets/metodos_pago/visa.jpeg'
import Mastercard from '../../assets/metodos_pago/mastercard-removebg-preview.png'
import American from '../../assets/metodos_pago/american.png'
*/
export default function TransportCard({ transport }: { transport: SpaceInterface }) {
  return (
    <div className="max-w-[550px] w-full group min-w-[250px] flex gap-5 lg:flex-row flex-col max-lg:items-center rounded-xl glass-card shadow-md shadow-black/40">
      <div className="w-full lg:w-1/2">
        <Image
          src={transport.url}
          width={450}
          height={300}
          className="lg:max-w-[300px] min-h-[190px] w-full object-cover rounded-lg cursor-default group-hover:translate-x-5 translate-x-0 duration-500 transition-all"
        />
        <div className="space-y-3">
          <h3 className=" text-2xl text-center font-bold font-Montserrat lg:font-Montserrat text-redPrimary max-lg:text-center">{transport.name_car}</h3>
          <p className="text-sm mx-auto px-3 py-2 bg-redPrimary text-white w-fit font-medium rounded-lg">{transport.price}</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center space-y-5">
        <p className="max-lg:text-center text-sm">{transport.description}</p>
        <div className="flex gap-2 items-center max-lg:flex-col">
          <span><TbArmchair size={25} /></span>
          <span className="font-bold text-base font-Montserrat">{transport.space} asientos</span>
        </div>
      </div>
    </div>
  )
}