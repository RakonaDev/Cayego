import { FaWhatsapp } from "react-icons/fa";
import Phone from '../../assets/avatar/phone.png'
import { Image } from "@unpic/react";

export default function WhatsappButton() {
  return (
    <div className="fixed -bottom-6 -right-6 px-5 py-2 rounded-lg z-50 m-10 flex items-center justify-center bg-green-500 text-white">
      <a href="https://wa.link/0k68kd" className="flex items-center w-full gap-2 text-white font-medium text-base lg:text-xl relative lg:pe-6 lg:me-8">
        <span><FaWhatsapp size={30} className="h-6" /></span>
        <span className="font-Montserrat lg:pe-5 ">Pide tu reserva</span>
        <div className="hidden lg:block absolute bottom-[12rem] left-[8.5rem] w-full h-full">
          <Image
            src={Phone}
            width={400}
            height={400}
          />
        </div>
      </a>
    </div>
  )
}