import React from "react";
import PasswordTextField from "components/auth/tf-password.component";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="bg-neutral-100 px-6 min-h-screen justify-center items-center flex flex-col">
      <h1 className="font-bold mb-4 text-xl text-infinitenight">
        Welcome Back!
      </h1>
      <h2 className="mb-11 font-semibold text-base text-fueltown">
        We are happy to have you back.
      </h2>
      <input
        type="text"
        id="email"
        className="text-field p-2.5 min-w-full md:min-w-0 md:w-80 h-12 mb-9"
        placeholder="Email"
        required
      />
      <PasswordTextField />

      <p className="mb-12 text-sm text-fueltown">
        Don't have an account?{" "}
        <span className="font-bold hover:cursor-pointer hover:text-stone-600 transition-all text-infinitenight">
          Register
        </span>
      </p>

      <button className="btn btn-contained min-w-full md:min-w-0 md:w-72 h-12">
        Login
      </button>
    </div>
  );
};

export default LoginPage;
