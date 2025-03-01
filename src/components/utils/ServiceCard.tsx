import { ServiceInterface } from "../../interfaces/ServiceInterfaces";
import { motion } from 'motion/react'
import { Link } from "react-router-dom";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaShieldAlt } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { imagesUrl } from "../../helper/apiAuth";
import { useLanguageStore } from "../../store/useLanguageStore";

export default function ServiceCard({ service }: { service: ServiceInterface }) {
  const { language } = useLanguageStore()
  return (
    <article className="w-full lg:flex gap-10 lg:space-y-0 space-y-5 justify-center group cursor-default p-10 hover:bg-[#303030] hover:text-white hover:rounded-2xl hover:shadow-lg hover:shadow-gray-700 transition-all duration-500">

      {
        (service.id ? service.id : 0) % 2 === 0 ? (<>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 overflow-hidden rounded-2xl"
          >
            <img
            title="w"
              src={`${imagesUrl}servicios/${service.url_image}`}
              width={800}
              height={800}
              className="w-full object-cover group-hover:scale-110 transition-all duration-300"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col justify-center items-center space-y-10"
          >
            <h3 className="font-bold lg:text-start text-center text-2xl text-redPrimary font-Montserrat lg:font-clean_deco">{language === 'en' ? service.name_en : service.name}</h3>
            <p className="text-lg lg:text-start text-center">{language === 'en' ? service.description_en : service.description}</p>
            <div className="w-full flex justify-center gap-4">
              <p className="flex gap-2 items-center">
                <span className="text-redPrimary"><FaShieldAlt size={25} /></span>
                <span className="text-black group-hover:text-white font-Montserrat">Seguridad</span>
              </p>
              <p> / </p>
              <p className="flex gap-2 items-center">
                <span className="text-redPrimary"><GrLike size={25} /></span>
                <span className="text-black group-hover:text-white font-Montserrat">
                  Confianza
                </span>
              </p>
            </div>
            <Link to={`/servicios/${service.id}`} className="text-white bg-redPrimary font-medium px-6 py-2 w-fit flex gap-2 items-center rounded-lg text-lg">
              <span><IoMdInformationCircleOutline size={30} /></span> <span>Más información</span>
            </Link>
          </motion.div>
        </>) : (
          <>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex flex-col justify-center items-center space-y-10"
            >
              <h3 className="font-bold lg:text-start text-center text-2xl text-redPrimary font-Montserrat lg:font-clean_deco">{language === 'en' ? service.name_en : service.name}</h3>
              <p className="text-lg lg:text-start text-center">{language === 'en' ? service.description_en : service.description}</p>
              <div className="w-full flex justify-center gap-4">
                <p className="flex gap-2 items-center">
                  <span className="text-redPrimary"><FaShieldAlt size={25} /></span>
                  <span className="text-black group-hover:text-white font-Montserrat">Seguridad</span>
                </p>
                <p> / </p>
                <p className="flex gap-2 items-center">
                  <span className="text-redPrimary"><GrLike size={25} /></span>
                  <span className="text-black group-hover:text-white font-Montserrat">
                    Confianza
                  </span>
                </p>
              </div>
              <Link to={`/servicios/${service.id}`} className="text-white bg-redPrimary font-medium px-6 py-2 w-fit flex gap-2 items-center rounded-lg text-lg">
                <span><IoMdInformationCircleOutline size={30} /></span> <span>Más información</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 overflow-hidden rounded-2xl"
            >
              <img
                title="e"
                src={`${imagesUrl}servicios/${service.url_image}`}
                width={800}
                height={800}
                className="w-full object-cover group-hover:scale-110 transition-all duration-300"
                loading="lazy"
              />
            </motion.div>
          </>
        )
      }
    </article>
  )
}