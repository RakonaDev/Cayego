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
    space: 4
  },
  {
    url: Bus,
    name_car: 'Bus',
    space: 20
  },
  {
    url: Camioneta,
    name_car: 'Camioneta',
    space: 6
  },
  {
    url: Minivan,
    name_car: 'Minivan',
    space: 8
  },
  {
    url: Suv,
    name_car: 'Suv',
    space: 4
  },
]