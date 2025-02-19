import { NavigateFunction } from "react-router-dom";

export const RedirectToPage = (navigate: NavigateFunction, newValue: number) => {
  
  if (newValue === 0) {
    navigate('/')
  } else if (newValue === 1) {
    navigate('/nosotros')
  } else if (newValue === 2) {
    navigate('/servicios')
  } else if (newValue === 3) {
    navigate('/contacto')
  } else if (newValue === 4) {
    navigate('/login')
  }
}