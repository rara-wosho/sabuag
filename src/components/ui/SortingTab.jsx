import { IoArrowDownOutline, IoArrowUp } from "react-icons/io5";
import { CgCalendarDates } from "react-icons/cg";

function SortingTab({ containerStyle, setSortingMethod, sortingMethods }) {
  const handleSorting = (field) => {
    const newsort = sortingMethods.sort === "desc" ? "asc" : "desc";
    console.log("sorting", newsort, field);
    setSortingMethod({ field, sort: newsort });
  };

  return (
    <div className={`${containerStyle} sorting-tab d-flex align-items-center`}>
      <div
        onClick={() => handleSorting("createdAt")}
        className="pointer tab rounded-1 me-2"
      >
        <p className="sorting-tab-label mb-0 ps-1 normal-text-size">Date</p>
        <div className="px-1 icon">
          <IoArrowDownOutline size={14} />
        </div>
      </div>
      <div
        onClick={() => handleSorting("title")}
        className="pointer tab rounded-1"
      >
        <p className="sorting-tab-label mb-0 ps-1 normal-text-size">Abc</p>
        <div className="px-1 icon">
          <IoArrowUp size={14} />
        </div>
      </div>
      {/* <div className="pointer tab rounded-1">
        <p className="d-none d-md-inline-block sorting-tab-label mb-0 ps-1 normal-text-size">
          Date Range
        </p>
        <div className="px-1 icon">
          <CgCalendarDates />
        </div>
      </div> */}
    </div>
  );
}

export default SortingTab;
