import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const DropdownSearch = ({
  label,
  inputStyle,
  containerStyle,
  handleSearch,
  searchTerm,
  results,
  handlePick,
}) => {
  return (
    <div
      className={`${containerStyle} dropdown-search d-flex align-items-center pe-3 position-relative`}
    >
      <input
        onChange={handleSearch}
        style={{ backgroundColor: "transparent", paddingBlock: 12 }}
        className={`${inputStyle} w-100 border-0`}
        type="search"
        placeholder={label}
        name=""
        value={searchTerm}
        id=""
      />
      <div className="icon">
        <FaAngleDown color="gray" />
      </div>

      {searchTerm.length > 2 && (
        <div
          style={{ top: 60, maxHeight: 200, overflowY: "auto" }}
          className="dropdown-content bg-white-linear shadow rounded-3 position-absolute w-100"
        >
          {results.length > 0 ? (
            results.map((result, index) => {
              return (
                <div
                  key={result.uid}
                  onClick={() => handlePick(result.uid)}
                  className="result-card px-3 py-2 w-100"
                >
                  <p className="py-1 mb-0">{result.name}</p>
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
