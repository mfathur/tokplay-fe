import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const PasswordTextField = (props: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="relative mb-7">
      <input
        type={isPasswordVisible ? "text" : "password"}
        id="password"
        className="text-field p-2.5 min-w-full md:min-w-0 md:w-80 h-12 "
        placeholder="Password"
        required
      />
      <FontAwesomeIcon
        className="absolute inset-y-4 right-3 text-gray-600 hover:cursor-pointer"
        onClick={togglePasswordVisibility}
        icon={isPasswordVisible ? faEye : faEyeSlash}
      />
    </div>
  );
};

export default PasswordTextField;
