import { Image } from "@unpic/react";
import Container from "../utils/Container";
import { BottomNavigation, Box, Button, Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward, IoIosMail, IoMdHome } from "react-icons/io";
import { FaCarAlt, FaHome, FaUsers, FaUserTie } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RedirectToPage } from "../../logic/RedirectToPage";
import { FiMenu } from "react-icons/fi";
import { SelectPage } from "../../logic/SelectPage";
import Logo from '../../assets/logo.png'
import { dataServices } from "../../helper/dataServices";
import { motion } from "framer-motion";
import { FaArrowRight, FaPhone } from "react-icons/fa6";
import LanguageButton from "../utils/LanguageButton";
import { useServices } from "../../hooks/useServices";

export default function Header() {
  const [isTop, setIsTop] = useState(false)
  const [open, setOpen] = React.useState(false);
  const [expand, setExpand] = React.useState(false);
  const { AllServices } = useServices()
  const navigate = useNavigate()
  const location = useLocation()
  const [value, setValue] = React.useState(0);

  const handleAccordion = () => {
    setExpand(!expand)
  }

  const LinkFunction = (path: string) => {
    navigate(path)
  }

  useEffect(() => {
    SelectPage(location, setValue)

    if (window.scrollY > 10) {
      setIsTop(true)
    } else if (window.scrollY <= 10) {
      setIsTop(false)
    }
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        if (isTop) return

        setIsTop(true)
      } else if (window.scrollY <= 10) {
        if (isTop) return

        setIsTop(false)
      }
    })
  }, [])
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <div className="fixed z-50 top-0 w-full">
      <header className="w-full py-2 bg-black">
        <Container>
          <div className="flex justify-end text-white">
            <a href="tel:+51986296366" className="w-fit h-fit flex items-center gap-2">
              <span><FaPhone /></span>
              <span className="text-xs font-Montserrat tracking-wider">Teléfono: +51 986 296 366</span>
            </a>
          </div>
        </Container>
      </header>
      <header className="w-full py-2 bg-white shadow-md shadow-gray-400">
        <Container>
          <div className="flex justify-between items-center">
            <div className="w-fit h-fit">
              <Image
                src={Logo}
                width={130}
                height={130}
                layout="constrained"
                className={`${isTop ? 'w-20' : 'w-32'} duration-700 transition-all`}
              />
            </div>
            <nav className="hidden lg:flex gap-5 text-xl items-center">
              <Box sx={{ maxWidth: '800px', width: '550px' }}>
                <BottomNavigation
                  showLabels
                  value={value}
                  className="gap-6 items-center"
                  onChange={(event, newValue: number) => {
                    console.log(event)
                    setValue(newValue);
                    RedirectToPage(navigate, newValue)
                  }}
                >
                  {/**onMouseOver={() => setShowMenu(true)} onMouseOut={() => setShowMenu(false)} */}
                  <Button variant="text" className="mx-5 w-20 h-[4.1rem] flex flex-col" onClick={() => LinkFunction('/')}>
                    <IoMdHome size={41} color="black" />
                    <p className="text-black font-medium">Inicio</p>
                  </Button>
                  <Button variant="text" className="mx-5 w-20 h-[4.1rem] flex flex-col  gap-1" onClick={() => LinkFunction('/nosotros')}>
                    <FaUsers size={40} color="black" />
                    <p className="text-black font-medium">Nosotros</p>
                  </Button>
                  <div className="group">
                    {/*<BottomNavigationAction label="Servicios" icon={<FaCarAlt size={45} color="black" />} />*/}
                    <Button variant="text" className="mx-5 w-36 h-16 flex gap-2 items-center" onClick={() => LinkFunction('/servicios')}>
                      <div className="flex flex-col items-center">
                        <FaCarAlt size={30} color="black" />
                        <p className="text-black font-medium">Servicios</p>
                      </div>
                      <IoIosArrowDown size={23} color="black" />
                    </Button>
                    <motion.div className="w-fit px-8 py-5 absolute top-[100%] h-auto group-hover:opacity-100 -right-[200%] opacity-0 duration-500 transition-all  rounded-xl group-hover:right-28" key={'wwwww'} >
                      <div className="bg-white px-7 shadow-md shadow-black/30 py-5 rounded-xl space-y-2 ">
                        {
                          AllServices?.map((service) => {
                            return (
                              <Link to={`/servicios/${service.id}`} key={service.id} onClick={toggleDrawer(false)}>
                                <div className="flex gap-2 items-center">
                                  <span><IoIosArrowForward /></span>
                                  <span className="font-medium text-sm font-Montserrat">{service.name}</span>
                                </div>
                                <hr className="border-[1px] border-black my-1"></hr>
                              </Link>
                            )
                          })

                        }
                      </div>
                    </motion.div>
                  </div>
                  <Button variant="text" className="mx-5 w-20 h-[4.1rem] flex flex-col" onClick={() => LinkFunction('/contacto')}>
                    <IoIosMail size={40} color="black" />
                    <p className="text-black font-medium">Contacto</p>
                  </Button>
                  <Button variant="text" className="mx-5 w-20 h-[4.1rem] flex flex-col" onClick={() => LinkFunction('/login')}>
                    <FaUserTie size={40} color="black" />
                    <p className="text-black font-medium">Intranet</p>
                  </Button>
                  <div className="px-5">
                    <LanguageButton />
                  </div>
                </BottomNavigation>
              </Box>
            </nav>
            <nav className="lg:hidden">
              <Button onClick={toggleDrawer(true)}>
                <FiMenu className="text-black" size={35} />
              </Button>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                <Image
                  src={Logo}
                  width={130}
                  height={130}
                  layout="constrained"
                  className="mx-auto mt-10"
                />
                <nav className="flex flex-col gap-5 max-w-[300px] ps-16 w-full px-20 py-10 text-lg font-medium space-y-5">
                  <Link to='/' onClick={toggleDrawer(false)} className="w-fit flex gap-2 items-center"><span> <FaHome size={20} /></span> <span>Inicio</span></Link>
                  <Link to='/nosotros' onClick={toggleDrawer(false)} className="w-fit flex gap-2 items-center"> <span><FaUsers size={20} /></span> <span>Nosotros</span></Link>
                  <div className="flex flex-col">
                    <button type="button" onClick={handleAccordion} className="w-fit flex gap-2 items-center justify-center"> <span><FaCarAlt size={20} /></span> <span>Servicios</span> <span><IoIosArrowDown size={20} /></span>
                    </button>
                    <motion.div layout layoutId="www" transition={{ duration: 0.5 }} className={`${expand ? 'h-auto' : 'h-0'} overflow-hidden`}>
                      {
                        dataServices.map((service) => {
                          return (
                            <Link to={`/servicios/${service.id}`} onClick={toggleDrawer(false)} className="flex gap-2 items-center"> <span><FaArrowRight size={20} /></span> <span className="text-black">{service.name}</span></Link>
                          )
                        })
                      }
                    </motion.div>
                  </div>
                  <Link to='/contacto' onClick={toggleDrawer(false)} className="w-fit flex gap-2 items-center"><span><IoIosMail size={20} /></span> <span>Contacto</span></Link>
                  <Link to='/login' onClick={toggleDrawer(false)} className="w-fit flex gap-2 items-center"> <span><FaUserTie size={20} /></span> <span>Intranet</span></Link>
                </nav>
              </Drawer>
            </nav>
          </div>
        </Container>
      </header>
    </div>
  )
}