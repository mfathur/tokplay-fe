import {
  IconDefinition,
  faCircleCheck,
  faCircleXmark,
  faInfo,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useToastContext from "hooks/useToastContext";
import { useEffect, useState } from "react";
import Toast from "types/toast";

interface ToastTypes {
  [x: string]: {
    icon: IconDefinition;
    rootClassName: string;
  };
}

const toastTypes: ToastTypes = {
  success: {
    icon: faCircleCheck,
    rootClassName: "bg-green-500",
  },
  error: {
    icon: faCircleXmark,
    rootClassName: "bg-red-500",
  },
  info: {
    icon: faInfo,
    rootClassName: "bg-blue-500",
  },
};

type Props = {
  toast: Toast;
};

const ToastComponent = ({ toast }: Props) => {
  const { id, message, type } = toast;
  const { icon, rootClassName } = toastTypes[type];

  const { deleteToastBy } = useToastContext();
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      deleteToastBy(id);
    }, 3000);
    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    deleteToastBy(id);
  };

  return (
    <div
      className={`toast toast-top mt-4 mr-2 flex flex-col ${rootClassName} text-white rounded-lg justify-center ${
        dismissed ? "toast-dimissed" : ""
      }`}
    >
      <div className="flex flex-row items-center">
        <FontAwesomeIcon className="text-lg" icon={icon} />
        <p className="toast-message font-bold ml-4 mr-8">{message}</p>
        <FontAwesomeIcon
          onClick={handleDismiss}
          className="text-xl hover:cursor-pointer hover:text-gray-300"
          icon={faXmark}
        />
      </div>
    </div>
  );
};

export default ToastComponent;
