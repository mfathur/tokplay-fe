import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  className?: string;
  message: string;
};

const FieldErrorMessage = ({ className, message }: Props) => {
  return (
    <div className={`text-red-600 flex items-center ${className}`}>
      <FontAwesomeIcon icon={faCircleExclamation} className="mr-2" />
      {message}
    </div>
  );
};

export default FieldErrorMessage;
