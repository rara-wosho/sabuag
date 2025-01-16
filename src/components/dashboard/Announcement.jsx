import AnnouncementCard from "./AnnouncementCard";
import { TiPinOutline } from "react-icons/ti";

const Announcement = () => {
  return (
    <div
      data-aos="fade-left"
      className="w-100 shadow-sm mb-3 rounded-4 bg-white-linear px-3 py-3"
    >
      <div className="d-flex mb-2 align-items-center justify-content-between">
        <div className="d-flex">
          <TiPinOutline size={23} />
          <p className="fs-6 mb-0 ms-1 txt-primary3 fw-semibold">
            Announcements
          </p>
        </div>
        <p className="fs-6 mb-0 txt-primary3 pointer">See All</p>
      </div>
      <AnnouncementCard />
    </div>
  );
};

export default Announcement;
