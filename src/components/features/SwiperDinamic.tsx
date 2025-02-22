import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperPropsInterface } from "../../interfaces/SwiperDinamicInterface";
import 'swiper/swiper-bundle.css'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Image } from "@unpic/react";
import { motion } from "motion/react";

export default function SwiperDinamic({ data }: { data: SwiperPropsInterface[] }) {
  return (
    <div className="w-full h-dvh">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
      >
        {
          data.map((dataItem: SwiperPropsInterface, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div className="w-full h-dvh overflow-hidden relative flex items-center justify-center">
                  <Image
                    src={dataItem.image_url}
                    width={1440}
                    height={980}
                    layout="constrained"
                    className="w-full h-dvh brightness-75 object-cover object-top absolute top-0"
                    loading="lazy"
                  />
                  {dataItem.text && (

                    <motion.h1
                      initial={{ opacity: 0, y: 100 }}
                      transition={{ type: 'spring', duration: 1 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="font-clean_deco text-xl md:text-xl lg:text-3xl text-center space-x-1 text-white font-bold z-20"
                    >
                      {dataItem.text}
                    </motion.h1>

                  )}
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}