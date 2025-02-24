import * as Yup from "yup";

export const serviceSchema = Yup.object().shape({
  name: Yup.string().required("El título es obligatorio"), // title_en: Yup.string(), // If you decide to include title_en later
  name_en: Yup.string().required("El título en inglés es obligatorio"),
  description: Yup.string().required("La descripción es obligatoria"), // description_en: Yup.string(), // If you decide to include description_en later
  description_en: Yup.string().required("La descripción en inglés es obligatoria")
});

/*
 url_image: Yup.mixed()
    .nullable()
    .required("La imagen es obligatoria")
    .test(
      "fileType",
      "* Formato de imagen no soportado. Usa: .jpg, .jpeg, .png, .webp, .avif",
      (value) => {
        if (!value) return true; // Allow empty values for non-required fields
        if (value instanceof File) {
          // Type guard: Check if value is a File
          console.log("File object:", value); // Log the entire File object
          console.log("File type:", value.type);
          return [
            "image/jpeg",
            "image/png",
            "image/jpg",
            "image/webp",
            "image/avif",
          ].includes(value.type);
        }
        return false; // If it's not a File, it's invalid (for this test)
      }
    ),
*/
