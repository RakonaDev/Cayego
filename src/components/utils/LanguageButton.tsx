import { Image } from "@unpic/react";
import { useLanguageStore } from "../../store/useLanguageStore";
import React from "react";
import { Button } from "@mui/material";
import Spanish from '../../assets/flags/flag_peru.svg'
import America from '../../assets/flags/flag_america.webp'
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";

export default function LanguageButton() {
  const [open, setOpen] = React.useState(false);
  const { language, setLanguage } = useLanguageStore()

  const handleOpen = () => {
    setOpen(!open);
  };

  const chooseLanguage = (language: string) => {
    setLanguage(language)
    setOpen(false)
  }

  return (
    <div>
      <Button variant="text" className="mx-5 w-20 h-[4rem] flex items-center relative gap-3" onClick={handleOpen}>
        <span>
          <Image
            src={language === 'es' ? Spanish : America}
            width={60}
            height={60}
            layout="constrained"
          />
        </span>
        <span>
          <IoIosArrowDown color="black" size={25} />
        </span>
      </Button>
      <AnimatePresence>
        {
          open && (
            <motion.div
              key='modal'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className="absolute top-[90%] right-7 p-3 px-5 bg-white text-white rounded-xl shadow-md shadow-black/80 flex flex-col gap-2 items-center"
            >
              <button
                type="button"
                onClick={() => chooseLanguage('es')}
                title="spanish"
                className="hover:bg-gray-300"
              >
                <Image
                  src={Spanish}
                  width={40}
                  height={40}
                  layout="constrained"
                />
              </button>
              <button
                type="button"
                onClick={() => chooseLanguage('en')}
                title="english"
              >
                <Image
                  src={America}
                  width={40}
                  height={40}
                  layout="constrained"
                />
              </button>
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  )
}
