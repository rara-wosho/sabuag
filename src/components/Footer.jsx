import sabuagLogo from "../assets/logos/official-sabuag.png";
import { FiFacebook } from "react-icons/fi";
import { MdOutlineMailOutline, MdEmail } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { IoCallOutline, IoLogoFacebook } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      id="footer"
      className="bg-white-linear px-3 px-lg-5 py-3 py-lg-4 rounded-top-4 mt-3 d-flex flex-column center"
    >
      <div className="row mb-2 w-100 pt-2 row-cols-1 row-cols-md-2">
        <div className="col px-1 mb-2 d-flex flex-column align-items-center align-items-md-start">
          <div className="mb-2 d-flex align-items-end">
            <img
              style={{ width: 30, height: 30, objectFit: "contain" }}
              src={sabuagLogo}
              alt="sabuag-logo"
              className="me-1"
            />
            <p className="mb-0 txt-black fw-semibold text-uppercase">sabuag</p>
          </div>
          <p className="mb-0 text-secondary fs-7 text-center text-md-start">
            Sustainable and Achievable Broadcasting with Unbiased and Attainable
            Goals
          </p>
        </div>
        <div className="col px-1 mb-2 d-flex align-items-center justify-content-center justify-content-md-end">
          <div className="d-flex p-1 mx-1 center flex-column text-muted">
            <div
              style={{ width: 36, aspectRatio: 1 / 1 }}
              className="shadow-sm bg-secondary txt-white d-flex center rounded-circle"
            >
              <FiFacebook size={24} />
            </div>
            <p className="mb-0 fs-9 mt-1">Page</p>
          </div>
          <div className="d-flex p-1 mx-1 center text-muted flex-column">
            <div
              style={{ width: 36, aspectRatio: 1 / 1 }}
              className="shadow-sm bg-secondary txt-white d-flex center rounded-circle"
            >
              <MdOutlineMailOutline size={24} />
            </div>
            <p className="mb-0 fs-9 mt-1">Email</p>
          </div>
          <div className="d-flex p-1 mx-1 center text-muted flex-column">
            <div
              style={{ width: 36, aspectRatio: 1 / 1 }}
              className="shadow-sm bg-secondary txt-white d-flex center rounded-circle"
            >
              <HiOutlineBookOpen size={24} />
            </div>
            <p className="mb-0 fs-9 mt-1">About</p>
          </div>
          <div className="d-flex p-1 mx-1 center text-muted flex-column">
            <div
              style={{ width: 36, aspectRatio: 1 / 1 }}
              className="shadow-sm bg-secondary txt-white d-flex center rounded-circle"
            >
              <IoCallOutline size={23} />
            </div>
            <p className="mb-0 fs-9 mt-1">Contact</p>
          </div>
        </div>
      </div>

      <div className="row border-top pt-3 w-100 row-cols-1 row-cols-md-2">
        <div className="mb-2 col px-1 d-flex flex-column align-items-center align-items-md-start">
          <p className="mb-1 fs-8 text-muted">Designed and Developed by</p>
          <p className="mb-0 fs-8 text-muted">
            &copy;<span className="txt-primary3">Israel De Vera@2025</span>. All
            Rights Reserved.
          </p>
        </div>
        <div className="mb-2 col px-1 d-flex align-items-center justify-content-center justify-content-md-end">
          <div className="text-muted px-1">
            <FaUserTie size={17} />
          </div>
          <div className="text-muted px-1">
            <IoLogoFacebook size={22} />
          </div>
          <div className="text-muted px-1">
            <RiInstagramFill size={22} />
          </div>
          <div className="text-muted px-1 me-1">
            <MdEmail size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
