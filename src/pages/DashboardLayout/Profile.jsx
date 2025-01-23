import { useState } from "react";
import pic from "../../assets/images/meme.jpg";
import { CgProfile } from "react-icons/cg";
import { GoShieldLock } from "react-icons/go";
import { FiMoreHorizontal } from "react-icons/fi";

import ProfileSection from "../../components/Profile/ProfileSection";
import DataSheetSection from "../../components/Profile/DataSheetSection";
import CredentialSection from "../../components/Profile/CredentialSection";
import ActivityLogs from "../../components/Profile/ActivityLogs";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="profile-page min-h-vh">
      <div className="row px-1">
        {/* LEFT COL - User profile  */}
        <div className="col col-12 col-lg-8 px-2 mb-3 mb-lg-0">
          {/* PROFILE HEADER */}
          <div className="profile-header bg-white rounded-4 py-3 py-md-4 px-md-5 px-3 w-100 shadow-sm mb-3 d-flex align-items-center">
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

            <div
              style={{ maxWidth: 500 }}
              className="row ms-1 w-100 row-cols-1"
            >
              <div className="col">
                <p className="mb-0 fw-semibold text-muted">
                  Israel De Vera, 20
                </p>
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

          {/* PROFILE TABS  */}
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
              onClick={() => changeTab("data-sheet")}
              className={`${
                activeTab === "data-sheet"
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

          <div className="profile-body px-3 px-md-5 py-3 py-md-4 rounded-bottom-4 bg-white shadow-sm w-100">
            {activeTab === "profile" && <ProfileSection />}
            {activeTab === "credentials" && <CredentialSection />}
            {activeTab === "data-sheet" && <DataSheetSection />}
          </div>
        </div>

        {/* RIGHT COL - activity logs */}
        <div className="col col-12 col-lg-4 px-2">
          <ActivityLogs />
        </div>
      </div>
    </div>
  );
};

export default Profile;
