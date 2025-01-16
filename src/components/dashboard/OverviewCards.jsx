import WidgetCard from "./WidgetCard";

import { MdOutlinePendingActions } from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";
import { GoProject } from "react-icons/go";
import { PiPackage } from "react-icons/pi";

const OverviewCards = () => {
  return (
    <div
      data-aos="fade-down"
      className="w-100 rounded-3 mb-2 d-flex flex-column align-items-center"
    >
      {/* <p className="fs-6 mb-2 txt-primary4 fw-semibold text-start d-block border w-100">
        Overview Cards
      </p> */}
      <div className="row row-cols-2 row-cols-md-4 px-0 px-md-0 w-100">
        <div className="col mb-2 ps-0 pe-1">
          <WidgetCard
            bgIcon={<MdOutlinePendingActions size={80} />}
            icon={<MdOutlinePendingActions color="white" size={22} />}
            label="Pending Tasks"
          />
        </div>
        <div className="col mb-2 pe-0 ps-1 pe-md-1">
          <WidgetCard
            bgIcon={<RiTodoLine size={80} />}
            icon={<RiTodoLine color="white" size={22} />}
            label="All Tasks"
          />
        </div>

        <div className="col mb-2 ps-md-1 pe-md-1 ps-0 pe-1">
          <WidgetCard
            bgIcon={<GoProject size={80} />}
            icon={<GoProject color="white" size={22} />}
            label="Projects"
          />
        </div>
        <div className="col mb-2 ps-md-1 pe-md-0 ps-1 pe-0">
          <WidgetCard
            bgIcon={<PiPackage size={80} />}
            icon={<PiPackage color="white" size={22} />}
            label="Collections"
          />
        </div>
      </div>
    </div>
  );
};

export default OverviewCards;
