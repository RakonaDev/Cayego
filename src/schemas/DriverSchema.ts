import * as Yup from "yup";

export const driverSchema = Yup.object().shape({
  name: Yup.string().required("El nombre completo es obligatorio"), // title_en: Yup.string(), // If you decide to include title_en later
  ruc: Yup.string().required("El ruc  es obligatorio"),
  phone: Yup.string().required("El celular es obligatoria"), // description_en: Yup.string(), // If you decide to include description_en later
  address: Yup.string().required("La ubicación es obligatoria"),
  dni: Yup.string().required("El dni  es obligatoria"),
  date_afiliate: Yup.date().required("La fecha de afiliación  es obligatoria"),
  email: Yup.string().email('Coloque correctamente el email').required("El email es obligatoria"),
  password: Yup.string().required("La contraseña  es obligatoria").min(8, 'Debe ser más de 8 carácteres'),
  account_bank: Yup.string().required("El número de cuenta es requerido")
});

export const editSchema = Yup.object().shape({
  name: Yup.string().required("El nombre completo es obligatorio"), // title_en: Yup.string(), // If you decide to include title_en later
  ruc: Yup.string().required("El ruc  es obligatorio"),
  phone: Yup.string().required("El celular es obligatoria"), // description_en: Yup.string(), // If you decide to include description_en later
  address: Yup.string().required("La ubicación es obligatoria"),
  dni: Yup.string().required("El dni  es obligatoria"),
  date_afiliate: Yup.date().required("La fecha de afiliación  es obligatoria"),
  email: Yup.string().email('Coloque correctamente el email').required("El email es obligatoria"),
  account_bank: Yup.string().required("El número de cuenta es requerido")
});