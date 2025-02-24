import { Image } from '@unpic/react'
import Aside from '../assets/login/aside.webp'
import Logo from '../assets/login/logo.png'
import { FaArrowLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react'
import { useFormik } from 'formik'
import axios, { AxiosError } from 'axios'
import { LoginSchema } from '../schemas/UserSchemas'
import ShowErrors from '../components/features/ShowErrors'
import Swal from 'sweetalert2'
import { useTokenAccess } from '../store/useTokenAccess'

export default function Login() {
  const navigate = useNavigate()
  const { setToken } = useTokenAccess()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    errors
  } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      if (loading) return
      setLoading(true)
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
          email: values.email,
          password: values.password
        })
        // localStorage.setItem('access_token', response.data.access_token)
        if (response.status === 200) {
          setToken(response.data.access_token)
          Swal.fire({
            icon: 'success',
            title: 'Credenciales correctas!'
          })
          if (response.data.user.role === 'admin') {
            navigate('/admin/dashboard')
          }
          else if (response.data.user.role === 'conductor') {
            navigate('/conductor')
          }
          setLoading(false)
        }
      }
      catch (error) {
        if (error instanceof AxiosError) {
          Swal.fire({
            title: 'Error',
            text: 'Credenciales no válidas!',
            icon: 'error'
          })
        }
        setLoading(false)
      }
    }
  })
  return (
    <div className="h-dvh w-full flex relative">
      <Link to='/' className='absolute left-5 top-5 text-white flex gap-3 items-center font-bold'>
        <span><FaArrowLeft size={30} /></span>
        <span>Volver al Inicio</span>
      </Link>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-8">
        <div className='w-full flex flex-col items-center'>
          <Image
            src={Logo}
            width={200}
            height={200}
            className='mx-auto'
          />
          <form onSubmit={handleSubmit} className='max-w-lg w-full p-5 space-y-6 flex flex-col items-center'>
            <div className='space-y-3 w-full flex flex-col'>
              <label htmlFor="email" className='text-lg font-medium text-redPrimary'>Usuario:</label>
              <input type="email" value={values.email} name="email" id="email" onChange={handleChange} onBlur={handleBlur} className='w-full rounded-lg px-3 py-2 text-black font-medium' />
              <ShowErrors error={errors.email} touched={touched.email} />
            </div>
            <div className='space-y-3 w-full flex flex-col relative'>
              <label htmlFor="password" className='text-lg font-medium text-redPrimary'>Contraseña:</label>
              <input type={showPassword ? "text" : "password"} value={values.password} name="password" onChange={handleChange} onBlur={handleBlur} id="password" className='w-full rounded-lg px-3 py-2 text-black font-medium relative ' />
              <ShowErrors error={errors.password} touched={touched.password} />
              <IoEyeSharp className={`absolute right-3 top-9 text-black z-10 ${showPassword && 'hidden'}`} size={25} onClick={() => setShowPassword(!showPassword)} />
              <FaEyeSlash className={`absolute right-3 top-9 text-black z-10 ${!showPassword && 'hidden'}`} size={25} onClick={() => setShowPassword(!showPassword)} />
            </div>
            <button type='submit' className='bg-redPrimary font-medium text-white text-lg mx-auto px-8 py-2 rounded-xl'>{loading ? 'Cargando...' : 'Iniciar Sesión'}</button>

          </form>
        </div>
      </div>
      <div className="w-1/2 max-lg:hidden">
        <Image
          src={Aside}
          width={1200}
          height={1080}
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  )
}