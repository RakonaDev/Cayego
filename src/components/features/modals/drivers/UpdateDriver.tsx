import { useFormik } from 'formik'
import ShowErrors from '../../ShowErrors'
import { DriverInterface } from '../../../../interfaces/DriversInterface'
import { editSchema } from '../../../../schemas/DriverSchema'
import { usePanelDrivers } from '../../../../hooks/useDrivers'

export default function UpdateDriver({ driver }: { driver: DriverInterface }) {
  const { EditDriver } = usePanelDrivers()

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    touched,
    errors
  } = useFormik({
    initialValues: {
      name: driver.name,
      photo_driver: null,
      photo_vehicle: null,
      ruc: driver.ruc,
      phone: driver.phone,
      address: driver.address,
      dni: driver.dni,
      date_afiliate: driver.date_afiliate,
      email: driver.email,
      password: driver.password,
      account_bank: driver.account_bank
    },
    validationSchema: editSchema,
    onSubmit: async (values) => {
      const formData = new FormData()
      formData.append('name', values.name)
      formData.append('email', values.email ?? '')
      formData.append('ruc', values.ruc ?? '')
      formData.append('phone', values.phone ?? '')
      formData.append('address', values.address ?? '')
      formData.append('dni', values.dni ?? '')
      formData.append('date_afiliate', values.date_afiliate ?? '')
      formData.append('password', values.password ?? '')
      formData.append('account_bank', values.account_bank ?? '')
      if (values.photo_driver) {
        formData.append('photo_driver', values.photo_driver as File); // Append the file object directly
      }
      if (values.photo_vehicle) {
        formData.append('photo_vehicle', values.photo_vehicle as File);
      }
      console.log(values)
      EditDriver({
        updatedDriver: formData,
        id: driver.id ?? 0
      })
    }
  })
  return (
    <div className="w-full relative">
      <form onSubmit={handleSubmit} className="w-full h-full p-2 space-y-3 flex flex-col items-center">
        <div className="w-full flex gap-2 max-lg:flex-col">
          <div className="w-full lg:w-1/2">
            <label htmlFor="name" className="text-sm font-medium">Nombre Completo del Conductor:</label>
            <input type="text" id="name" value={values.name} name="name" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
            <ShowErrors error={errors.name} touched={touched.name} />
          </div>
          <div className="w-full lg:w-1/2">
            <label htmlFor="account_bank" className="text-sm font-medium">Número de Cuenta del Conductor:</label>
            <input type="text" id="account_bank" value={values.account_bank} name="account_bank" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
            <ShowErrors error={errors.account_bank} touched={touched.account_bank} />
          </div>
        </div>
        <div className="w-full flex max-lg:flex-col gap-2">
          <div className="w-1/2">
            <label htmlFor="ruc" className="text-sm font-medium">RUC del Conductor:</label>
            <input type="text" id="ruc" value={values.ruc} name="ruc" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
            <ShowErrors error={errors.ruc} touched={touched.ruc} />
          </div>
          <div className="w-1/2">
            <label htmlFor="phone" className="text-sm font-medium">Teléfono del Conductor:</label>
            <input type="text" id="phone" value={values.phone} name="phone" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
            <ShowErrors error={errors.phone} touched={touched.phone} />
          </div>
        </div>
        <div className="w-full flex max-lg:flex-col gap-2">
          <div className="w-full lg:w-1/2">
            <label htmlFor="dni" className="text-sm font-medium">Dni del Conductor:</label>
            <input type="text" id="dni" value={values.dni} name="dni" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
            <ShowErrors error={errors.dni} touched={touched.dni} />
          </div>
          <div className="w-full lg:w-1/2">
            <label htmlFor="date_afiliate" className="text-sm font-medium">Teléfono del Conductor:</label>
            <input type="date" id="date_afiliate" value={values.date_afiliate} name="date_afiliate" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
            <ShowErrors error={errors.date_afiliate} touched={touched.date_afiliate} />
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="address" className="text-sm font-medium">Dirección del Conductor:</label>
          <input type="text" id="address" value={values.address} name="address" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
          <ShowErrors error={errors.address} touched={touched.address} />
        </div>
        <div className="w-full flex max-lg:flex-col gap-2">
          <div className="w-full lg:w-1/2">
            <label htmlFor="email" className="text-sm font-medium">Email del Conductor:</label>
            <input type="text" id="email" value={values.email} name="email" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
            <ShowErrors error={errors.email} touched={touched.email} />
          </div>
          <div className="w-full lg:w-1/2">
            <label htmlFor="password" className="text-sm font-medium">Contraseña del Conductor:</label>
            <input type="text" id="password" value={values.password} name="password" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
            <ShowErrors error={errors.password} touched={touched.password} />
          </div>
        </div>
        <div className="w-full flex max-lg:flex-col gap-2">
          <div className="w-full lg:w-1/2">
            <label htmlFor="photo_driver" className="text-sm font-medium">Foto del Conductor:</label>
            <input
              type="file"
              id="photo_driver"
              name="photo_driver"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const file = event.currentTarget.files?.[0] || null;
                setFieldValue("photo_driver", file);
              }}
              onBlur={handleBlur}
              className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black"
              accept="image/png, image/jpeg, image/jpg, image/webp"
              
            />
          </div>
          <div className="w-full lg:w-1/2">
            <label htmlFor="photo_vehicle" className="text-sm font-medium">Foto de la unidad:</label>
            <input
              type="file"
              id="photo_vehicle"
              name="photo_vehicle"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const file = event.currentTarget.files?.[0] || null;
                setFieldValue("photo_vehicle", file);
              }}
              onBlur={handleBlur}
              className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black"
              accept="image/png, image/jpeg, image/jpg, image/webp"
              
            />
          </div>
        </div>
        <input type="submit" value="Agregar Conductor" className="bg-redPrimary text-white text-xs cursor-pointer lg:text-sm w-fit rounded-lg px-4 py-2 mt-5" />
      </form >
    </div >
  )
}
