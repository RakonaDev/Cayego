import { useFormik } from "formik"
import { usePanelServices } from "../../../../hooks/usePanelServices"
import ShowErrors from "../../ShowErrors"
import { serviceSchema } from "../../../../schemas/ServiceSchema"


export function AddService() {
  const { PostService } = usePanelServices()
  console.log(PostService)
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
      title: '',
      title_en: '',
      description: '',
      description_en: '',
      url_image: null,
    },
    validationSchema: serviceSchema,
    onSubmit: async (values) => {
      console.log(values)
      const formData = new FormData()
      formData.append('name', values.title)
      formData.append('name_en', values.title)
      formData.append('description', values.description)
      formData.append('description_en', values.description)
      if (values.url_image) {
        formData.append('image', values.url_image as File); // Append the file object directly
      }
      console.log(formData)
      PostService(formData)
    }
  })
  return (
    <div className="w-full relative">
      <form onSubmit={handleSubmit} className="w-full h-full p-4 space-y-2">
        <div>
          <label htmlFor="title" className="text-sm font-medium">Título:</label>
          <input type="text" id="title" value={values.title} name="title" onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-300/40 p-1 lg:p-2 max-lg:text-md rounded-md border border-black" />
          <ShowErrors error={errors.title} touched={touched.title} />
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
        <input type="submit" value="Agregar Servicio" className="bg-redPrimary text-white text-xs lg:text-sm w-fit rounded-lg px-4 py-2 mt-5" />
      </form >
    </div >
  )
}