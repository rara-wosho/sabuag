import { IoCloseOutline } from "react-icons/io5";

const DropdownSearch = ({
  label,
  inputStyle,
  containerStyle,
  handleSearch,
  searchTerm,
  results,
  handlePick,
  closeSelect,
}) => {
  return (
    <div
      className={`${containerStyle} dropdown-search d-flex align-items-center pe-3 position-relative`}
    >
      <input
        onChange={handleSearch}
        style={{ backgroundColor: "transparent", paddingBlock: 12 }}
        className={`${inputStyle} w-100 border-0 text-muted`}
        type="search"
        placeholder={label}
        name=""
        value={searchTerm}
        id=""
      />

      {searchTerm.length > 2 && (
        <div
          style={{ bottom: 60, maxHeight: 250, overflowY: "auto" }}
          className="dropdown-content border bg-white shadow rounded-3 position-absolute w-100"
        >
          <div
            onClick={closeSelect}
            className="d-flex text-muted px-3 py-3 border-bottom align-items-center justify-content-between pointer"
          >
            <p className="mb-0 text-end">Results</p>
            <IoCloseOutline size={22} />
          </div>
          {results.length > 0 ? (
            results.map((result, index) => {
              return (
                <div
                  key={result.uid}
                  onClick={() => handlePick(result.uid)}
                  className="result-card px-3 py-2 w-100"
                >
                  <p className="py-1 mb-0 text-muted">{result.name}</p>
                </div>
              );
            })
          ) : (
            <div onClick={handlePick} className="result-card px-3 py-2 w-100">
              <p className="py-1 mb-0">No Result</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownSearch;
