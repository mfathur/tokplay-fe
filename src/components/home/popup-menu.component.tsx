import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

type Props = {};

const PopupMenu = (props: Props) => {
  const navigate = useNavigate();

  const redirectToLoginPage = () => {
    navigate("/auth/login", { replace: true });
  };

  return (
    <div className="dropdown dropdown-end">
      <FontAwesomeIcon
        tabIndex={0}
        className="ml-3 w-9 h-9 hover:cursor-pointer hover:text-gray-300"
        icon={faUserCircle}
      />
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <p className="font-bold" onClick={redirectToLoginPage}>
            Log out
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PopupMenu;
