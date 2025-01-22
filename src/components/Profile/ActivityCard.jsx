import React from "react";

function ActivityCard({ date, desc }) {
  return (
    <div className="d-flex flex-column bg-hover px-3 fs-7 pb-2">
      <p className="mb-1 fw-semibold text-secondary border-top pt-2">{date}</p>
      <p className="mb-0 text-secondary">{desc}</p>
    </div>
  );
}

export default ActivityCard;
