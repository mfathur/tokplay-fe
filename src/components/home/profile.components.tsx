import { useNavigate } from "react-router-dom";
import PopupMenu from "./popup-menu.component";
import useAuthContext from "hooks/useAuthContext";

type Props = {};

const Profile = (props: Props) => {
  const { user } = useAuthContext();
  const userLoggedIn = user !== null;
  const navigate = useNavigate();

  const handleTxtLoginClick = () => {
    navigate("/auth/login");
  };

  return (
    <div className="flex items-center">
      {userLoggedIn ? (
        <p className="font-bold text-lg">Hi, {user?.username}</p>
      ) : (
        <p
          className="font-bold text-lg hover:cursor-pointer hover:text-gray-300"
          onClick={handleTxtLoginClick}
        >
          Login
        </p>
      )}
      <PopupMenu />
    </div>
  );
};

export default Profile;
