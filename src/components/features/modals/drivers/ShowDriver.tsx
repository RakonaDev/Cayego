import { Image } from "@unpic/react";
import { parseToLocalTime } from "../../../../logic/parseToLocalTime";
import { DriverInterface } from "../../../../interfaces/DriversInterface";
import { imagesUrl } from "../../../../helper/apiAuth";

export function ShowDriver({ driver }: { driver: DriverInterface }) {

  return (
    <div className="w-full space-y-3">
      <div className="w-full flex max-lg:flex-col gap-5">
        <div className="w-full lg:w-1/2">
          <p className="font-bold">Nombre Completo del Conductor: </p>
          <p>{driver.name}</p>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="font-bold">Dni del Conductor: </p>
          <p>{driver.dni}</p>
        </div>
      </div>
      <div className="w-full flex gap-2 max-lg:flex-col">
        <div className="w-full lg:w-1/2">
          <p className="font-bold">Email del Conductor: </p>
          <p>{driver.email}</p>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="font-bold">Teléfono del Conductor: </p>
          <p>{driver.phone}</p>
        </div>
      </div>
      <div className="w-full flex gap-2 max-lg:flex-col">
        <div className="w-full lg:w-1/2">
          <p className="font-bold">Número de Cuenta del Conductor: </p>
          <p>{driver.account_bank}</p>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="font-bold">Fecha de Aficiliación del Conductor: </p>
          <p>{driver.date_afiliate}</p>
        </div>
      </div>
      <div className="w-full flex gap-2 max-lg:flex-col">
        <div className="w-full">
          <p className="font-bold">Ubicación del Conductor: </p>
          <p>{driver.address}</p>
        </div>
      </div>
      <div className="w-full flex max-lg:flex-col gap-2">
        <div className="w-1/2">
          <p className="font-bold">Creación del Conductor: </p>
          <p>{parseToLocalTime(driver.created_at)}</p>
        </div>
        <div className="w-1/2">
          <p className="font-bold">Actualización del Conductor: </p>
          <p>{parseToLocalTime(driver.updated_at)}</p>
        </div>
      </div>
      <div className="flex gap-2 max-lg:flex-col">
        <div className="w-full lg:w-1/2 space-y-2 ">
          <p className="font-bold">Imagen del Conductor: </p>
          <Image
            src={`${imagesUrl}conductores/${driver.photo_driver}`}
            width={350}
            height={350}
            layout="constrained"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-2">
          <p className="font-bold">Imagen de la Unidad: </p>
          <Image
            src={`${imagesUrl}vehiculos/${driver.photo_vehicle}`}
            width={350}
            height={350}
            layout="constrained"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}