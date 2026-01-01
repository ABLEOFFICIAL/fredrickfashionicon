import * as yup from "yup";

// sign up schema
export const SignUpSchema = yup.object().shape({
  name: yup.string().required("Enter name!"),
  email: yup.string().email("invalid email").required("Enter email!"),
  password: yup
    .string()
    .min(8, "password must be at least 8 characters long!")
    .required("Enter password!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password must match!")
    .required("Confirm password!"),
});

// login schema
export const LoginSchema = SignUpSchema.pick(["email", "password"]);

// address schema
export const AddressUpSchema = yup.object().shape({
  name: yup.string().required("Enter name!"),
  country: yup.string().required("Enter Country!"),
  streetName: yup.string().required("Enter street address!"),
  city: yup.string().required("Enter city name!"),
  state: yup.string().required("Required!"),
  zipCode: yup.string().required("Required!"),
  phoneNumber: yup.string().required("Enter Phone!"),
});
