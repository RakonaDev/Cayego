import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "./AuthContext";
import { apiAuth } from "../helper/apiAuth";
import { User } from "../interfaces/UserInterface";
import { useNavigate } from "react-router-dom";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  const { data: user } = useQuery<User>({
    queryKey: ['user_t'],
    queryFn: async () => {
      const response = await apiAuth.get('/user')
      if (response.status !== 200) {
        console.log("Error")
        navigate('/login')
      }
      return response.data.user
    },
  }) 

  return (
    <div>
      <AuthContext.Provider value={{ user }}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}
