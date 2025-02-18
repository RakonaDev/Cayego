import { Location } from "react-router-dom"

export const SelectPage = (location: Location<any> ,setValue: React.Dispatch<React.SetStateAction<number>>) => {
  if (location.pathname === '/') {
    setValue(0)
  }
  else if ( location.pathname === '/nosotros' ) {
    setValue(1)
  }
  else if ( location.pathname.includes('/servicios') ) {
    setValue(2)
  }
  else if ( location.pathname === '/contacto' ) {
    setValue(3)
  }
  else if ( location.pathname === '/login' ) {
    setValue(4)
  }
}