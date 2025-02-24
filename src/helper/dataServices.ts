import { ServiceInterface } from "../interfaces/ServiceInterfaces";
import Service1 from '../assets/services/service1.webp'
import Service2 from '../assets/services/service2.webp'
import Service3 from '../assets/services/service3.webp'
import Service4 from '../assets/services/service4.webp'
import Service5 from '../assets/services/service5.webp'
import Service6 from '../assets/services/service6.webp'
import Service7 from '../assets/services/service7.webp'

export const dataServices: ServiceInterface[] = [
  {
    id: 1,
    name: 'Servicio al Aeropuerto',
    description: 'Es un servicio de transporte diseñado para trasladar pasajeros desde y hacia el aeropuerto de manera cómoda, segura y puntual.',
    url_image: Service1,
    name_en: 'w',
    description_en: ''
  },
  {
    id: 2,
    name: 'Servicio Particular',
    description: 'Es una opción de movilidad personalizada que ofrece traslados cómodos, seguros y eficientes para pasajeros que requieren un viaje exclusivo. A diferencia del transporte público o compartido, este servicio se adapta a las necesidades específicas del cliente, brindando mayor flexibilidad y confort.',
    url_image: Service2,
    name_en: 'w',
    description_en: ''
  }, 
  {
    id: 3,
    name: 'Servicio Corporativo',
    description: 'Es una solución de movilidad diseñada para empresas que buscan trasladar a sus empleados, ejecutivos o clientes de manera eficiente, segura y profesional. Este servicio se adapta a las necesidades empresariales, garantizando puntualidad, comodidad y una imagen corporativa adecuada.',
    url_image: Service3,
    name_en: 'w',
    description_en: ''
  },
  {
    id: 4,
    name: 'Servicio Por Horas',
    description: 'Es una opción flexible y personalizada que permite a los pasajeros disponer de un vehículo con conductor por un período determinado, adaptándose a sus necesidades de movilidad sin restricciones de rutas o destinos fijos.',
    url_image: Service4,
    name_en: 'w',
    description_en: ''
  },
  {
    id: 5,
    name: 'Servicio Courier',
    description: 'Nuestro servicio de Courier está diseñado para ofrecerte soluciones de envío rápidas, seguras y confiables, adaptadas a tus necesidades específicas. Ya sea que necesites enviar documentos importantes, paquetes urgentes o mercancías delicadas, nuestro equipo de profesionales se encarga de que tus envíos lleguen a su destino en tiempo récord y en perfectas condiciones.',
    url_image: Service5,
    name_en: 'w',
    description_en: ''
  },
  {
    id: 6,
    name: 'Servicio Pet Friendly',
    description: '¿Amas a tu mascota tanto como a un miembro más de tu familia? ¡Nosotros también! Por eso, hemos creado un espacio donde tu compañero peludo es el invitado de honor. Nuestro servicio Pet Friendly no es solo un lugar que admite mascotas, es un verdadero hogar lejos de casa, diseñado para el bienestar y la felicidad de tu amigo de cuatro patas.',
    url_image: Service6,
    name_en: 'w',
    description_en: ''
  },
  {
    id: 7,
    name: 'Servicio de Turismo + Guía',
    description: '¿Sueñas con explorar destinos fascinantes y sumergirte en culturas vibrantes? Nuestro servicio de turismo con guía te ofrece la oportunidad de vivir experiencias inolvidables, diseñadas para despertar tus sentidos y enriquecer tu conocimiento.',
    url_image: Service7,
    name_en: 'w',
    description_en: ''
  },
]