import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

function TaskOverview({ userRole = "user", totalTasks }) {
  const navigate = useNavigate();

  const handleClickTask = (taskID) => {
    if (userRole === "admin") {
      navigate(`/home/task/${taskID}`);
    }
  };

  return (
    // CONTAINER
    <div className="task-overview-container mt-2 mb-3">
      <div className="d-flex align-items-center justify-content-between">
        <p className="mb-1 text-muted fw-semibold fs-6 d-none d-md-inline-block">
          Tasks ({totalTasks})
        </p>
        <div className="text-muted fs-8 d-inline-flex d-md-none">
          <p className="mb-0 me-3">
            <span
              className="bg-success d-inline-block me-1 rounded-circle shadow-sm"
              style={{ width: 10, height: 10 }}
            ></span>
            Done
          </p>
          <p className="mb-0">
            <span
              className="bg-secondary d-inline-block me-1 rounded-circle shadow-sm"
              style={{ width: 10, height: 10 }}
            ></span>
            Pending
          </p>
        </div>
      </div>
      <div className="task-overview-table d-flex flex-column align-items-center">
        {/* HEADER  */}
        <div className="task-overview-header bg-body row mt-1 w-100">
          <div className="col col-10 col-md-10 col-lg-5 py-2">
            <p className="mb-0 txt-black fs-7 fw-semibold">
              Title & Description
            </p>
          </div>
          <div className="col col-lg-3 d-lg-flex d-none py-2">
            <p className="mb-0 fs-7 txt-black fw-semibold">Assignee</p>
          </div>
          <div className="col col-lg-2 d-lg-flex d-none py-2">
            <p className="mb-0 fs-7 txt-black fw-semibold">Created at</p>
          </div>
          <div className="col pointer col-2 col-md-2 d-none d-md-flex py-2 d-flex center">
            <p className="mb-0 fs-7 text-center txt-black fw-semibold">
              Status
            </p>
          </div>
        </div>

        {/* BODY  */}

        {/* SAMPLE ROW  */}

        <div className="task-overview-row row w-100">
          <div className="col pe-1 col-12 col-md-10 col-lg-5 border">
            <Accordion
              sx={{
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <span className="p-2 rounded-3">
                    <MdExpandMore size={18} />
                  </span>
                }
                sx={{ padding: 0 }}
              >
                <div className="w-100">
                  <p
                    onClick={() => handleClickTask(53)}
                    className={`mb-1 ${
                      userRole == "admin" && "link-hover"
                    } d-inline-block text-muted normal-text-size fw-medium`}
                  >
                    <span
                      className="bg-secondary d-md-none d-inline-block me-2 rounded-circle shadow-sm"
                      style={{ width: 12, height: 12 }}
                    ></span>
                    Caption for day 2 Takraw and badminton girls
                  </p>
                  <p className="mb-0 text-muted fs-7">Due: 12-12-12</p>
                </div>
              </AccordionSummary>
              <AccordionDetails sx={{ paddingInline: 0 }}>
                <div className="task-description text-muted fs-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis quia odio nisi, laboriosam impedit quasi
                  praesentium vitae officiis quis corporis!
                </div>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="col col-lg-3 d-lg-flex flex-lg-column d-none border py-2">
            <div className="d-flex align-items-center assignee-member mb-1">
              <img
                style={{ width: 30, height: 30, objectFit: "cover" }}
                className="me-2 rounded-circle shadow-sm"
                src="images/meme.jpg"
                alt=""
              />
              <div className="info">
                <p className="mb-0 txt-black fs-7">Renz Patrick angelo Bison</p>
                <p className="mb-0 fs-8 text-secondary">
                  Associate editor in chief
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-2 d-lg-flex d-none border py-2">
            <p className="mb-0 text-muted fs-7">11/22/25</p>
          </div>
          <div className="col col-md-2 d-md-flex d-none py-2 align-items-start justify-content-center border">
            <p className="mb-0 bg-success px-3 rounded-pill text-white">Done</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskOverview;
