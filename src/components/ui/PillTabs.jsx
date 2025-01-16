import React from "react";

function PillTabs({
  active,
  handlePillTab,
  label1,
  label2,
  label3,
  handle1,
  handle2,
  handle3,
}) {
  return (
    <div className="pill-tabs-container d-flex align-items-center py-2">
      <div
        onClick={() => handlePillTab(label1)}
        className={`${
          active === label1 && "active shadow-sm"
        } pill-tab rounded-2 text-secondary`}
      >
        <p className="normal-text-size mb-0">{label1}</p>
      </div>
      <div
        onClick={() => handlePillTab(label2)}
        className={`${
          active === label2 && "active shadow-sm"
        } pill-tab rounded-2 text-secondary`}
      >
        <p className="normal-text-size mb-0">{label2}</p>
      </div>
      <div
        onClick={() => handlePillTab(label3)}
        className={`${
          active === label3 && "active shadow-sm"
        } pill-tab rounded-2 text-secondary`}
      >
        <p className="normal-text-size mb-0">{label3}</p>
      </div>
    </div>
  );
}

export default PillTabs;
