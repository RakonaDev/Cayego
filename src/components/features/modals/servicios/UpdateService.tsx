import { useFormik } from 'formik'
import { usePanelServices } from '../../../../hooks/usePanelServices'
import { ServiceInterface } from '../../../../interfaces/ServiceInterfaces'
import ShowErrors from '../../ShowErrors'
import { serviceSchema } from '../../../../schemas/ServiceSchema'

export default function UpdateService({ service }: { service: ServiceInterface }) {
  const { EditService } = usePanelServices()

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
      name: service.name,
      name_en: service.name_en,
      description: service.description,
      description_en: service.description_en,
      url_image: null,
    },
    validationSchema: serviceSchema,
    onSubmit: async (values) => {
      const formEdit = new FormData()
      formEdit.append('name', values.name)
      formEdit.append('name_en', values.name_en)
      formEdit.append('description', values.description)
      formEdit.append('description_en', values.description_en)

      if (values.url_image) {
        formEdit.append('image', values.url_image as File); // Append the file object directly
      }

      EditService({
        updatedService: formEdit,
        id: service.id
      })
    }
  })
  return (
    <div className="w-full relative">
      <form onSubmit={handleSubmit} className="w-full h-full p-4 space-y-2">
        <div className="flex gap-3">
          <div className='w-1/2'>
            <label htmlFor="name" className="text-sm font-medium">Título:</label>
            <input type="text" id="name" value={values.name} name="name" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
            <ShowErrors error={errors.name} touched={touched.name} />
          </div>
          <div className='w-1/2'>
            <label htmlFor="name_en" className="text-sm font-medium">Título en Inglés:</label>
            <input type="text" id="name_en" value={values.name_en} name="name_en" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
            <ShowErrors error={errors.name_en} touched={touched.name_en} />
          </div>
        </div>
        {/*<div>
                <label htmlFor="title_en" className="text-sm font-medium">Título Inglés:</label>
                <input type="text" id="title_en" value={values.title_en} name="title_en" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
                <ShowErrors error={errors.title_en} touched={touched.title_en} />
              </div>*/}
        <div>
          <label htmlFor="url_image" className="text-sm font-medium">Imagen:</label>
          <input
            type="file"
            id="url_image"
            name="url_image"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const file = event.currentTarget.files?.[0] || null;
              setFieldValue("url_image", file);
            }}
            onBlur={handleBlur}
            className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black"
            accept="image/png, image/jpeg, image/jpg, image/webp"
          />

          <ShowErrors error={errors.url_image} touched={touched.url_image} />
        </div>
        <div>
          <label htmlFor="description" className="text-sm font-medium">Descripción:</label>
          <textarea rows={6} cols={20} id="description" value={values.description} name="description" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black resize-none"></textarea>
          <ShowErrors error={errors.description} touched={touched.description} />
        </div>
        <div>
          <label htmlFor="description" className="text-sm font-medium">Descripción en Inglés:</label>
          <textarea rows={6} cols={20} id="description_en" value={values.description_en} name="description_en" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black resize-none"></textarea>
          <ShowErrors error={errors.description_en} touched={touched.description_en} />
        </div>
        <input type="submit" value="Agregar Servicio" className="bg-redPrimary text-white text-xs lg:text-sm w-fit rounded-lg px-4 py-2 mt-5" />
      </form >
    </div >
  )
}
