import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  merchant: string;
};

const TopBar = ({ title, merchant }: Props) => {
  const navigate = useNavigate();

  const backToPreviousPage = (): void => {
    navigate(-1);
  };

  return (
    <div className="flex items-center">
      <FontAwesomeIcon
        className="mr-2 hover:cursor-pointer hover:text-white transition-all h-6 w-6 rounded-full hover:bg-infinitenight p-2"
        icon={faChevronLeft}
        onClick={backToPreviousPage}
      />
      <p className="text-xl">
        <span className="font-bold">{title} |</span> {merchant}
      </p>
    </div>
  );
};

export default TopBar;
