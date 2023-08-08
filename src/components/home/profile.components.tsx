import PopupMenu from "./popup-menu.component";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="flex items-center">
      <p className="font-bold text-lg">Hi, trial</p>
      <PopupMenu />
    </div>
  );
};

export default Profile;
