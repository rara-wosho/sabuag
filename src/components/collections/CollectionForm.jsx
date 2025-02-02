import { Dialog } from "@mui/material";
import TextField from "../ui/TextField";
import PrimaryButton from "../ui/PrimaryButton";
import { MdDeleteOutline } from "react-icons/md";

import { useState, useCallback, useEffect } from "react";

// FIREBASE
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  serverTimestamp,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const CollectionForm = ({
  open,
  toggleCollectionForm,
  editingCollection,
  userDetails,
}) => {
  // feedbacks
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [collectionData, setCollectionData] = useState({
    title: "",
    color: "default",
    creatorID: "",
    creatorName: "",
  });

  const resetCollectionData = () => {
    setCollectionData({
      title: "",
      color: "default",
      creatorID: "",
      creatorName: "",
    });
  };

  // Populate form fields if editing
  useEffect(() => {
    if (editingCollection) {
      setCollectionData({
        title: editingCollection.title,
        color: editingCollection.color || "default",
        creatorID: editingCollection.creatorID,
        creatorName: editingCollection.creatorName,
      });
    } else {
      setCollectionData({
        title: "",
        color: "default",
        creatorID: userDetails.userID,
        creatorName: userDetails.firstName,
      });
    }
  }, [editingCollection]);

  const handleTitle = useCallback((e) => {
    const title = e.target.value;
    if (title.length <= 20) {
      setCollectionData((c) => ({ ...c, title }));
    }

    if (title.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, []);

  const pickColor = useCallback((e) => {
    setCollectionData((c) => ({ ...c, color: e.target.value }));
    setDisabled(false);
  }, []);

  const handleCancel = () => {
    resetCollectionData();
    toggleCollectionForm();
    setDisabled(true);
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

  const handleSubmit = async () => {
    setLoading(true);

    try {
      if (editingCollection) {
        // Update existing collection
        await updateDoc(doc(db, "Collections", editingCollection.id), {
          ...collectionData,
          updatedAt: serverTimestamp(),
        });
      } else {
        // Add new collection
        await addDoc(collection(db, "Collections"), {
          ...collectionData,
          createdAt: serverTimestamp(),
        });
      }

      resetCollectionData();
      toggleCollectionForm(); // Close the form
    } catch (err) {
      console.log("error : ", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteCollection = async (collectionID) => {
    setDeleteLoading(true);
    try {
      await deleteDoc(doc(db, "Collections", collectionID));
      console.log("deleted doc success");
      toggleCollectionForm();
    } catch (err) {
      console.log("delete doc error");
    } finally {
      setDeleteLoading(false);
    }
  };
  return (
    <Dialog
      PaperProps={{
        sx: {
          width: "100%",
          maxWidth: 600,
          borderRadius: 3,
          margin: 1,
        },
      }}
      open={open}
      onClose={toggleCollectionForm}
    >
      <div className="collection-form py-3 px-3 p-md-4 bg-white-linear rounded-3 w-100">
        <div className="colllection-form-header mb-3 d-flex align-items-center">
          <p className="project-form-0 mb-0 fs-5 txt-primary3 fw-semibold">
            {editingCollection ? "Edit Collection" : "New Collection"}
          </p>

          {editingCollection &&
            (deleteLoading ? (
              <div className="spinner-border spinner-border-sm text-danger ms-auto"></div>
            ) : (
              <MdDeleteOutline
                onClick={() => deleteCollection(editingCollection.id)}
                className="text-danger ms-auto pointer"
                size={26}
              />
            ))}
        </div>
        <div className="collection-form-body">
          <TextField
            value={collectionData.title}
            label="Title"
            onChange={handleTitle}
            showCount
          />

          {(userDetails.role === "superadmin" ||
            userDetails.role === "admin") && (
            <p className="text-muted mb-3 fw-medium fs-8">
              By : {collectionData.creatorName}
            </p>
          )}

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
                  checked={collectionData.color === color}
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
            label={editingCollection ? "Update" : "Add Now"}
            disabled={disabled}
            handlePress={handleSubmit}
            isLoading={loading}
          />
        </div>
      </div>
    </Dialog>
  );
};

export default CollectionForm;
