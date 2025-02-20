/*
import { apiAuth } from "../helper/apiAuth";
import { ServiceInterface, ServiceResponse } from "../interfaces/ServiceInterfaces";
import { toast } from "sonner";

const fetchCategorias = async (page: number): Promise<ServiceResponse> => {
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

const postCategorias = async (newCategoria: ServiceInterface): Promise<ServiceResponse> => {
  try {
    const response = await apiAuth.post('/categorias', newCategoria);
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

const patchCategorias = async (updatedCategorias: ServiceInterface): Promise<ServiceResponse> => {
  try {
    const response = await apiAuth.post(`/categorias/${updatedCategorias.id}`, updatedCategorias);
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

const deleteCategorias = async (id: number): Promise<ServiceResponse> => {
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

export function usePanelServices () {

}
*/