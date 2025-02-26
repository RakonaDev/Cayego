import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { User } from "../interfaces/UserInterface"
import { apiAuth } from "../helper/apiAuth"

export function useUser() {
  const navigate = useNavigate()
  const { data: user } = useQuery<User>({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await apiAuth.get('/user')
      if (response.status !== 200) {
        console.log("Error")
        navigate('/login')
      }
      return response.data
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })

  return {
    user
  }
}