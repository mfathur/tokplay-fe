import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuthContext from "hooks/useAuthContext";
import useLogout from "hooks/useLogout";

type Props = {};

const PopupMenu = (props: Props) => {
  const { user } = useAuthContext();
  const userLoggedIn = user !== null;
  const { logout } = useLogout();

  const handleBtnLogoutClick = () => {
    logout();
  };

  return (
    <div className="dropdown dropdown-end">
      <FontAwesomeIcon
        tabIndex={0}
        className={`ml-3 w-9 h-9 ${
          userLoggedIn ? "hover:cursor-pointer hover:text-gray-300" : ""
        }`}
        icon={faUserCircle}
      />
      {userLoggedIn ? (
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <p className="font-bold" onClick={handleBtnLogoutClick}>
              Log out
            </p>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default PopupMenu;
