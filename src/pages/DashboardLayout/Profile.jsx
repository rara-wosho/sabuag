import { useState } from "react";
import pic from "../../assets/images/meme.jpg";
import { CgProfile } from "react-icons/cg";
import { GoShieldLock } from "react-icons/go";
import { FiMoreHorizontal } from "react-icons/fi";

import ProfileSection from "../../components/Profile/ProfileSection";
import CredentialSection from "../../components/Profile/CredentialSection";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="profile-page min-h-vh d-flex justify-content-center">
      <div
        style={{ maxWidth: 800 }}
        className="w-100 h-100 d-flex flex-column align-items-center"
      >
        <div className="profile-header bg-white rounded-4 py-3 py-md-4 px-md-5 px-3 w-100 shadow-sm mb-2 d-flex align-items-center">
          <div className="d-flex flex-column align-items-center">
            <img
              style={{ width: 80, aspectRatio: 1 / 1 }}
              className="rounded-circle shadow-sm mb-2"
              src={pic}
              alt=""
            />
            <p className="mb-0 fw-semibold text-muted fs-8 text-center">
              Your Avatar
            </p>
          </div>
          <div style={{ maxWidth: 500 }} className="row ms-1 w-100 row-cols-1">
            <div className="col">
              <p className="mb-0 fw-semibold text-muted">Israel De Vera, 20</p>
              <p className="mb-0 text-secondary fs-8">Editorial Cartoonist</p>
            </div>
            <div className="col mt-3 d-flex align-items-center justify-content-start mb-2">
              <button className="btn text-uppercase w-100 btn-outline-primary fs-8 fw-semibold">
                Update
              </button>
              <button className="btn text-uppercase w-100 btn-outline-danger fs-8 fw-semibold ms-2">
                Remove
              </button>
            </div>
          </div>
        </div>

        <div className="profile-tabs d-flex justify-content-center text-muted rounded-top-4 bg-white w-100 px-3 px-md-5 pt-3 border-bottom pb-3 shadow-sm">
          <div
            onClick={() => changeTab("profile")}
            className={`${
              activeTab === "profile"
                ? "bg-primary-linear text-white"
                : "bg-white"
            } profile-tab-tab mx-1 mx-md-2 pointer fs-8 d-inline-block rounded py-1 px-2 px-md-3 py-md-2`}
          >
            <p
              style={{ letterSpacing: 1 }}
              className="mb-0 d-flex align-items-center fw-semibold text-uppercase"
            >
              <CgProfile className="me-1" />
              Profile
            </p>
          </div>
          <div
            onClick={() => changeTab("credentials")}
            className={`${
              activeTab === "credentials"
                ? "bg-primary-linear text-white"
                : "bg-white"
            } profile-tab-tab mx-1 mx-md-2 pointer fs-8 d-inline-block rounded py-1 px-2 px-md-3 py-md-2`}
          >
            <p
              style={{ letterSpacing: 1 }}
              className="mb-0 d-flex align-items-center fw-semibold text-uppercase"
            >
              <GoShieldLock className="me-1" />
              Account
            </p>
          </div>
          <div
            onClick={() => changeTab("others")}
            className={`${
              activeTab === "others"
                ? "bg-primary-linear text-white"
                : "bg-white"
            } profile-tab-tab mx-1 mx-md-2 pointer fs-8 d-inline-block rounded py-1 px-2 px-md-3 py-md-2`}
          >
            <p
              style={{ letterSpacing: 1 }}
              className="mb-0 d-flex align-items-center fw-semibold text-uppercase"
            >
              <FiMoreHorizontal className="me-1" />
              Others
            </p>
          </div>
        </div>

        {activeTab === "profile" && <ProfileSection />}
        {activeTab === "credentials" && <CredentialSection />}
      </div>
    </div>
  );
};

export default Profile;
