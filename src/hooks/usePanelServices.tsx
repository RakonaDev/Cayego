
/* eslint-disable @typescript-eslint/no-explicit-any */

import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiAuth } from "../helper/apiAuth";
import { EditService, ServiceInterface, ServiceResponse, ServicesResponse } from "../interfaces/ServiceInterfaces";
import { toast } from "sonner";
import { useServiceStore } from "../store/useServiceStore";
import { JSX, useContext } from "react";
import { DialogContext } from "../context/DialogContext";
import UpdateService from "../components/features/modals/servicios/UpdateService";
import DeleteServiceID from "../components/features/modals/servicios/DeleteService";
import { ShowService } from "../components/features/modals/servicios/ShowService";
import { EditAndDeleteButtons } from "../components/features/EditAndDeleteButtons";
import { Image } from "@unpic/react";
import Swal from "sweetalert2";
// import { JSX } from "react";

const fetchServices = async (page: number): Promise<ServicesResponse> => {
  try {
    const response = await apiAuth.get(`/services/10/${page}`); // Incluir el parámetro page
    if (response.status === 401) {
      window.location.href = '/administrables/cayego/login';
      throw new Error("Unauthorized");
    }
    if (response.status !== 200) {
      window.location.href = '/administrables/cayego/login'
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-lanzar el error para que lo capture useQuery
  }
};

const postServices = async (newService: FormData): Promise<ServiceResponse> => {
  try {
    const response = await apiAuth.postForm('/services', newService);
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


const patchServices = async (object: EditService): Promise<ServiceResponse> => {
  try {
    console.log("object.updatedService:", object.updatedService);
    console.log("Is FormData:", object.updatedService instanceof FormData);
    console.log("FormData Entries:", Array.from(object.updatedService.entries()));
    const response = await apiAuth.post(`/services/${object.id}`, object.updatedService, {
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
      text: 'Error al actualizar la service',
      icon: 'error',
      confirmButtonText: 'Aceptar',
    })
    throw error;
  }
};


const deleteServices = async (id: number): Promise<ServiceResponse> => {
  try {
    const response = await apiAuth.post(`/deleteService/${id}`);
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
    toast.error('Error al eliminar la service');
    throw error;
  }
};

export function usePanelServices() {
  const { currentPage, setCurrentPage } = useServiceStore();
  const queryClient = useQueryClient();
  const { handleClickOpen, handleClose } = useContext(DialogContext)

  // useQuery con paginación
  const { data: servicesData, isPending: CargandoCategorias, isError: ErrorService, refetch: ActualizarCategorias } = useQuery<ServicesResponse>({
    queryKey: ['services', currentPage], // Incluir pageCategorias en la queryKey
    queryFn: () => fetchServices(currentPage), // Función de fetch
    // staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    placeholderData: keepPreviousData
  });

  const { mutate: PostService, isPending: LoadingPost } = useMutation<ServiceResponse, any, FormData>({
    mutationFn: postServices,
    onSuccess: async (newService) => {

      queryClient.setQueryData<ServicesResponse>(['services', currentPage], (oldServices) => {
        if (!oldServices) return { services: [newService.service], currentPage: currentPage, totalPages: 1 };

        const updatedService = { ...oldServices, currentPage: currentPage };

        if (currentPage === updatedService.totalPages) {
          if (updatedService.services.length >= 10) {
            updatedService.totalPages++;
            if (currentPage + 1 === updatedService.totalPages) {
              setCurrentPage(currentPage + 1)
            }
          }

          updatedService.services.push(newService.service);

        }
        /*
        else if (pageCategorias === 1) {
          updatedService.services.push(newCategoria.services);
        }
          */
        return updatedService;
      });
      handleClose()
      Swal.fire({
        title: 'Servicio Creado',
        text: 'El servicio ha sido creado correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      })
      // closeModal();
    },
    onError: (error) => {
      handleClose()
      console.error("Error en la mutación PostService:", error);
      Swal.fire({
        title: 'Error',
        text: 'No se pudo crear el servicio',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      })
    },
  });

  // useMutation para editar una categoría
  const { mutate: EditService, isPending: LoadingEdit } = useMutation<ServiceResponse, any , EditService>({
    mutationFn: patchServices,
    onSuccess: async (updatedCategoria) => {
      queryClient.setQueryData<ServicesResponse>(['services', currentPage], (oldCategorias) => {
        if (!oldCategorias) return { services: [updatedCategoria.service], currentPage: 1, totalPages: 1 };

        const updatedServices = {
          ...oldCategorias,
          services: oldCategorias.services.map((service) =>
            service.id === updatedCategoria.service.id ? updatedCategoria.service : service
          ),
        };
        return updatedServices;
      });
      handleClose()
      Swal.fire({
        title: 'Servicio Editado',
        text: 'El servicio ha sido editado correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      })
      // closeModal();
    },
    onError: (error) => {
      handleClose()
      console.error("Error en la mutación EditService:", error);
      Swal.fire({
        title: 'Error',
        text: 'No se pudo editar el servicio',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      })
    },
  });

  // useMutation para eliminar una categoría
  const { mutateAsync: DeleteService, isPending: LoadingDelete } = useMutation<ServiceResponse, any, number>({
    mutationFn: deleteServices,
    onSuccess: async (categoriaDeleted) => {

      queryClient.setQueryData<ServicesResponse>(['services', currentPage], (oldCategorias) => {
        if (!oldCategorias) return { services: [], currentPage: 1, totalPages: 1 };

        const updatedServices = { ...oldCategorias };
        if (currentPage === updatedServices.totalPages) {
          updatedServices.services = updatedServices.services.filter((service) => service.id !== categoriaDeleted.service.id);
          console.log(updatedServices.services)
          console.log(updatedServices.totalPages)
          if (updatedServices.totalPages > 1) {
            console.log("Aqui pagina")
            /*updatedServices.totalPages--;*/
            setCurrentPage(totalPages - 1);
            /*
            if (currentPage > 1) {
              setPageCategorias(currentPage - 1);
            }
            */
          }
        } else {
          updatedServices.services = updatedServices.services.filter((service) => service.id !== categoriaDeleted.service.id);
        }
        return updatedServices;
      });

      ActualizarCategorias()
      handleClose()
      Swal.fire({
        title: 'Servicio Eliminado',
        text: 'El servicio ha sido eliminado correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      })
      //closeModal();
    },
    onError: (error) => {
      handleClose()
      console.error("Error en la mutación DeleteService:", error);
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

  const RenderListServices = (): JSX.Element => {

    const handeEditarCategoria = (service: ServiceInterface) => {
      handleClickOpen({ title: 'Editar Servicio', content: <UpdateService service={service} /> })
    };
    const handleEliminarCategoria = (id: number) => {
      handleClickOpen({ title: '', content: <DeleteServiceID id={id} /> })
      /*
      setModalContent(<EliminarCategoria id={id} />);
      openModal();
      */
    };
    const handleVerCategoria = (service: ServiceInterface) => {
      handleClickOpen({ title: 'Ver Servicio', content: <ShowService service={service} /> })
      /*
      setModalContent(<VerCategoria service={service} />)
      openModal()
      */
    }


    if (CargandoCategorias) return <div>Loading...</div>;

    return (
      <div className="w-full space-y-6 bg-white-main">
        {CargandoCategorias ? <h1>Cargando...</h1> : servicesData?.services.map((service: ServiceInterface) => (
          <div className="w-full flex gap-5 xl:grid xl:grid-cols-12 text-black-700" key={service.id}>
            <div className="w-full min-w-[100px] xl:col-span-3 flex justify-center  items-center text-sm">
              <p>{service.name}</p>
            </div>
            <div className="w-full min-w-[150px] xl:col-span-3 flex justify-center  items-center text-sm">
              <p>{service.description}</p>
            </div>
            <div className="w-full min-w-[150px] xl:col-span-3 flex justify-center  items-center text-sm">
              <Image
                src={`http://127.0.0.1:8000${service.url_image}`}
                width={100}
                height={100}
                layout="constrained"
              />
            </div>
            <EditAndDeleteButtons
              onView={() => handleVerCategoria(service)}
              onEdit={() => handeEditarCategoria(service)}
              onDelete={() => handleEliminarCategoria(service.id || 0)}
            />
          </div>
        ))}
      </div>
    );
  }


  const totalPages = servicesData?.totalPages || 1;
  return {
    RenderListServices,
    servicesData,
    nextPage,
    totalPages,
    ErrorService,
    CargandoCategorias,
    PostService,
    LoadingPost,
    EditService,
    LoadingEdit,
    DeleteService,
    LoadingDelete,
    ActualizarCategorias
  };
}
