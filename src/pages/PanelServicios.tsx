import * as React from 'react';
/*
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
*/
import { HeadTablePC } from '../components/utils/HeadTablePC';
import { TableTitle } from '../interfaces/TablesInterface';
import { DialogContext } from '../context/DialogContext';
import { AddService } from '../components/features/modals/servicios/AddService';
import { usePanelServices } from '../hooks/usePanelServices';
import { useServiceStore } from '../store/useServiceStore';
import { Pagination, Stack } from '@mui/material';

const TablesTiles: TableTitle[] = [
  { nombre: "Nombre", className: "min-w-[100px] lg:col-span-3" },
  { nombre: "Descripción", className: "min-w-[150px] lg:col-span-3" },
  { nombre: "Imagen", className: "min-w-[200px] lg:col-span-3" },
];


export default function PanelServicios() {
  const { RenderListServices, totalPages, nextPage } = usePanelServices()
  const { currentPage } = useServiceStore()
  const { handleClickOpen } = React.useContext(DialogContext)
 
  const handleClick = () => {
    handleClickOpen({title: 'Agrega tu servicio', content:<AddService />})
  }

  return (
    <div className="flex min-h-dvh">
      <div className="w-1/4 h-dvh"></div>
      <main className="w-3/4 min-h-dvh py-5 px-5 space-y-7 bg-[#222529] text-white">
        <div className='flex justify-between items-center bg-[#101010] px-5 py-3 rounded-xl'>
          <h2 className="text-white font-bold text-xl">Panel de Servicios</h2>
          <div>
            <button onClick={handleClick} className='bg-redPrimary text-sm text-white font-medium px-4 py-2 rounded-lg'>Ingresar Servicio</button>
          </div>
        </div>
        <article className="flex flex-wrap mt-3 gap-10 bg-[#101010] w-full p-5 rounded-xl">
          <HeadTablePC titlesTable={TablesTiles} />
          <div className='w-full min-h-[45dvh] bg-white-main'>
          <RenderListServices />
        </div>
        <div className='w-full flex justify-center pt-5'>
          <Stack spacing={2}>
            <Pagination sx={{ '.MuiPaginationItem-root': { color: 'white' } }} count={totalPages} page={currentPage} onChange={nextPage} />
          </Stack>
        </div>
        </article>
      </main>
    </div>
  )
}