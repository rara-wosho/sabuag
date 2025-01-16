import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { FaListUl } from "react-icons/fa6";
import emptyImage from "../../assets/images/Empty-pana.png";

import OutlineButton from "../../components/ui/OutlineButton";
import Searchbar from "../../components/ui/Searchbar";
import ProjectContainer from "../../components/projects/ProjectContainer";
import TabsContainer from "../../components/projects/TabsContainer";
import ProjectForm from "../../components/projects/ProjectForm";
import PinnedProjects from "../../components/projects/PinnedProjects";
import SortingTab from "../../components/ui/SortingTab";

const ProjectList = () => {
  const [projects, setProjects] = useState([1]);
  const [toggleList, setToggleList] = useState(() => {
    const viewMode = localStorage.getItem("sabuag-view-mode") || "grid";
    return viewMode == "list";
  });
  const [activeTab, setActiveTab] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const handleToggleList = () => {
    if (toggleList) {
      setToggleList(false);
      localStorage.setItem("sabuag-view-mode", "grid");
    } else {
      setToggleList(true);
      localStorage.setItem("sabuag-view-mode", "list");
    }
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  const handleCreateProject = () => setOpenModal(true);
  return (
    <div className="bg-white-linear min-h-vh rounded-4 px-3 px-lg-5 pt-lg-4 pb-lg-4">
      <ProjectForm closeModal={closeModal} openModal={openModal} />
      <div className="project-header pb-2 rounded-3 pt-3 pb-2 position-relative d-flex flex-column">
        <div className="left-side py-2 py-lg-0 d-flex align-items-center">
          <h4 className="txt-primary3 project-header-title mb-0">
            Project List
          </h4>
          <p className="mb-0 ms-auto fs-7 text-muted px-1 text-nowrap">
            10 Projects
          </p>
        </div>
        <div
          style={{ gap: 8 }}
          className="d-flex align-items-center justify-content-between mt-2 mt-md-3 px-md-0"
        >
          <div className="d-inline-block" onClick={handleCreateProject}>
            <OutlineButton
              icon={<GoPlus size={20} />}
              containerStyle="d-none d-md-inline-block rounded-3 py-2 ps-3 pe-4"
              label="Add Project"
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
            placeholder="Search project"
            buttonLabel="Search"
          />
        </div>
      </div>
      {projects.length !== 0 ? (
        <div data-aos="fade-up" className="project-body">
          <div
            style={{ overflowX: "auto" }}
            className="d-flex py-2 hide-thumb justify-content-start justify-content-md-end align-items-center"
          >
            <SortingTab />
            <p
              onClick={handleToggleList}
              className={`pointer ms-auto pe-1 mb-0 ${
                toggleList ? "txt-primary" : "text-secondary opacity-75"
              }`}
            >
              <FaListUl size={20} />
            </p>
          </div>
          <div className="mt-2 d-flex align-items-center">
            <p className="txt-primary4 fw-semibold fs-7 mb-0 ">
              Pinned Projects
            </p>
          </div>
          <PinnedProjects toggleList={toggleList} containerStyle="mb-2" />
          {/* <div className="d-flex align-items-center justify-content-center justify-content-sm-start">
            <TabsContainer activeTab={activeTab} setActiveTab={setActiveTab} />
            </div> */}
          <p className="txt-primary4 fs-7 mb-2 fw-semibold">Recent Projects</p>
          <ProjectContainer toggleList={toggleList} />
        </div>
      ) : (
        <div className="project-body-empty w-100 d-flex flex-column center py-4 py-lg-5">
          <p className="text-center text-secondary">
            You currently have no projects. Start by adding a new project.
          </p>
          <img
            style={{
              width: 180,
              height: 180,
              objectFit: "cover",
              opacity: 0.8,
            }}
            src={emptyImage}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectList;
