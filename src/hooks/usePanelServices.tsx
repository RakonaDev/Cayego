
/* eslint-disable @typescript-eslint/no-explicit-any */

import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiAuth } from "../helper/apiAuth";
import { ServiceInterface, ServiceResponse, ServicesResponse } from "../interfaces/ServiceInterfaces";
import { toast } from "sonner";
import { useServiceStore } from "../store/useServiceStore";
// import { JSX } from "react";

const fetchServices = async (page: number): Promise<ServicesResponse> => {
  try {
    const response = await apiAuth.get(`/servicios/10/${page}`); // Incluir el parámetro page
    if (response.status === 401) {
      window.location.href = '/login';
      throw new Error("Unauthorized");
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-lanzar el error para que lo capture useQuery
  }
};

const postServices = async (newService: ServiceInterface): Promise<ServiceResponse> => {
  try {
    const response = await apiAuth.post('/services', newService);
    if (response.status === 401) {
      window.location.href = '/login';
      throw new Error("Unauthorized");
    }
    if (response.status !== 201) {
      throw new Error('Error');
    }
    return response.data;
  } catch (error) {
    toast.error('Faltan Datos!');
    console.error(error);
    throw error;
  }
};


const patchServices = async (updatedService: ServiceInterface): Promise<ServiceResponse> => {
  try {
    const response = await apiAuth.post(`/services/${updatedService.id}`, updatedService);
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
    toast.error('Error al actualizar la categoria');
    throw error;
  }
};


const deleteServices = async (id: number): Promise<ServiceResponse> => {
  try {
    const response = await apiAuth.post(`/deleteCategorias/${id}`);
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
    toast.error('Error al eliminar la categoria');
    throw error;
  }
};

export function usePanelServices() {
  const { currentPage, setCurrentPage } = useServiceStore();
  const queryClient = useQueryClient();

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

  const { mutate: PostService, isPending: LoadingPost } = useMutation<ServiceResponse, any, ServiceInterface>({
    mutationFn: postServices,
    onSuccess: async (newService) => {

      queryClient.setQueryData<ServicesResponse>(['services', currentPage], (oldServices) => {
        if (!oldServices) return { services: [newService.services], currentPage: currentPage, totalPages: 1 };

        const updatedService = { ...oldServices, currentPage: currentPage };

        if (currentPage === updatedService.totalPages) {
          if (updatedService.services.length >= 10) {
            updatedService.totalPages++;
            if (currentPage + 1 === updatedService.totalPages) {
              setCurrentPage(currentPage + 1)
            }
          }

          updatedService.services.push(newService.services);

        }
        /*
        else if (pageCategorias === 1) {
          updatedService.services.push(newCategoria.services);
        }
          */
        return updatedService;
      });

      toast.success('Categoria Creada Correctamente!');
      // closeModal();
    },
    onError: (error) => {
      console.error("Error en la mutación PostService:", error);
      toast.error('Error al crear la categoría. Por favor, inténtalo de nuevo.');
    },
  });

  // useMutation para editar una categoría
  const { mutate: EditService, isPending: LoadingEdit } = useMutation<ServiceResponse, any, ServiceInterface>({
    mutationFn: patchServices,
    onSuccess: async (updatedCategoria) => {
      queryClient.setQueryData<ServicesResponse>(['services', currentPage], (oldCategorias) => {
        if (!oldCategorias) return { services: [updatedCategoria.services], currentPage: 1, totalPages: 1 };

        const updatedServices = {
          ...oldCategorias,
          services: oldCategorias.services.map((categoria) =>
            categoria.id === updatedCategoria.services.id ? updatedCategoria.services : categoria
          ),
        };
        return updatedServices;
      });
      toast.success('Categoria Actualizada Correctamente!');
      // closeModal();
    },
    onError: (error) => {
      console.error("Error en la mutación EditarCategoria:", error);
      toast.error('Error al actualizar la categoría. Por favor, inténtalo de nuevo.');
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
          updatedServices.services = updatedServices.services.filter((categoria) => categoria.id !== categoriaDeleted.services.id);
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
          updatedServices.services = updatedServices.services.filter((categoria) => categoria.id !== categoriaDeleted.services.id);
        }
        return updatedServices;
      });

      ActualizarCategorias()
      toast.success('Categoria Eliminada Correctamente!');
      //closeModal();
    },
    onError: (error) => {
      console.error("Error en la mutación DeleteService:", error);
      toast.error('Error al eliminar la categoría. Por favor, inténtalo de nuevo.');
    },
  });

  const nextPage = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(event)
    // setPageCategorias(value)
    setCurrentPage(value)
  }
  /*
  const RenderListCategories = (): JSX.Element => {
    /*
    const handeEditarCategoria = (categoria: ServiceInterface) => {
      setModalContent(<EditarCategoria categoria={categoria} />);
      openModal();
    };
    const handleEliminarCategoria = (id: number) => {
      setModalContent(<EliminarCategoria id={id} />);
      openModal();
    };
    const handleVerCategoria = (categoria: ServiceInterface) => {
      setModalContent(<VerCategoria categoria={categoria} />)
      openModal()
    }
    */
   /*
    if (CargandoCategorias) return <div>Loading...</div>;

    return (
      <div className="w-full space-y-6 bg-white-main">
        {CargandoCategorias ? <h1>Cargando...</h1> : servicesData?.services.map((categoria: ServiceInterface) => (
          <div className="w-full flex gap-5 xl:grid xl:grid-cols-12 text-black-700" key={categoria.id}>
            <div className="w-full min-w-[100px] xl:col-span-2 flex justify-center  items-center text-sm">
              <p>{categoria.title}</p>
            </div>
            <div className="w-full min-w-[150px] xl:col-span-2 flex justify-center  items-center text-sm">
              <p>{categoria.description}</p>
            </div>
            <div className="w-full min-w-[200px] xl:col-span-2 flex justify-center  items-center text-sm">
              <p>{parseToLocalTime(new Date(categoria.created_at || 0))}</p>
            </div>
            <div className="w-full min-w-[200px] xl:col-span-3 flex justify-center  items-center text-sm">
              <p>{parseToLocalTime(new Date(categoria.updated_at || 0))}</p>
            </div>
            <EditAndDeleteButtons
              onView={() => handleVerCategoria(categoria)}
              onEdit={() => handeEditarCategoria(categoria)}
              onDelete={() => handleEliminarCategoria(categoria.id || 0)}
            />
          </div>
        ))}
      </div>
    );
  }
  */

  const totalPages = servicesData?.totalPages || 1;
  return {
    // RenderListServices,
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
