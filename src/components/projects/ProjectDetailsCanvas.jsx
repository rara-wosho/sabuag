import { Drawer, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import AssigneeCard from "./AssigneeCard";

import { IoClose } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

import { MdPublic } from "react-icons/md";
import { RiPushpinLine } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";

function ProjectDetailsCanvas({ toggle, openCanvas }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Drawer
      sx={{ width: 500 }}
      anchor={isMobile ? "bottom" : "right"}
      size="md"
      open={openCanvas}
      onClose={toggle}
      PaperProps={{
        sx: {
          width: "100%",
          maxWidth: 600,
          backgroundColor: "transparent",
          border: "none",
        },
      }}
    >
      <div
        style={{ height: isMobile ? "93vh" : "100vh", overflowY: "auto" }}
        className={`${
          isMobile && "rounded-top-4 pb-5"
        } bg-white-linear p-2 p-sm-3 w-100`}
      >
        <div
          onClick={toggle}
          className="pointer txt-primary3 d-flex align-items-center py-2"
        >
          <IoClose size={25} />
        </div>
        <div className="project-canvas-header">
          <h5 className="fs-5 txt-primary3 text-center py-2">
            Week of welcome day 3
          </h5>
          <div className="d-flex align-items-center justify-content-center">
            <div
              style={{ width: 60 }}
              className=" pointer icon p-1 mx-1 d-flex center flex-column"
            >
              <FiEdit3 />
              <p className="mb-0 text-muted mt-2 text-center fs-7">Edit</p>
            </div>
            <div
              style={{ width: 60 }}
              className=" pointer icon p-1 mx-1 text-muted d-flex center flex-column"
            >
              <RiPushpinLine />
              <p className="mb-0 mt-2 text-center fs-7">Pin</p>
            </div>
            <div
              style={{ width: 60 }}
              className=" pointer icon p-1 mx-1 text-muted d-flex center flex-column"
            >
              <MdPublic />
              <p className="mb-0 mt-2 text-center fs-7">Privacy</p>
            </div>
            <div
              style={{ width: 60 }}
              className=" pointer icon p-1 mx-1 text-danger d-flex center flex-column"
            >
              <MdDeleteOutline />
              <p className="mb-0 mt-2 text-center fs-7">Delete</p>
            </div>
          </div>
        </div>
        <div className="project-canva-body py-2">
          <p className="mb-0 text-center fs-7 text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            excepturi nesciunt dolore velit nemo optio nulla repudiandae
          </p>
          <div className="assignee-section mt-4 px-2">
            <div className="d-flex mb-2 align-items-center justify-content-between">
              <p className="fw-medium mb-0  text-secondary fs-7">
                In this project
              </p>
            </div>
            <AssigneeCard />
            <AssigneeCard />
            <AssigneeCard />
          </div>
        </div>
      </div>
    </Drawer>
  );
}

export default ProjectDetailsCanvas;
