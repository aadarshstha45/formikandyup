import * as yup from "yup";

export const registerSchema = yup.object({
  username: yup.string().min(3).max(16).required("Username is required."),
  email: yup.string().email().required("Email is required."),
  password: yup.string().min(8).required("Password is required."),
  confirmPassword: yup
    .string()
    .required("Confirm your password.")
    .oneOf([yup.ref("password"), null], "Password did not match"),
});
