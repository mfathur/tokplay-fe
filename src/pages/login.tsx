import PasswordTextField from "components/auth/tf-password.component";
import FieldErrorMessage from "components/auth/field-error-msg.component";
import Spinner from "components/spinner.component";
import { useFormik } from "formik";
import useLogin from "hooks/useLogin";
import { useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { object, string } from "yup";

const LoginPage = () => {
  const navigate: NavigateFunction = useNavigate();
  const { login, isLoading, isLoginSucceed } = useLogin();

  const goToRegisterPage = (): void => {
    navigate("/auth/register");
  };

  const redirectToHomePage = (): void => {
    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (isLoginSucceed) {
      redirectToHomePage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoginSucceed]);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: object({
      email: string().email("Email is invalid").required("Email is required"),
      password: string().required("Password is required"),
    }),
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: async (values) => {
      await login(values.email, values.password);
    },
  });

  return (
    <div className="bg-neutral-100 px-6 min-h-screen justify-center items-center flex flex-col">
      <h1 className="font-bold mb-4 text-xl text-infinitenight">
        Welcome Back!
      </h1>
      <h2 className="mb-11 font-semibold text-base text-fueltown">
        We are happy to have you back.
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

      <p className="mb-12 text-sm text-fueltown">
        Don't have an account?{" "}
        <span
          onClick={goToRegisterPage}
          className="font-bold hover:cursor-pointer hover:text-stone-600 transition-all text-infinitenight"
        >
          Register
        </span>
      </p>
      <button
        onClick={() => {
          formik.handleSubmit();
        }}
        disabled={isLoading}
        className="btn btn-contained min-w-full md:min-w-0 md:w-72 h-12"
      >
        {isLoading ? <Spinner className=" text-gray-700" /> : "Login"}
      </button>
    </div>
  );
};

export default LoginPage;
