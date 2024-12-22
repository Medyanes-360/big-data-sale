import { object, string, date } from "yup";

export let contactSchema = object({
  name: string()
    .min(5, "Minimum 5 harften oluşur.")
    .max(20, "Maximum 20 karakter!")
    .matches(/^[a-zA-Z]+$/, "Sadece harf !")
    .required("Name zorunlu"),
  email: string()
    .email()
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Lütfen doğru bir Email Adresi Giriniz"
    )
    .required("Email Zorunlu"),
  company: string()
    .matches(/^[a-zA-Z]+$/, "Sadece harf !")
    .min(5, "Minimum 5 Karakter")
    .max(30, "Maximum 30 Karakter")
    .required("Company Name zorunlu"),
  message: string()
    .min(10, "Minimum 10 karakter")
    .max(50, "Maximum 50 karakter")
    .required("Message zorunlu"),
  createdOn: date().default(() => new Date()),
});
