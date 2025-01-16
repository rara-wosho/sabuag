import { CiCalendar } from "react-icons/ci";
import { MdOutlineTaskAlt } from "react-icons/md";
import { RiPushpinLine, RiPushpinFill } from "react-icons/ri";
import ProgressBar from "./ProgressBar";

import { Link } from "react-router-dom";

const ProjectCard = ({ value, toggleList, title }) => {
  return (
    <Link to="/home/project">
      <div
        className={`w-100 project-card pointer ${
          toggleList
            ? "rounded-0 mb-2 list"
            : "bg-body2 px-3 shadow-sm border rounded-3 mb-1"
        } py-2`}
      >
        <div className="project-card-header">
          <div className="d-flex align-items-center">
            <p className="project-card-title mb-0 text-muted fw-semibold text-truncate">
              {title ? title : "Untitled"}
            </p>
            {toggleList && (
              <p className="mb-0 ms-2 border fs-8  bg-secondary px-1 rounded-1 text-white">
                {value}%
              </p>
            )}
            <div className={`pin-icon ${toggleList ? "ms-1" : "ms-auto"} ps-2`}>
              {false ? (
                <RiPushpinFill color="#3d38a2" />
              ) : (
                <RiPushpinLine color="gray" />
              )}
            </div>
          </div>
          {!toggleList && (
            <>
              <div className="d-flex align-items-center mt-2">
                <CiCalendar size={13} />
                <p className="ms-1 date-created mb-0 fs-8 text-secondary">
                  12/12/24
                </p>
              </div>
              <div className="d-flex align-items-center mb-2  ">
                <MdOutlineTaskAlt color="rgb(90,90,90)" size={13} />
                <p className="ms-1 date-created mb-0 fs-8 text-secondary">
                  10 tasks
                </p>
              </div>
            </>
          )}
        </div>
        <div className="project-card-body py-0">
          <p className="description-text text-secondary pe-2 fs-7 text-truncate mb-0">
            This is a sample description for this project. you must do it on or
            before the allocated time.
          </p>
          {!toggleList && (
            <div className="project-card-footer mt-2">
              <ProgressBar value={value} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
