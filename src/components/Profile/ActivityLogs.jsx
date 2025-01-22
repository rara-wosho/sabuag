import { useState } from "react";
import ActivityCard from "./ActivityCard";

import empty from "../../assets/images/empty-pana.png";

const ActivityLogs = () => {
  const [logs, setLogs] = useState([]);
  return (
    <div className="bg-white shadow-sm rounded-4 py-3">
      <p className="mb-2 text-muted  px-3 fs-7 fw-semibold">Activity Logs</p>

      {logs.length > 0 ? (
        <>
          <ActivityCard date="12/12/25" desc="You changed your password." />

          <ActivityCard date="12/12/25" desc="You submitted a task." />

          <ActivityCard
            date="12/12/25"
            desc="You added an item to a collection."
          />

          <ActivityCard date="12/12/25" desc="You changed your password." />
        </>
      ) : (
        <div className="d-flex center flex-column p-2 border-top">
          <p className="mb-0 px-3 text-secondary fs-7 mt-2">Empty Log</p>
          <img
            style={{ width: 100, objectFit: "contain", opacity: 0.5 }}
            src={empty}
            alt="empty"
          />
        </div>
      )}
    </div>
  );
};

export default ActivityLogs;
