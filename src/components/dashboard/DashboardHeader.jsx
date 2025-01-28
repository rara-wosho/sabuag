import { FaRegBell } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import ToggleDarkmode from "../ui/ToggleDarkmode";
import pic from "../../assets/images/meme.jpg";

const DashboardHeader = ({ activePage, setShowSidebar, title }) => {
  return (
    <div
      // data-aos="fade-up"
      className="dashboard-header px-3 px-lg-5 pt-3 mt-0 mt-md-2 pb-2 pb-md-3 pt-md-2 d-flex align-items-center justify-content-between w-100"
    >
      <div className="left-col d-flex align-items-center">
        <div
          className="me-2 d-lg-none"
          onClick={() => setShowSidebar((prev) => !prev)}
        >
          <HiMiniBars3BottomLeft color="white" size={23} />
        </div>
        <div className="d-flex flex-column">
          <p className="mb-0 fw-semibold txt-white dashboard-header-label">
            {title}
          </p>
          <div className="d-md-flex d-none txt-light-white align-items-center">
            <FaFacebookF size={12} />
            <p className="mb-0 ms-1 txt-light-white fs-7">
              campus Publication SABUAG
            </p>
          </div>
        </div>
      </div>
      <div className="right-col d-flex align-items-center">
        <ToggleDarkmode />
        <div className="dashboard-header-icon shadow-sm txt-white pointer d-flex align-items-center justify-content-center rounded-3">
          <MdOutlineMail className="icon" size={22} />
        </div>
        <Link
          to="notifications"
          className={`${
            activePage == "notifications" ? "bg-secondary" : ""
          } dashboard-header-icon notification position-relative shadow-sm pointer d-flex align-items-center justify-content-center rounded-3`}
        >
          <span
            style={{ width: 8, height: 8, top: -1, right: -1 }}
            className="position-absolute bg-success rounded-circle shadow-sm"
          ></span>
          <FaRegBell
            color={activePage == "notifications" ? "rgb(250,250,250)" : ""}
            className="icon txt-white"
            size={17}
          />
        </Link>
        <div className="dashboard-header-date text-white border ms-3 py-2 rounded-2 px-3 align-items-center shadow d-none d-md-flex">
          <FiCalendar />
          <div className="mb-0 ms-2 fs-7">12 / 23 / 2024</div>
        </div>
        <div className="profile-wrapper d-md-none d-flex center ms-2">
          <img
            style={{ width: 28, aspectRatio: 1 / 1, objectFit: "contain" }}
            src={pic}
            alt="profile"
            className="rounded-circle shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
