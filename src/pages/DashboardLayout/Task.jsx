import { useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { RiLink } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";

import PrimaryButton from "../../components/ui/PrimaryButton";
import TextField from "../../components/ui/TextField";

function Task() {
  const { taskID } = useParams();

  return (
    <div className="task-page bg-white min-h-vh rounded-4 px-3 px-lg-5 pt-lg-4 pt-2 pb-lg-4">
      <div className="task-page-header mb-2 pb-2 pt-2 d-flex align-items-center">
        <div className="p-2 text-muted me-1 me-md-2 bg-hover rounded-circle d-flex center">
          <FaAngleLeft />
        </div>
        <p className="mb-0 fs-7 text-white bg-secondary px-2 rounded-pill">
          Pending
        </p>

        <PrimaryButton
          containerStyle="px-3 shadow-sm ms-auto rounded-2"
          label="Save"
        />
      </div>
      <div className="task-page-body">
        <div className="d-flex mb-2 justify-content-center flex-column">
          <p className="mb-0 txt-black fw-medium">
            Make caption for day 2 events: {taskID}
          </p>
          <p className="mb-0 fs-8 text-muted">Jan 12 2025</p>
        </div>
        <p className="mb-3 text-secondary fs-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          placeat mollitia nam nihil animi dolor.
        </p>
        <p className="mb-3 fs-7 shadow-sm text-white rounded-2 py-1 px-2 d-inline-flex align-items-center bg-secondary">
          <span className="fw-medium me-1">Deadline:</span>
          <span className="">12/22/22</span>
        </p>

        <div className="row">
          <div className="col-12 col col-md-6">
            <TextField icon={<RiLink />} label="Attach Link" />
            <TextField icon={<FaRegComment />} label="Add Comment" rows={2} />
          </div>
        </div>
        <p className="mb-2 text-muted fs-7 fw-semibold">Content</p>
        <TextField rows={20} label="Type here..." />
      </div>
    </div>
  );
}

export default Task;
