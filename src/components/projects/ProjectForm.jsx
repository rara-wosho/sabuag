import { useState } from "react";
import { Dialog } from "@mui/material";
import TextField from "../ui/TextField";
import PrimaryButton from "../ui/PrimaryButton";
import png from "../../assets/images/backlog.png";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdOutlinePublic } from "react-icons/md";
import Alert from "../../components/ui/Alert";

const ProjectForm = ({ openModal, closeModal }) => {
  const [project, setProject] = useState({
    title: "",
    desc: "",
    privacy: "public",
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePrivacyChange = (value) => {
    setProject((prev) => ({
      ...prev,
      privacy: value,
    }));
  };

  const handleCancel = () => {
    if (project.title.trim() || project.desc.trim()) {
      // Show the alert if any input field is filled
      setShowAlert(true);
    } else {
      // Close the modal if both fields are empty
      closeModal();
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  const discardProject = () => {
    setShowAlert(false);
    setTimeout(() => {
      setProject({ title: "", desc: "", privacy: "public" });
      closeModal();
    }, 300);
  };

  if (!openModal) return null;

  return (
    <Dialog
      PaperProps={{
        sx: {
          width: "100%",
          maxWidth: 600, // Control the width
          borderRadius: 3,
          margin: 1,
        },
      }}
      open={openModal}
      onClose={closeModal}
    >
      {showAlert && (
        <Alert
          title="Discard Project?"
          message="You have an unfinished project. Do you want to discard it?"
          type="confirmation"
          left="No"
          right="Discard"
          onClose={closeAlert}
          onClick={discardProject}
        />
      )}
      {/* <p>{project.title} </p>
      <p>{project.desc} </p>
      <p>{project.privacy} </p> */}
      <div className="p-3 py-4 p-md-4 bg-white-linear rounded-3 project-form w-100">
        <div className="project-form-header d-flex align-items-center mb-3">
          <img style={{ width: 50, height: 50 }} src={png} alt="error" />
          <p className="project-form-0 ms-2 mb-0 fs-5 txt-primary3 fw-semibold">
            New Project
          </p>
          <p className="mb-0 fs-8 text-secondary ms-auto">12/32/25</p>
        </div>
        <div className="project-form-body">
          <TextField
            name="title"
            value={project.title}
            label="Project Name"
            onChange={handleInputChange}
          />
          <TextField
            name="desc"
            value={project.desc}
            rows={2}
            label="Description"
            onChange={handleInputChange}
          />
          <p className="fs-7 text-secondary mb-1 mt-3">
            Privacy{" "}
            {project.privacy === "public" ? (
              <MdOutlinePublic />
            ) : (
              <IoLockClosedOutline />
            )}
          </p>
          <div className="d-flex align-items-center mb-2">
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="privacy"
                id="public"
                value="public"
                checked={project.privacy === "public"}
                onChange={() => handlePrivacyChange("public")}
              />
              <label
                className="form-check-label text-muted pointer"
                htmlFor="public"
              >
                Public
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="privacy"
                id="private"
                value="private"
                checked={project.privacy === "private"}
                onChange={() => handlePrivacyChange("private")}
              />
              <label
                className="form-check-label text-muted pointer"
                htmlFor="private"
              >
                Private
              </label>
            </div>
          </div>
          <div className="p fs-7 text-secondary mb-0">
            {project.privacy === "public"
              ? "All members can see this project"
              : "Only assigned members can see this project"}
          </div>
        </div>
        <div className="project-form-footer d-flex align-items-center justify-content-end mt-4 pt-3 mb-2 mb-md-0">
          <button
            onClick={handleCancel}
            className="btn btn-outline-secondary w-100 px-3 px-lg-4 py-2 rounded-2 me-2"
          >
            Cancel
          </button>
          <PrimaryButton
            containerStyle="py-2 px-3 w-100 px-lg-4 rounded-2"
            label="Create Project"
          />
        </div>
      </div>
    </Dialog>
  );
};

export default ProjectForm;
