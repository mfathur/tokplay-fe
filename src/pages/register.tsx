import PasswordTextField from "components/auth/tf-password.component";
import FieldErrorMessage from "components/auth/field-error-msg.component";
import { useFormik } from "formik";
import useRegister from "hooks/useRegister";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import Spinner from "components/spinner.component";
import { useEffect } from "react";

const RegisterPage = () => {
  const navigate: NavigateFunction = useNavigate();
  const { register, isLoading, registerSucceed } = useRegister();

  const redirectToLoginPage = () => {
    navigate("/auth/login", { replace: true });
  };

  useEffect(() => {
    if (registerSucceed) {
      formik.resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerSucceed]);

  const formik = useFormik({
    initialValues: { email: "", password: "", username: "" },
    validationSchema: object({
      email: string().email("Email is invalid").required("Email is required"),
      password: string().required("Password is required"),
      username: string().required("Username is required"),
    }),
    validateOnChange: false,
    onSubmit: async (values) => {
      await register(values.email, values.password, values.username);
    },
  });

  return (
    <div className="bg-neutral-100 px-6 min-h-screen justify-center items-center flex flex-col">
      <h1 className="font-bold mb-4 text-xl text-infinitenight">
        Create Account
      </h1>
      <h2 className="mb-11 font-semibold text-base text-fueltown">
        Get started by creating your new account
      </h2>
      <input
        type="email"
        id="email"
        className={`text-field p-2.5 min-w-full md:min-w-0 md:w-80 h-12 ${
          formik.errors.email ? "mb-0" : "mb-9"
        }`}
        placeholder="Email"
        required
        value={formik.values.email}
        onChange={formik.handleChange}
      />

      {formik.errors.email ? (
        <FieldErrorMessage
          className="min-w-full md:min-w-0 md:w-80 mt-2 mb-3"
          message={formik.errors.email}
        />
      ) : null}

      <PasswordTextField
        className={`min-w-full md:min-w-0 md:w-80  ${
          formik.errors.password ? "mb-0" : "mb-9"
        }`}
        value={formik.values.password}
        onChange={formik.handleChange}
      />

      {formik.errors.password ? (
        <FieldErrorMessage
          className="min-w-full md:min-w-0 md:w-80 mt-2 mb-3"
          message={formik.errors.password}
        />
      ) : null}

      <input
        type="text"
        id="username"
        className={`text-field p-2.5 min-w-full md:min-w-0 md:w-80 h-12 ${
          formik.errors.username ? "mb-0" : "mb-9"
        }`}
        placeholder="Username"
        required
        value={formik.values.username}
        onChange={formik.handleChange}
      />

      {formik.errors.username ? (
        <FieldErrorMessage
          className="min-w-full md:min-w-0 md:w-80 mt-2 mb-3"
          message={formik.errors.username}
        />
      ) : null}

      <p className="mb-12 text-sm text-fueltown">
        Already having an account?{" "}
        <span
          onClick={redirectToLoginPage}
          className="font-bold hover:cursor-pointer hover:text-stone-600 transition-all text-infinitenight"
        >
          Login
        </span>
      </p>

      <button
        onClick={() => {
          formik.handleSubmit();
        }}
        disabled={isLoading}
        className="btn btn-contained min-w-full md:min-w-0 md:w-72 h-12"
      >
        {isLoading ? <Spinner className=" text-gray-700" /> : "Register"}
      </button>
    </div>
  );
};

export default RegisterPage;
