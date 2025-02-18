import { Image } from "@unpic/react";
import Container from "../utils/Container";
import { BottomNavigation, BottomNavigationAction, Box, Button, Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoIosMail, IoMdHome } from "react-icons/io";
import { FaCarAlt, FaUsers, FaUserTie } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RedirectToPage } from "../../logic/RedirectToPage";
import { FiMenu } from "react-icons/fi";
import { SelectPage } from "../../logic/SelectPage";

export default function Header() {
  const [isTop, setIsTop] = useState(false)
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()
  const location = useLocation()
  const [value, setValue] = React.useState(0);
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
                src="./logo.png"
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
                  onChange={(event, newValue: number) => {
                    console.log(event)
                    setValue(newValue);
                    RedirectToPage(navigate, newValue)
                  }}
                >
                  <BottomNavigationAction label="Inicio" icon={<IoMdHome size={45} color="black" />} />
                  <BottomNavigationAction label="Nosotros" icon={<FaUsers size={45} color="black" />} />
                  <BottomNavigationAction label="Servicios" icon={<FaCarAlt size={45} color="black" />} />
                  <BottomNavigationAction label="Contacto" icon={<IoIosMail size={45} color="black" />} />
                  <BottomNavigationAction label="Intranet" icon={<FaUserTie size={45} color="black" />} />
                </BottomNavigation>
              </Box>
            </nav>
            <nav className="lg:hidden">
              <Button onClick={toggleDrawer(true)}>
                <FiMenu className="text-black" size={35} />
              </Button>
              <Drawer open={open} onClose={toggleDrawer(false)}>
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