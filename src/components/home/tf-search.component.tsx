import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  className?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const SearchTextField = ({ className, value, onChange }: Props) => {
  return (
    <div className={`${className} flex grow relative`}>
      <input
        className="bg-darkmineral rounded-lg py-2 grow mr-5 pl-9 pr-6 font-medium"
        type="text"
        placeholder="Search videos..."
        value={value}
        onChange={onChange}
      />
      <FontAwesomeIcon
        className="absolute inset-y-3 left-3 hover:cursor-pointer"
        icon={faSearch}
      />
    </div>
  );
};

export default SearchTextField;
