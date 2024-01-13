import { useFormik } from "formik";
import FormInput from "./FormInput";
import { registerSchema } from "../schemas";
import "../App.css";

const initialValues = {
  username: "",
  email: "",
  birthday: "",
  password: "",
  confirmPassword: "",
};

function FormData() {
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
    },
  ];

  return (
    <>
      <div className="app">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>

          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={
                errors[input.name] && touched[input.name]
                  ? errors[input.name]
                  : null
              }
            />
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default FormData;
