import { Image } from "@unpic/react";
import { ServiceInterface } from "../../../../interfaces/ServiceInterfaces";
import { parseToLocalTime } from "../../../../logic/parseToLocalTime";

export function ShowService({ service }: { service: ServiceInterface }) {
  console.log(service)
  return (
    <div className="w-full space-y-3">
      <div className="w-full flex gap-5">
        <div className="w-1/2 space-y-3">
          <div>
            <p className="font-bold">Título del Servicio: </p>
            <p>{service.name}</p>
          </div>
          <div>
            <p className="font-bold">Título del Servicio en inglés: </p>
            <p>{service.name_en}</p>
          </div>
        </div>
        <div className="w-1/2">
          <p className="font-bold">Imagen del Servicio: </p>
          <Image
            src={`http://127.0.0.1:8000${service.url_image}`}
            width={350}
            height={350}
            layout="constrained"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="w-full flex gap-2">
        <div className="w-1/2">
          <p className="font-bold">Descripción del Servicio: </p>
          <p>{service.description}</p>
        </div>
        <div className="w-1/2">
          <p className="font-bold">Descripción del Servicio en Inglés: </p>
          <p>{service.description_en}</p>
        </div>
      </div>
      <div className="w-full flex gap-5">
        <div className="w-1/2">
          <p className="font-bold">Creación del Servicio: </p>
          <p>{parseToLocalTime(service.created_at)}</p>
        </div>
        <div className="w-1/2">
          <p className="font-bold">Actualización del Servicio: </p>
          <p>{parseToLocalTime(service.updated_at)}</p>
        </div>
      </div>
    </div>
  )
}