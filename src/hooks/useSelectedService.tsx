import { useQuery } from "@tanstack/react-query";
import { apiAuth } from "../helper/apiAuth";
import { ServiceInterface } from "../interfaces/ServiceInterfaces";
import { useServiceSelected } from "../store/useServiceSelected";

export function useSelectedService () {
  const { serviceSelected } = useServiceSelected()
  const { data: servicesSelected } = useQuery<ServiceInterface>({
    queryKey: ['serviceselected', serviceSelected],
    queryFn: async () => {
      const response = await apiAuth.get(`/services/${serviceSelected}`)
      if (response.status !== 200) {
        console.log("Error")
        
      }
      return response.data.service
    },
  })

  return {
    servicesSelected
  }
}