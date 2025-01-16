import Searchbar from "../../components/ui/Searchbar";
import OutlineButton from "../../components/ui/OutlineButton";
import MemberCircles from "../../components/ui/MemberCircles";
import AddTaskForm from "../../components/projects/AddTaskForm";
import TaskOverview from "../../components/projects/TaskOverview";
import PillTabs from "../../components/ui/PillTabs";
import ProjectDetailsCanvas from "../../components/projects/ProjectDetailsCanvas";
import SortingTab from "../../components/ui/SortingTab";
import { Menu, MenuItem, Button } from "@mui/material";

import { Link } from "react-router-dom";

import { FiFilter } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { FaAngleLeft } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { RiPushpinLine, RiPushpinFill } from "react-icons/ri";
import { FiLock } from "react-icons/fi";
import { MdPublic } from "react-icons/md";
import { useState } from "react";

const Project = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openCanvas, toggleCanvas] = useState(false);

  // TOGGLE MUI MENU
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggleCanvas = () => {
    toggleCanvas((prev) => !prev);
  };
  return (
    <div className="project-page bg-white min-h-vh rounded-4 px-3 px-lg-5 pt-lg-4 pb-lg-4">
      {/* PROJECT DETAILS OFF CANVAS  */}
      <ProjectDetailsCanvas
        toggle={handleToggleCanvas}
        openCanvas={openCanvas}
      />

      <AddTaskForm setOpenDialog={setOpenDialog} openDialog={openDialog} />
      <div className="project-header px-0 pb-2 rounded-3 pt-3 pb-2 position-relative d-flex flex-column">
        <div className="upper-side py-2 py-lg-0 d-flex align-items-center">
          <Link to="/home/projects">
            <span className="pe-1 pointer py-1 rounded-2 txt-primary3">
              <FaAngleLeft size={20} />
            </span>
          </Link>
          <h4 className="txt-primary3 project-header-title mb-0">
            Week of Welcome
          </h4>
          {/* <MemberCircles /> */}
          <div className="right ms-auto d-flex align-items-center">
            <div className="d-none d-md-inline-block">
              {true && <RiPushpinFill color="rgb(150,150,150)" size={15} />}
            </div>
            <div className="d-none d-md-inline-block ms-3">
              {true ? (
                <MdPublic color="rgb(150,150,150)" size={15} />
              ) : (
                <FiLock color="rgb(150,150,150)" size={13} />
              )}
            </div>
            <div
              onClick={handleToggleCanvas}
              className="option pointer ms-3 d-inline-block"
            >
              <HiDotsHorizontal size={24} />
            </div>
          </div>
        </div>
        <div
          style={{ gap: 8 }}
          className="d-flex align-items-center justify-content-between mt-2 mt-md-3 px-md-0"
        >
          <div className="d-inline-block" onClick={() => setOpenDialog(true)}>
            <OutlineButton
              icon={<GoPlus size={20} />}
              containerStyle="d-none d-md-inline-block rounded-3 py-2 ps-3 pe-4"
              label="Add Task"
            />
            <div
              style={{ width: 38, height: 38 }}
              className="d-flex d-md-none center rounded-3 shadow py-2 center bg-primary-linear"
            >
              <LuPlus size={20} color="rgb(250,250,250)" />
            </div>
          </div>
          <Searchbar
            containerStyle="w-100 bg-body2 rounded-3"
            inputStyle="py-2 px-3"
            placeholder="Search Task"
            buttonLabel="Search"
          />
        </div>
      </div>

      <div className="project-body">
        <div
          style={{ overflowX: "auto" }}
          className="d-flex hide-thumb py-1 align-items-center justify-content-start justify-content-md-end"
        >
          <div
            style={{ paddingInline: 8 }}
            className="rounded-1 text-muted bg-body me-2"
          >
            <div
              className="py-1 px-2 d-flex align-items-center pointer"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <p className="mb-0 me-1 normal-font-text">Done</p>
              <div className="icon">
                <FiFilter size={12} />
              </div>
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
          <SortingTab />
        </div>
        <TaskOverview />
      </div>
    </div>
  );
};

export default Project;
