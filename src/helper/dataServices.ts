import { ServiceInterface } from "../interfaces/ServiceInterfaces";
import Service1 from '../assets/services/service1.webp'
import Service2 from '../assets/services/service2.webp'
import Service3 from '../assets/services/service3.webp'
import Service4 from '../assets/services/service4.webp'

export const dataServices: ServiceInterface[] = [
  {
    id: 1,
    title: 'Servicio al aeropuerto',
    description: 'Es un servicio de transporte diseñado para trasladar pasajeros desde y hacia el aeropuerto de manera cómoda, segura y puntual.',
    url_image: Service1
  },
  {
    id: 2,
    title: 'Servicio Particular',
    description: 'Es una opción de movilidad personalizada que ofrece traslados cómodos, seguros y eficientes para pasajeros que requieren un viaje exclusivo. A diferencia del transporte público o compartido, este servicio se adapta a las necesidades específicas del cliente, brindando mayor flexibilidad y confort.',
    url_image: Service2
  }, 
  {
    id: 3,
    title: 'Servicio Coorporativo',
    description: 'Es una solución de movilidad diseñada para empresas que buscan trasladar a sus empleados, ejecutivos o clientes de manera eficiente, segura y profesional. Este servicio se adapta a las necesidades empresariales, garantizando puntualidad, comodidad y una imagen corporativa adecuada.',
    url_image: Service3
  },
  {
    id: 4,
    title: 'Servicio Por horas',
    description: 'Es una opción flexible y personalizada que permite a los pasajeros disponer de un vehículo con conductor por un período determinado, adaptándose a sus necesidades de movilidad sin restricciones de rutas o destinos fijos.',
    url_image: Service4
  }
]