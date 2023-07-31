import React from "react";

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <div className="bg-neutral-100 px-6 min-h-screen justify-center items-center flex flex-col">
      <h1 className="font-bold mb-4 text-xl text-infinitenight">
        Create Account
      </h1>
      <h2 className="mb-11 font-semibold text-base text-fueltown">
        Get started by creating your new account
      </h2>
      <input
        type="text"
        id="email"
        className="text-field p-2.5 min-w-full md:min-w-0 md:w-80 h-12 mb-9"
        placeholder="Email"
        required
      />
      <input
        type="password"
        id="password"
        className="text-field p-2.5 min-w-full md:min-w-0 md:w-80 h-12 mb-7"
        placeholder="Password"
        required
      />
      <input
        type="text"
        id="username"
        className="text-field p-2.5 min-w-full md:min-w-0 md:w-80 h-12 mb-7"
        placeholder="Username"
        required
      />

      <p className="mb-12 text-sm text-fueltown">
        Already having an account?{" "}
        <span className="font-bold hover:cursor-pointer hover:text-stone-600 transition-all text-infinitenight">
          Login
        </span>
      </p>

      <button className="btn btn-contained min-w-full md:min-w-0 md:w-72 h-12">
        Register
      </button>
    </div>
  );
};

export default RegisterPage;
