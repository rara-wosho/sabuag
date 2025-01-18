import { IoSearch } from "react-icons/io5";

function SearchbarOutline({ placeholder, containerStyle }) {
  return (
    <div
      className={`searchbar-outline d-flex align-items-center border-secondary border-hover rounded-2 pe-3 text-muted ${containerStyle}`}
    >
      <input
        style={{ outline: 0, marginBlock: 1 }}
        className="bg-none w-100 border-0 ps-3 me-1 py-2 fs-7 text-muted"
        placeholder={placeholder}
        type="search"
        name="search-task"
      />
      <IoSearch />
    </div>
  );
}

export default SearchbarOutline;
