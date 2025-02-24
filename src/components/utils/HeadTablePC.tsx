// import React from "react";
import { TableTitle } from "../../interfaces/TablesInterface";

export const HeadTablePC = ({
  className,
  titlesTable,
  nededActions = true,
}: {
  nededActions?: boolean;
  className?: string;
  titlesTable: TableTitle[];
}) => {
  return (
    <div
      className={`w-full flex gap-2 xl:grid text-sm font-medium border-b border-gray-400 pb-4 ${
        className ?? "lg:grid-cols-12 "
      }`}
    >
      {titlesTable.map((title: TableTitle) => (
        <div
          className={`${title.className} w-full text-center`}
          key={`titleTable-${title.nombre}`}
        >
          {title.nombre}
        </div>
      ))}

      {nededActions && <div className="lg:col-span-3 text-center min-w-[150px]">Acciones</div>}
    </div>
  );
};