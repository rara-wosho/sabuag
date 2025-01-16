import { useState } from "react";
import SortingTab from "../../components/ui/SortingTab";
import SearchbarOutline from "../../components/ui/SearchbarOutline";
import MytaskContainer from "../../components/my-tasks/MytaskContainer";

const MyTasks = () => {
  const [statusFilter, setFilterStatus] = useState("pending");

  const handleStatusFilter = (filter) => {
    setFilterStatus(filter);
  };
  return (
    <div className="mytask-page bg-white-linear min-h-vh rounded-4 px-3 px-lg-5 pt-lg-4 pb-lg-4">
      {/* status tabs  */}
      <div className="d-flex align-items-center mb-3 mt-2">
        <div
          onClick={() => handleStatusFilter("pending")}
          className={`${
            statusFilter === "pending" && "active"
          } mytask-tab pe-3 pointer`}
        >
          <p className="mb-0">Pending</p>
        </div>
        <div
          onClick={() => handleStatusFilter("done")}
          className={`${
            statusFilter === "done" && "active"
          } mytask-tab pe-3 pointer`}
        >
          <p className="mb-0">Done</p>
        </div>
        <div
          onClick={() => handleStatusFilter("all")}
          className={`${
            statusFilter === "all" && "active"
          } mytask-tab pe-3 pointer`}
        >
          <p className="mb-0">All</p>
        </div>
      </div>

      {/* filter tabs  */}
      <div className="row mb-3 row-cols-1 row-cols-md-2">
        <div className="col mb-2 mb-md-0 px-2">
          <SearchbarOutline placeholder="Search task" />
        </div>
        <div className="col d-flex align-items-center justify-content-start justify-content-md-end px-2">
          <SortingTab />
        </div>
      </div>

      {/* content  */}
      <MytaskContainer />
    </div>
  );
};

export default MyTasks;
