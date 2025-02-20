import { Image } from "@unpic/react";
import Container from "../utils/Container";
import { BottomNavigation, Box, Button, Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoIosMail, IoMdHome } from "react-icons/io";
import { FaCarAlt, FaUsers, FaUserTie } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RedirectToPage } from "../../logic/RedirectToPage";
import { FiMenu } from "react-icons/fi";
import { SelectPage } from "../../logic/SelectPage";
import Logo from '../../assets/logo.png'
import { dataServices } from "../../helper/dataServices";
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";

export default function Header() {
  const [, setShowMenu] = useState(false);
  const [isTop, setIsTop] = useState(false)
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()
  const location = useLocation()
  const [value, setValue] = React.useState(0);

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
    <div>
      <header className="fixed z-50 top-0 w-full py-2 bg-white shadow-md shadow-gray-400">
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
                  <Button variant="text" className="mx-5 w-20 h-16 flex flex-col" onClick={() => LinkFunction('/')}>
                    <IoMdHome size={41} color="black" />
                    <p className="text-black font-medium">Inicio</p>
                  </Button>
                  <Button variant="text" className="mx-5 w-20 h-16 flex flex-col" onClick={() => LinkFunction('/nosotros')}>
                    <FaUsers size={40} color="black" />
                    <p className="text-black font-medium">Nosotros</p>
                  </Button>
                  <div className="group">
                    {/*<BottomNavigationAction label="Servicios" icon={<FaCarAlt size={45} color="black" />} />*/}
                    <Button variant="text" className="mx-5 w-20 h-16 flex flex-col" onClick={() => LinkFunction('/servicios')}>
                      <FaCarAlt size={40} color="black" />
                      <p className="text-black font-medium">Servicios</p>
                    </Button>
                    <motion.div key={'wwwww'} onMouseOver={() => setShowMenu(true)} onMouseOut={() => setShowMenu(false)} className="w-fit px-8 py-5 absolute top-[100%] h-auto  rounded-xl right-12">
                      <div className="bg-white px-7 py-5 rounded-xl space-y-2 z-20 group-hover:translate-x-0 group-hover:opacity-100 translate-x-[500%] opacity-0 duration-500 transition-all">
                        {
                          dataServices.map((service) => {
                            return (
                              <Link to={`/servicios/${service.id}`} key={service.id} onClick={toggleDrawer(false)}>
                                <div className="flex gap-2 items-center">
                                  <span className="font-medium font-Montserrat">{service.title}</span>
                                </div>
                              </Link>
                            )
                          })
                        }
                      </div>
                    </motion.div>
                  </div>
                  <Button variant="text" className="mx-5 w-20 h-16 flex flex-col" onClick={() => LinkFunction('/contacto')}>
                    <IoIosMail  size={40} color="black" />
                    <p className="text-black font-medium">Contacto</p>
                  </Button>
                  <Button variant="text" className="mx-5 w-20 h-16 flex flex-col" onClick={() => LinkFunction('/login')}>
                    <FaUserTie size={40} color="black" />
                    <p className="text-black font-medium">Intranet</p>
                  </Button>
                  
                </BottomNavigation>
                <AnimatePresence>

                </AnimatePresence>
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
                <nav className="flex flex-col gap-10 max-w-[400px] w-full px-20 py-10 text-lg font-medium">
                  <Link to='/' onClick={toggleDrawer(false)}>Inicio</Link>
                  <Link to='/nosotros' onClick={toggleDrawer(false)}>Nosotros</Link>
                  <Link to='/servicios' onClick={toggleDrawer(false)}>Servicios</Link>
                  <Link to='/contacto' onClick={toggleDrawer(false)}>Contacto</Link>
                  <Link to='/login' onClick={toggleDrawer(false)}>Intranet</Link>
                </nav>
              </Drawer>
            </nav>
          </div>
        </Container>
      </header>
    </div>
  )
}