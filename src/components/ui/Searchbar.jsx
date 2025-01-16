import { IoSearch } from "react-icons/io5";

const Searchbar = ({
  containerStyle,
  inputStyle,
  placeholder,
  buttonLabel,
}) => {
  return (
    <div
      style={{ maxWidth: 6100 }}
      className={`${containerStyle} searchbar-container d-flex align-items-center`}
    >
      <input
        className={`${inputStyle} w-100 border-0`}
        style={{ backgroundColor: "transparent", outline: 0 }}
        type="search"
        placeholder={placeholder}
      />
      <div
        // style={{ height: 38 }}
        className="d-flex pointer py-2 rounded align-items-center px-3 bg-primary-linear"
      >
        <p className="mb-0 px-2 d-none d-md-inline-block bg-transparent text-white">
          {buttonLabel}
        </p>
        <IoSearch color="rgb(250,250,250)" size={20} />
      </div>
    </div>
  );
};

export default Searchbar;
