import { Dialog } from "@mui/material";
import TextField from "../ui/TextField";
import PrimaryButton from "../ui/PrimaryButton";

import { useState, useCallback } from "react";

const CollectionForm = ({ open, toggleCollectionForm }) => {
  const [collectionData, setCollectionData] = useState({
    title: "",
    color: "default",
  });

  const handleTitle = useCallback((e) => {
    const title = e.target.value;
    if (title.length <= 20) {
      setCollectionData((c) => ({ ...c, title }));
    }
  }, []);

  const pickColor = useCallback((e) => {
    setCollectionData((c) => ({ ...c, color: e.target.value }));
  }, []);

  const handleCancel = () => {
    setCollectionData({ title: "", color: "default" });
    toggleCollectionForm();
  };

  const colors = [
    "default",
    "violet",
    "blue",
    "pink",
    "red",
    "green",
    "orange",
  ];
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
      open={open}
      onClose={toggleCollectionForm}
    >
      <div className="collection-form py-3 px-3 p-md-4 bg-white-linear rounded-3 w-100">
        <div className="colllection-form-header mb-2">
          <p className="project-form-0 mb-0 fs-5 txt-primary3 fw-semibold">
            New Collection
          </p>
        </div>
        <div className="collection-form-body">
          <TextField
            value={collectionData.title}
            label="Title"
            onChange={handleTitle}
            showCount
          />

          <p className="text-muted mb-2 fw-medium fs-7">
            Color: {collectionData.color}
          </p>

          <div className="d-flex align-items-center mb-4">
            {colors.map((color) => (
              <label
                htmlFor={`color-${color}`}
                key={color}
                className={`${
                  collectionData.color === color && "active"
                } d-inline-flex ${color} shadow-sm rounded-circle center color-box border`}
              >
                <input
                  id={`color-${color}`}
                  onChange={pickColor}
                  type="radio"
                  name="color"
                  value={color}
                />
              </label>
            ))}
          </div>
        </div>
        <div className="project-form-footer d-flex align-items-center justify-content-end mb-2 mb-md-1">
          <button
            onClick={handleCancel}
            className="btn btn-outline-secondary w-100 px-3 px-lg-4 py-2 rounded-2 me-2"
          >
            Cancel
          </button>
          <PrimaryButton
            containerStyle="py-2 px-3 w-100 px-lg-4 rounded-2"
            label="Add Now"
          />
        </div>
      </div>
    </Dialog>
  );
};

export default CollectionForm;
