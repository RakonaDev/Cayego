import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { dataServices } from "../helper/dataServices"
import { Image } from "@unpic/react"
import { motion } from 'motion/react'
import { ServiceInterface } from "../interfaces/ServiceInterfaces"
import AskForReservation from "../components/utils/AskForReservation"
import Container from "../components/utils/Container"
import RedirectToElement from "../logic/RedirectToElement"
import { dataSpace } from "../helper/dataSpace"
import TransportCard from "../components/utils/TransportCard"
import Yape from '../assets/metodos_pago/yape.webp'
import Plin from '../assets/metodos_pago/plin.avif'
import Visa from '../assets/metodos_pago/visa.jpeg'
import Mastercard from '../assets/metodos_pago/mastercard-removebg-preview.png'
import American from '../assets/metodos_pago/american.png'
import Dinners from '../assets/metodos_pago/dinners.png'
import Soles from '../assets/metodos_pago/soles.png'
import Dolar from '../assets/metodos_pago/dolar.png'
import Transferencia from '../assets/metodos_pago/transferencia.png'

export default function ServiceLayout() {
  const { id } = useParams()
  const [serviceSelected, setServiceSelected] = useState<ServiceInterface>({
    description: '',
    id: 0,
    title: '',
    url_image: ''
  })
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
    const Data = dataServices.filter((item) => item.id === Number(id))
    setServiceSelected(Data[0])
  }, [id])

  return (
    <>
      <div className="h-auto w-full">
        <header className="w-full h-dvh lg:h-[65dvh] overflow-hidden relative flex justify-center items-center">
          <Image
            src={serviceSelected.url_image}
            width={1440}
            height={980}
            className='w-full h-full object-cover lg:h-[65dvh] brightness-75 absolute top-0'
          />
          <div className="flex flex-col gap-3">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', duration: 1 }}
              className='font-bold font-clean_deco text-white z-20 text-xl lg:text-3xl text-center'
            >
              {serviceSelected.title}
            </motion.h1>
            <button onClick={() => RedirectToElement('reserva')} type="button" className="bg-redPrimary font-medium text-base lg:textl-lg text-white px-6 py-2 z-10 mx-auto rounded-lg">
              Quiero Reservar
            </button>
          </div>
        </header>
      </div>
      <section className="w-full h-auto py-10 bg-white text-black">
        <Container>
          <div className="space-y-10">
            <h2 className="text-center font-bold text-xl lg:text-2xl font-Montserrat text-redPrimary">De que trata este servicio?</h2>
            <p className="font-medium text-md lg:text-base text-center">{serviceSelected.description}</p>
          </div>
        </Container>
      </section>
      <section className="w-full bg-gray-200 py-10">
        <Container>
          <div className="w-full py-10 space-y-10">
            <h2 className="text-center font-bold text-2xl font-Montserrat text-black">Nuestras Unidades Disponibles</h2>
            <div className="flex flex-wrap justify-evenly gap-5">
              {
                dataSpace.map((transport) => {
                  return (
                    <TransportCard transport={transport} />
                  )
                })
              }
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-white py-10 w-full h-auto">
        <h2 className="text-2xl text-center font-bold font-Montserrat">Métodos de Pago</h2>
        <ul className="flex gap-2 flex-wrap justify-evenly w-fit mx-auto mt-5">
          <li className="flex gap-2 items-center  bg-gray-200 py-1 px-2  rounded-lg w-fit">
            <span>
              <Image
                src={American}
                width={40}
                height={35}
                className="h-6 w-10 object-cover"
              />
            </span>
          </li>
          <li className="flex gap-2 items-center bg-gray-200 py-1 px-2  rounded-lg w-fit">
            <span>
              <Image
                src={Mastercard}
                width={40}
                height={35}
                className="h-6 w-10 object-cover rounded-lg"
              />
            </span>
          </li>
          <li className="flex gap-2 items-center bg-gray-200 py-1 px-2  rounded-lg w-fit">
            <span>
              <Image
                src={Visa}
                width={40}
                height={35}
                className="h-6 w-10 object-cover rounded-lg"
              />
            </span>
          </li>
          <li className="flex gap-2 items-center bg-gray-200 py-1 px-2  rounded-lg w-fit">
            <span>
              <Image
                src={Dinners}
                width={40}
                height={35}
                className="h-6 w-24 object-cover rounded-lg"
              />
            </span>
          </li>
          <li className="flex gap-2 items-center bg-gray-200 py-1 px-2  rounded-lg w-fit">
            <span>
              <Image
                src={Transferencia}
                width={40}
                height={35}
                className="h-6 w-24 object-cover rounded-lg"
              />
            </span>
          </li>
          <li className="flex gap-2 items-center bg-gray-200 py-1 px-2  rounded-lg w-fit">
            <span>
              <Image
                src={Soles}
                width={40}
                height={35}
                className="h-7 w-14 object-cover rounded-lg"
              />
            </span>
          </li>
          <li className="flex gap-2 items-center bg-gray-200 py-1 px-2  rounded-lg w-fit">
            <span>
              <Image
                src={Dolar}
                width={40}
                height={35}
                className="h-7 w-14 object-cover rounded-lg"
              />
            </span>
          </li>
          <li className="flex gap-2 items-center max-lg:flex-col bg-gray-200 py-1 px-2  rounded-lg w-fit">
            <span>
              <Image
                src={Plin}
                width={30}
                height={30}
                className="w-7 h-7 object-cover rounded-lg"
              />
            </span>
            <span className="text-[13px] text-black font-bold">+51 986 296 366</span>
          </li>
          <li className="flex gap-2 items-center max-lg:flex-col bg-gray-200 py-1 px-2  rounded-lg w-fit">
            <span>
              <Image
                src={Yape}
                width={30}
                height={30}
                className="h-7 w-7 object-cover rounded-lg"
              />
            </span>
            <span className="text-[13px] text-black font-bold">+51 986 296 366</span>
          </li>

        </ul>
      </section>
      <section className="w-full h-auto py-10 bg-black">
        <Container>
          <h2 className='font-bold text-2xl lg:text-3xl text-white text-center font-Montserrat mb-10'>Solicita tu reserva con nosotros y un asesor especializado se contactará contigo.</h2>
          <AskForReservation />
        </Container>
      </section>
    </>
  )
}