import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { apiAuth } from "../helper/apiAuth";
import { ServiceInterface } from "../interfaces/ServiceInterfaces";

const fetchServices = async (): Promise<ServiceInterface[]> => {
  try {
    const response = await apiAuth.get('/services'); // Incluir el parámetro page
    if (response.status === 401) {
      window.location.href = '/administrables/cayego/login';
      throw new Error("Unauthorized");
    }
    if (response.status !== 200) {
      window.location.href = '/administrables/cayego/login'
    }
    return response.data.services;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export function useServices () {
  const { data: AllServices  } = useQuery<ServiceInterface[]>({
    queryKey: ['service'],
    queryFn: fetchServices,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    placeholderData: keepPreviousData
  })

  return {
    AllServices
  }
}