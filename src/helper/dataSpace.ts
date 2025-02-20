import Auto from '../assets/cars/auto.webp'
import Bus from '../assets/cars/bus.webp'
import Camioneta from '../assets/cars/camioneta.webp'
import Minivan from '../assets/cars/minivan.webp'
import Suv from '../assets/cars/suv.webp'

import { SpaceInterface } from "../interfaces/SpaceInterface";

export const dataSpace: SpaceInterface[] = [
  {
    url: Auto,
    name_car: 'Auto',
    space: 4,
    description: 'Ideal para viajes cortos y cómodos en la ciudad. Perfecto para parejas o familias pequeñas.'
  },
  {
    url: Suv,
    name_car: 'SUV',
    space: 4,
    description: 'Vehículo versátil con mayor espacio y comodidad. Perfecto para viajes largos y terrenos variados.'
  },
  {
    url: Camioneta,
    name_car: 'Camioneta',
    space: 6,
    description: 'Espacio adicional para pasajeros y equipaje. Ideal para grupos medianos y viajes de aventura.'
  },
  {
    url: Minivan,
    name_car: 'Minivan',
    space: 8,
    description: 'Perfecta para familias grandes o grupos que necesitan mucho espacio. Comodidad y versatilidad en un solo vehículo.'
  },
  {
    url: Bus,
    name_car: 'Bus',
    space: 20,
    description: 'La mejor opción para grupos grandes. Amplio espacio y comodidad para viajes largos y eventos especiales.'
  },
];