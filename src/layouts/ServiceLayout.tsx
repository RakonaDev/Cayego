import { useParams } from "react-router-dom"
import { Image } from "@unpic/react"
import { motion } from 'motion/react'
import AskForReservation from "../components/utils/AskForReservation"
import Container from "../components/utils/Container"
import RedirectToElement from "../logic/RedirectToElement"
import { dataSpace } from "../helper/dataSpace"
import TransportCard from "../components/utils/TransportCard"
import Yape from '../assets/metodos_pago/yape.webp'
import Plin from '../assets/metodos_pago/plin.png'
import Visa from '../assets/metodos_pago/visa.jpeg'
import Mastercard from '../assets/metodos_pago/mastercard-removebg-preview.png'
import American from '../assets/metodos_pago/american.png'
import Dinners from '../assets/metodos_pago/dinners.png'
import Soles from '../assets/metodos_pago/soles.png'
import Dolar from '../assets/metodos_pago/dolar.png'
import { IoMdInformationCircleOutline } from "react-icons/io"
/*import { dataServices } from "../helper/dataServices"*/
import { useSelectedService } from "../hooks/useSelectedService"
import { useServiceSelected } from "../store/useServiceSelected"
import { useEffect } from "react"
import { imagesUrl } from "../helper/apiAuth"
import { useLanguageStore } from "../store/useLanguageStore"

export default function ServiceLayout() {
  const { setServiceSelected } = useServiceSelected()
  const { servicesSelected } = useSelectedService()
  const { language } = useLanguageStore()
  const { id } = useParams()
  useEffect(() => {
    setServiceSelected(Number(id))
  }, [id])
  /*
  const [serviceSelected, setServiceSelected] = useState<ServiceInterface>({
    description: '',
    name_en: '',
    id: 0,
    name: '',
    description_en: '',
    url_image: '',
  })
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
    const Data = dataServices.filter((item) => item.id === Number(id))
    setServiceSelected(Data[0])
  }, [id])
  */
  return (
    <>
      <div className="h-auto w-full">
        <header className="w-full h-dvh lg:h-[65dvh] overflow-hidden relative flex justify-center items-center">
          <Image
            src={`${imagesUrl}servicios/${servicesSelected?.url_image || ''}`}
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
              {language === 'es' ? servicesSelected?.name : servicesSelected?.name_en}
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
            <p className="font-medium text-md lg:text-base text-center">{language === 'es' ? servicesSelected?.description : servicesSelected?.description_en}</p>
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
        <Container>
          <h2 className="text-2xl text-center font-bold font-Montserrat">Métodos de Pago</h2>
          <ul>
            <li className='flex gap-2 items-center text-sm lg:text-md text-redPrimary font-medium'><span><IoMdInformationCircleOutline size={30} /></span> <span className='text-black'>Emitimos boletas y facturas</span></li>
          </ul>
          <ul className="flex gap-2 flex-wrap justify-evenly w-fit mx-auto mt-5">
            <li className="flex gap-2 items-center  bg-gray-200 py-1 px-2  rounded-lg w-fit h-fit">
              <span>
                <Image
                  src={American}
                  width={40}
                  height={35}
                  className="h-10 w-auto object-cover"
                />
              </span>
            </li>
            <li className="flex gap-2 items-center bg-gray-200 py-1 px-2  rounded-lg w-fit h-fit">
              <span>
                <Image
                  src={Mastercard}
                  width={40}
                  height={35}
                  className="h-10 w-auto object-cover rounded-lg"
                />
              </span>
            </li>
            <li className="flex gap-2 items-center bg-gray-200 py-1 px-2  rounded-lg w-fit h-fit">
              <span>
                <Image
                  src={Visa}
                  width={40}
                  height={35}
                  className="h-9 w-14 object-cover rounded-lg"
                />
              </span>
            </li>
            <li className="flex gap-2 items-center bg-gray-200 py-1 px-2  rounded-lg w-fit h-fit">
              <span>
                <Image
                  src={Dinners}
                  width={40}
                  height={35}
                  className="h-9 w-auto object-cover rounded-lg"
                />
              </span>
            </li>
            <li className="flex gap-2 items-center bg-gray-200 py-1 px-2  rounded-lg w-fit h-fit">
              <span>
                <Image
                  src={Soles}
                  width={40}
                  height={35}
                  className="h-9 w-auto object-cover rounded-lg"
                />
              </span>
            </li>
            <li className="flex gap-2 items-center bg-gray-200 py-1 px-2  rounded-lg w-fit h-fit">
              <span>
                <Image
                  src={Dolar}
                  width={40}
                  height={35}
                  className="h-9 w-auto object-cover rounded-lg"
                />
              </span>
            </li>
            <li className="flex gap-2 items-center  bg-gray-200 py-1 px-2  rounded-lg w-fit h-fit">
              <div className="flex gap-2">
                <span>
                  <Image
                    src={Plin}
                    width={30}
                    height={30}
                    className="w-9 h-9 object-cover rounded-lg"
                  />
                  <span>
                    <Image
                      src={Yape}
                      width={40}
                      height={40}
                      className="h-9 w-auto object-cover rounded-lg"
                    />
                  </span>
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[13px] text-black font-bold">+51 986 296 366</span>
              </div>
            </li>
            <li className="flex gap-2 items-center max-lg:flex-col bg-gray-200 py-1 px-2  rounded-lg w-fit h-fit">
              <span className="text-[13px] text-black font-bold">Transferencia Bancaria</span>
            </li>
            <li className="flex gap-2 items-center max-lg:flex-col bg-gray-200 py-1 px-2  rounded-lg w-fit h-fit">
              <span className="text-[13px] text-black font-bold">Pago en Línea</span>
            </li>
            <li className="flex gap-2 items-center max-lg:flex-col bg-gray-200 py-1 px-2  rounded-lg w-fit h-fit">
              <span className="text-[13px] text-black font-bold">Pago por QR</span>
            </li>
          </ul>
        </Container>
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