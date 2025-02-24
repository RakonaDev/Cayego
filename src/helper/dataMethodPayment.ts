import Yape from '../assets/metodos_pago/yape.webp'
import Plin from '../assets/metodos_pago/plin.png'
import Tarjeta from '../assets/metodos_pago/tarjeta.jpeg'
import Credito from '../assets/metodos_pago/credito.jpg'
import Transferencia from '../assets/metodos_pago/transferencia.webp'
import Efectivo from '../assets/metodos_pago/efectivo.webp'
import { MethodPaymentInterface } from '../interfaces/MethodPaymentInterface'

export const dataMethodPayment: MethodPaymentInterface[] = [
  {
    url: Yape,
    method_name: 'Yape'
  },
  {
    url: Plin,
    method_name: 'Plin'
  },
  {
    url: Tarjeta,
    method_name: 'Tarjeta'
  },
  {
    url: Transferencia,
    method_name: 'Transferencia'
  },
  {
    url: Efectivo,
    method_name: 'Efectivo'
  },
  {
    url: Credito,
    method_name: 'Crédito'
  }
]