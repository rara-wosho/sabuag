import MemberCard from "./MemberCard";
import { LuUsersRound } from "react-icons/lu";

const MemberWidget = () => {
  return (
    <div
      data-aos-delay="150"
      data-aos="fade-left"
      className="w-100 shadow-sm rounded-4 bg-white-linear px-3 py-3"
    >
      <div className="d-flex mb-3 align-items-center justify-content-between">
        <div className="d-flex">
          <LuUsersRound size={20} />
          <p className="fs-6 mb-0 ms-1 txt-primary3 fw-semibold">
            Members (23)
          </p>
        </div>
        <p className="fs-6 mb-0 txt-primary3 pointer">See All</p>
      </div>
      <MemberCard
        name="Renz Patrick Angelo Bison"
        position="Social Media Manager"
      />
      <MemberCard name="Cokyjenny Tejano" position="Photojournalist" />
      <MemberCard name="Sanny Aranas" position="Photojournalist" />
    </div>
  );
};

export default MemberWidget;
