import { Pagination, Stack } from "@mui/material";
import { HeadTablePC } from "../components/utils/HeadTablePC";
import { TableTitle } from "../interfaces/TablesInterface";
import { AddDriver } from "../components/features/modals/drivers/AddDriver";
import { DialogContext } from "../context/DialogContext";
import React from "react";
import { usePanelDrivers } from "../hooks/useDrivers";
import { useDriverStore } from "../store/useDriverStore";

const TablesTiles: TableTitle[] = [
  { nombre: "Código", className: "min-w-[100px] lg:col-span-1" },
  { nombre: "Nombre", className: "min-w-[100px] lg:col-span-2" },
  { nombre: 'Nº de Cuenta', className: "min-w-[100px] lg:col-span-2" },
  { nombre: "Email", className: "min-w-[150px] lg:col-span-2" },
  { nombre: "Imagen", className: "min-w-[200px] lg:col-span-2" },
];

export default function PanelInformacion() {
  const { RenderListDriver, totalPages, nextPage } = usePanelDrivers()
  const { currentPage } = useDriverStore()
  const { handleClickOpen } = React.useContext(DialogContext)

  const handleClick = () => {
    handleClickOpen({ title: 'Agrega tu servicio', content: <AddDriver /> })
  }

  return (
    <div className="flex min-h-dvh">
      <div className="w-1/4 min-h-dvh max-lg:hidden"></div>
      <main className="w-full lg:w-3/4 h-min-dvh py-5 px-5 space-y-7 bg-[#222529] text-white">
        <div className='flex justify-between items-center bg-[#101010] px-5 py-3 rounded-xl'>
          <h2 className="text-white font-bold text-xl">Panel de Conductores</h2>
          <div>
            <button onClick={handleClick} className='bg-redPrimary text-sm text-white font-medium px-4 py-2 rounded-lg'>Ingresar un Conductor</button>
          </div>
        </div>
        <article className="flex flex-wrap mt-3 gap-10 bg-[#101010] w-full p-5 rounded-xl">
          <HeadTablePC titlesTable={TablesTiles} />
          <div className='w-full min-h-[45dvh] bg-white-main'>
            <RenderListDriver />
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