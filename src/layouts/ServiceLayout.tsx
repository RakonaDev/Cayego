import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { dataServices } from "../helper/dataServices"
import { Image } from "@unpic/react"
import { motion } from 'motion/react'
import { ServiceInterface } from "../interfaces/ServiceInterfaces"
import AskForReservation from "../components/utils/AskForReservation"
import Container from "../components/utils/Container"
import { FaCarAlt } from "react-icons/fa"
import { MdOutlineTimer } from "react-icons/md"
import { RiPoliceCarFill } from "react-icons/ri"
import Background from '../assets/inicio/background1.webp'
import RedirectToElement from "../logic/RedirectToElement"
import { dataMethodPayment } from "../helper/dataMethodPayment"
import { MethodCard } from "../components/utils/MethodCard"
import { dataSpace } from "../helper/dataSpace"
import TransportCard from "../components/utils/TransportCard"

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
        <header className="w-full h-[50dvh] overflow-hidden relative flex justify-center items-center">
          <Image
            src={serviceSelected.url_image}
            width={1440}
            height={980}
            className='w-full object-cover h-[50dvh] brightness-75 absolute top-0'
          />
          <div className="flex flex-col gap-5">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', duration: 1 }}
              className='font-bold font-clean_deco text-white z-20 text-2xl lg:text-4xl'
            >
              {serviceSelected.title}
            </motion.h1>
            <button onClick={() => RedirectToElement('reserva')} type="button" className="bg-redPrimary font-medium textl-lg text-white px-6 py-2 z-10 mx-auto rounded-lg">
              Quiero Reservar
            </button>
          </div>
        </header>
      </div>
      <section className='w-full'>
        <article className='w-full relative overflow-hidden py-20'>
          <Image
            src={Background}
            width={1440}
            height={1320}
            layout='constrained'
            className='w-full h-full object-cover absolute top-0'
            loading='lazy'
          />
          <Container>
            <div className='flex gap-5 justify-evenly z-30 relative flex-wrap'>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='font-clean_deco px-10 text-white py-5 min-w-[250px] max-w-[350px] w-full flex flex-col gap-5 items-center justify-center'
              >
                <RiPoliceCarFill size={80} color='#F22727' />
                <h2 className='font-clean_deco text-2xl font-bold'>SEGURIDAD</h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='font-clean_deco px-10 text-white py-5 min-w-[250px] max-w-[350px] w-full flex flex-col gap-5 items-center justify-center'
              >
                <MdOutlineTimer size={80} color='#F22727' />
                <h2 className='font-clean_deco text-2xl font-bold'>PUNTUALIDAD</h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className=' px-10 text-white py-5 min-w-[250px] max-w-[350px] w-full flex flex-col gap-5 items-center justify-center'
              >
                <FaCarAlt size={80} color='#F22727' />
                <h2 className='font-clean_deco text-2xl font-bold'>SERVICIO</h2>
              </motion.div>
            </div>
          </Container>
        </article>
      </section>
      <section className="w-full h-auto py-10 bg-white text-black">
        <Container>
          <div className="space-y-10">
            <h2 className="text-center font-bold text-3xl font-clean_deco text-redPrimary">De que trata este servicio?</h2>
            <p className="font-medium text-xl text-center">{serviceSelected.description}</p>
            <h2 className="text-center font-bold text-3xl font-clean_deco text-redPrimary">Métodos de Pago</h2>
            <div className="flex flex-wrap justify-evenly gap-5">
              {
                dataMethodPayment.map((method) => {
                  return (
                    <MethodCard method={method} />
                  )
                })
              }
            </div>
            <h2 className="text-center font-bold text-3xl font-clean_deco text-redPrimary">Nuestros Transportes Disponibles</h2>
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
      <section className="w-full h-auto py-10">
        <Container>
          <h2 className='font-bold text-3xl text-white text-center font-clean_deco mb-10'>Haga su reserva aquí mismo</h2>
          <AskForReservation />
        </Container>
      </section>
    </>
  )
}