import { useState } from "react";

const AnnouncementCard = () => {
  const [shrink, setShrink] = useState(true);

  return (
    <div
      onClick={() => setShrink((e) => !e)}
      className="border-top pt-2 announcement-card mb-3"
    >
      <div className="d-flex align-items-center mb-2">
        <img
          style={{ width: 50, height: 50, borderRadius: 10, marginRight: 12 }}
          src="images/sabuag-mems.jpeg"
          alt=""
        />
        <div>
          <p className="mb-0 fw-semibold text-muted">Israel De Vera</p>
          <p className="mb-0 fs-7 text-secondary">12-22-24</p>
        </div>
        {/* <div
          className={`${
            shrink && "toggle"
          } d-flex align-items-center justify-content-center ms-auto px-2 announcement-drop-icon`}
        >
          <FaAngleDown size={15} />
        </div> */}
      </div>
      <p className="mb-1 text-muted fw-medium">New member announcement</p>
      <p
        className={`mb-0 text-muted announcement-body-text ${
          shrink ? "shrink" : ""
        }`}
      >
        You may support your candidate through like, share and comment. Online
        Voting Mechanics: 1. Show your support to your favorite You may support
        your candidate through like, share and comment. Online Voting Mechanics:
        1. Show your support to your favorite You may support your candidate
        through like, share and comment. Online Voting Mechanics: 1. Show your
        support to your favorite You may support your candidate through like,
        share and comment. Online Voting Mechanics: 1. Show your support to your
        favorite
      </p>
    </div>
  );
};

export default AnnouncementCard;
