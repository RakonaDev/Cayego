import { useContext } from 'react'
import { DialogContext } from '../../../../context/DialogContext'
import DeletePerson from '../../../../assets/delete-person.webp'
import { Image } from '@unpic/react'
import { usePanelDrivers } from '../../../../hooks/useDrivers'

export default function DeleteDriverID({ id }: { id: number }) {
  const { handleClose } = useContext(DialogContext)
  const { DeleteDriver } = usePanelDrivers()
  
  const CancelAction = () => {
    handleClose()
  }

  const EditAction = () => {
    DeleteDriver(id)
  }

  return (
    <div className='w-full'>
      <h1 className='text-center font-bold text-xl mt-10'>Estas seguro de eliminar este Conductor?</h1>
      <Image src={DeletePerson} width={350} height={350} alt='Imagen' className='mx-auto' />
      <section className='mt-16 flex justify-center gap-10'>
        <button
          type="button"
          className='px-8 py-2 bg-green-500 rounded-lg hover:bg-green-700 duration-500 transition-colors'
          onClick={EditAction}
        >
          Aceptar
        </button>

        <button
          type="button"
          className='px-8 py-2 bg-red-500 rounded-lg hover:bg-red-700 duration-500 transition-colors'
          onClick={CancelAction}
        >
          Cancelar
        </button>
      </section>
    </div>
  )
}
