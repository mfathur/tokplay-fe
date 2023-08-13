import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

type Props = {
  className?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const PasswordTextField = ({ className, value, onChange }: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className={`${className} relative`}>
      <input
        type={isPasswordVisible ? "text" : "password"}
        id="password"
        className="text-field p-2.5 h-12 w-full"
        placeholder="Password"
        required
        value={value}
        onChange={onChange}
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
