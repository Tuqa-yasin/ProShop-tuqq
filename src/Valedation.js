import * as yup from "yup";

export const loginSchema = () => {
  return yup.object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter an email"),
    password: yup.string().min(6).required("Please enter a password"),
  });
};
