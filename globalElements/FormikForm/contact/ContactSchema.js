import { object, string, date } from "yup";

export let contactSchema = object({
  name: string()
    .min(5, "Minimum 5 harften oluşur.")
    .max(20, "Maximum 20 karakter!")
    .matches(/^[a-zA-Z]+$/, "Sadece harf !")
    .required(),
  email: string()
    .email()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ /,
      "Lütfen doğru bir Email Adresi Giriniz"
    )
    .required(),
  company: string()
    .min(5, "Minimum 5 Karakter")
    .max(30, "Maximum 30 Karakter")
    .required(),
  message: string()
    .min(10, "Minimum 10 karakter")
    .max(50, "Maximum 50 karakter")
    .required(),
  createdOn: date().default(() => new Date()),
});
