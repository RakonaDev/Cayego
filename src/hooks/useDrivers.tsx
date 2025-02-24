
/* eslint-disable @typescript-eslint/no-explicit-any */

import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiAuth } from "../helper/apiAuth";
import { toast } from "sonner";
import { useContext } from "react";
import { DialogContext } from "../context/DialogContext";
import { EditAndDeleteButtons } from "../components/features/EditAndDeleteButtons";
import { Image } from "@unpic/react";
import Swal from "sweetalert2";
import { DriverInterface, DriverResponse, DriversResponse, EditDriver } from "../interfaces/DriversInterface";
import { useDriverStore } from "../store/useDriverStore";
import UpdateDriver from "../components/features/modals/drivers/UpdateDriver";
import DeleteDriverID from "../components/features/modals/drivers/DeleteDriver";
import { ShowDriver } from "../components/features/modals/drivers/ShowDriver";
// import { JSX } from "react";

const fetchDrivers = async (page: number): Promise<DriversResponse> => {
  try {
    const response = await apiAuth.get(`/drivers/10/${page}`); // Incluir el parámetro page
    if (response.status === 401) {
      window.location.href = '/administrables/cayego/login';
      throw new Error("Unauthorized");
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-lanzar el error para que lo capture useQuery
  }
};

const postDrivers = async (newDriver: FormData): Promise<DriverResponse> => {
  try {
    const response = await apiAuth.postForm('/drivers', newDriver);
    if (response.status === 401) {
      window.location.href = '/administrables/cayego/login';
      throw new Error("Unauthorized");
    }
    if (response.status !== 200) {
      throw new Error('Error');
    }
    return response.data;
  } catch (error) {
    Swal.fire({
      title: 'Error',
      text: 'Faltan Datos',
      icon: 'error',
      confirmButtonText: 'Aceptar',
    })
    console.error(error);
    throw error;
  }
};


const patchDrivers = async (object: EditDriver): Promise<DriverResponse> => {
  try {
    const response = await apiAuth.post(`/drivers/${object.id}`, object.updatedDriver, {
    });
    if (response.status === 401) {
      window.location.href = '/login';
      throw new Error("Unauthorized");
    }
    if (response.status !== 200) {
      throw new Error('error');
    }
    return response.data;
  } catch (error) {
    console.error(error);
    Swal.fire({
      title: 'Error',
      text: 'Error al actualizar al conductor',
      icon: 'error',
      confirmButtonText: 'Aceptar',
    })
    throw error;
  }
};


const deleteDriver = async (id: number): Promise<DriverResponse> => {
  try {
    const response = await apiAuth.post(`/deleteDriver/${id}`);
    if (response.status === 401) {
      window.location.href = '/login';
      throw new Error("Unauthorized");
    }
    if (response.status !== 200) {
      throw new Error('error');
    }
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error('Error al eliminar al conductor');
    throw error;
  }
};

export function usePanelDrivers() {
  const { currentPage, setCurrentPage } = useDriverStore();
  const queryClient = useQueryClient();
  const { handleClickOpen, handleClose } = useContext(DialogContext)

  // useQuery con paginación
  const { data: driversData, isPending: CargandoDrivers, isError: ErrorDriver, refetch: ActualizarDrivers } = useQuery<DriversResponse>({
    queryKey: ['drivers', currentPage], // Incluir pageCategorias en la queryKey
    queryFn: () => fetchDrivers(currentPage), // Función de fetch
    // staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    placeholderData: keepPreviousData
  });

  const { mutate: PostDriver, isPending: LoadingPost } = useMutation<DriverResponse, any, FormData>({
    mutationFn: postDrivers,
    onSuccess: async (newDriver) => {

      queryClient.setQueryData<DriversResponse>(['drivers', currentPage], (oldServices) => {
        if (!oldServices) return { drivers: [newDriver.driver], currentPage: currentPage, totalPages: 1 };

        const updatedDriver = { ...oldServices, currentPage: currentPage };

        if (currentPage === updatedDriver.totalPages) {
          if (updatedDriver.drivers.length >= 10) {
            updatedDriver.totalPages++;
            if (currentPage + 1 === updatedDriver.totalPages) {
              setCurrentPage(currentPage + 1)
            }
          }

          updatedDriver.drivers.push(newDriver.driver);

        }
        return updatedDriver;
      });
      handleClose()
      Swal.fire({
        title: 'Conductor Creado',
        text: 'El conductor ha sido creado correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      })
      // closeModal();
    },
    onError: (error) => {
      handleClose()
      console.error("Error en la mutación PostDriver:", error);
      Swal.fire({
        title: 'Error',
        text: 'No se pudo crear el servicio',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      })
    },
  });

  // useMutation para editar una categoría
  const { mutate: EditDriver, isPending: LoadingEdit } = useMutation<DriverResponse, any, EditDriver>({
    mutationFn: patchDrivers,
    onSuccess: async ( updatedDriver: DriverResponse ) => {
      queryClient.setQueryData<DriversResponse>(['drivers', currentPage], (oldDriver?: DriversResponse) => {
        if (!oldDriver) return { drivers: [ updatedDriver.driver ], currentPage: 1, totalPages: 1 };

        const updatedDrivers = {
          ...oldDriver,
          drivers: oldDriver.drivers.map((driver) =>
            driver.id === updatedDriver.driver.id ? updatedDriver.driver : driver
          ),
        };
        return updatedDrivers;
      });
      handleClose()
      Swal.fire({
        title: 'Conductor Editado',
        text: 'El conductor ha sido editado correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      })

    },
    onError: (error) => {
      handleClose()
      console.error("Error en la mutación EditDriver:", error);
      Swal.fire({
        title: 'Error',
        text: 'No se pudo editar el servicio',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      })
    },
  });

  // useMutation para eliminar una categoría
  const { mutateAsync: DeleteDriver, isPending: LoadingDelete } = useMutation<DriverResponse, any, number>({
    mutationFn: deleteDriver,
    onSuccess: async (categoriaDeleted) => {

      queryClient.setQueryData<DriversResponse>(['drivers', currentPage], (oldDriver) => {
        if (!oldDriver) return { drivers: [], currentPage: 1, totalPages: 1 };

        const updatedDriver = { ...oldDriver };
        if (currentPage === updatedDriver.totalPages) {
          updatedDriver.drivers = updatedDriver.drivers.filter((driver) => driver.id !== categoriaDeleted.driver.id);
          console.log(updatedDriver.drivers)
          console.log(updatedDriver.totalPages)
          if (updatedDriver.totalPages > 1) {
            /*updatedDriver.totalPages--;*/
            setCurrentPage(totalPages - 1);
            /*
            if (currentPage > 1) {
              setPageCategorias(currentPage - 1);
            }
            */
          }
        } else {
          updatedDriver.drivers = updatedDriver.drivers.filter((driver) => driver.id !== categoriaDeleted.driver.id);
        }
        return updatedDriver;
      });

      ActualizarDrivers()
      handleClose()
      Swal.fire({
        title: 'Conductor Eliminado',
        text: 'El conductor ha sido eliminado correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      })
      //closeModal();
    },
    onError: (error) => {
      handleClose()
      console.error("Error en la mutación DeleteDriver:", error);
      Swal.fire({
        title: 'Error',
        text: 'No se pudo eliminar el servicio',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      })
    },
  });

  const nextPage = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(event)
    // setPageCategorias(value)
    setCurrentPage(value)
  }

  const RenderListDriver = () => {

    const handleEditarDriver = (driver: DriverInterface) => {
      handleClickOpen({ title: 'Editar Conductor', content: <UpdateDriver driver={driver} /> })
    };
    const handleEliminarDriver = (id: number) => {
      handleClickOpen({ title: '', content: <DeleteDriverID id={id} /> })
    };
    const handleVerDriver = (driver: DriverInterface) => {
      handleClickOpen({ title: 'Ver Conductor', content: <ShowDriver driver={driver} /> })
      /*
      setModalContent(<VerCategoria driver={driver} />)
      openModal()
      */
    }


    if (ErrorDriver && !CargandoDrivers) return <div>Error!</div>

    return (
      <div className="w-full space-y-6 bg-white-main">
        {driversData?.drivers ? driversData?.drivers.map((driver: DriverInterface) => (
          <div className="w-full flex gap-5 xl:grid xl:grid-cols-12 text-black-700" key={driver.id}>
            <div className="w-full min-w-[100px] xl:col-span-1 flex justify-center  items-center text-sm">
              <p>{driver.id}</p>
            </div>
            <div className="w-full min-w-[100px] xl:col-span-2 flex justify-center  items-center text-sm">
              <p>{driver.name}</p>
            </div>
            <div className="w-full min-w-[150px] xl:col-span-2 flex justify-center  items-center text-sm">
              <p>{driver.account_bank ?? ''}</p>
            </div>
            <div className="w-full min-w-[150px] xl:col-span-2 flex justify-center  items-center text-sm">
              <p>{driver.email}</p>
            </div>
            <div className="w-full min-w-[150px] xl:col-span-2 flex justify-center  items-center text-sm">
              <Image
                src={`http://127.0.0.1:8000/storage/${driver.photo_driver}`}
                width={100}
                height={100}
                layout="constrained"
                className="mx-auto"
              />
            </div>
            <EditAndDeleteButtons
              onView={() => handleVerDriver(driver)}
              onEdit={() => handleEditarDriver(driver)}
              onDelete={() => handleEliminarDriver(driver.id || 0)}
            />
          </div>
        )): <div>Error</div>}
      </div>
    );
  }


  const totalPages = driversData?.totalPages || 1;
  return {
    RenderListDriver,
    driversData,
    nextPage,
    totalPages,
    ErrorDriver,
    CargandoDrivers,
    PostDriver,
    LoadingPost,
    EditDriver,
    LoadingEdit,
    DeleteDriver,
    LoadingDelete,
    ActualizarDrivers
  };
}
