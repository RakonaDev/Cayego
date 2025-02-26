import { Image } from "@unpic/react";
import AuthProvider from "../context/AuthProvider";
import { useUser } from "../hooks/useUser";
import { parseToLocalTime } from "../logic/parseToLocalTime";
import { IoIosLogOut, IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useTokenAccess } from "../store/useTokenAccess";
import { apiURL } from "../helper/apiAuth";
import axios from "axios";

export default function InfoUser() {
  const { user } = useUser()
  const { clearToken, token } = useTokenAccess()
  const navigate = useNavigate()

  const logout = async () => {
    const response = await axios.post(`${apiURL}/logout`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (response.status === 200) {
      clearToken()
      navigate('/')
    }
  }

  return (
    <AuthProvider>
      <div className="w-full p-5 flex justify-between">
        <Link to='/' className="w-fit flex gap-2 text-white">
          <span><IoMdArrowRoundBack size={25} /></span>
          <span>Regresar</span>
        </Link>

        <Link onClick={logout} to='/login' className="w-fit flex gap-2 text-white">
          <span><IoIosLogOut size={25} /></span>
          <span>Cerrar Sesión</span>
        </Link>
      </div>
      <div className="w-full min-h-dvh flex justify-center items-center">
        <div className="max-w-2xl w-full h-auto bg-white text-black rounded-xl p-10">
          <h1 className="my-5 text-2xl font-bold">Información del usuario</h1>
          <div className="w-full space-y-3">
            <div className="w-full flex max-lg:flex-col gap-5">
              <div className="w-full lg:w-1/2">
                <p className="font-bold">Nombre Completo del Conductor: </p>
                <p>{user?.name}</p>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="font-bold">Dni del Conductor: </p>
                <p>{user?.dni}</p>
              </div>
            </div>
            <div className="w-full flex gap-2 max-lg:flex-col">
              <div className="w-full lg:w-1/2">
                <p className="font-bold">Email del Conductor: </p>
                <p>{user?.email}</p>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="font-bold">Teléfono del Conductor: </p>
                <p>{user?.phone}</p>
              </div>
            </div>
            <div className="w-full flex gap-2 max-lg:flex-col">
              <div className="w-full lg:w-1/2">
                <p className="font-bold">Número de Cuenta del Conductor: </p>
                <p>{user?.account_bank}</p>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="font-bold">Fecha de Aficiliación del Conductor: </p>
                <p>{user?.date_afiliate}</p>
              </div>
            </div>
            <div className="w-full flex gap-2 max-lg:flex-col">
              <div className="w-full">
                <p className="font-bold">Ubicación del Conductor: </p>
                <p>{user?.address}</p>
              </div>
            </div>
            <div className="w-full flex max-lg:flex-col gap-2">
              <div className="w-1/2">
                <p className="font-bold">Creación del Conductor: </p>
                <p>{parseToLocalTime(user?.created_at)}</p>
              </div>
              <div className="w-1/2">
                <p className="font-bold">Actualización del Conductor: </p>
                <p>{parseToLocalTime(user?.updated_at)}</p>
              </div>
            </div>
            <div className="flex gap-2 max-lg:flex-col">
              <div className="w-full lg:w-1/2 space-y-2 ">
                <p className="font-bold">Imagen del Conductor: </p>
                <Image
                  src={`${user?.photo_driver}`}
                  width={350}
                  height={350}
                  layout="constrained"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-2">
                <p className="font-bold">Imagen de la Unidad: </p>
                <Image
                  src={`${user?.photo_vehicle}`}
                  width={350}
                  height={350}
                  layout="constrained"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  )
}
