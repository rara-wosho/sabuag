import { FiEdit3 } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";

import TextField from "../ui/TextField";

import { useState, useRef } from "react";

const DataSheetSection = () => {
  const inputRef = useRef(null);
  const [readOnly, setReadOnly] = useState(true);

  const handleEdit = () => {
    setReadOnly((prev) => {
      const newReadOnly = !prev;
      if (!newReadOnly) {
        setTimeout(() => {
          inputRef?.current?.focus();
        }, 150);
        return newReadOnly;
      } else {
        //handle save logic here

        alert("Save changes successfully");
        return newReadOnly;
      }
    });
  };

  return (
    <div className="animation-opacity-fade">
      {/* HEAD  */}
      <div className="d-flex align-items-center justify-content-end">
        <button
          onClick={handleEdit}
          className="btn text-muted fw-semibold border px-2 rounded-2 bg-hover fs-7 shadow-sm py-1"
        >
          {readOnly ? (
            <>
              <FiEdit3 /> Edit
            </>
          ) : (
            <>
              <FaCheck /> Update
            </>
          )}
        </button>
      </div>

      {/* CREDENTIALS   */}
      <p className="mb-3 text-secondary  fs-7 fw-semibold">
        Personal Data Sheet
      </p>
      <div className="row px-2 mb-2 row-cols-1 row-cols-md-2">
        <div className="col px-1">
          <TextField readOnly={readOnly} value={20} label="Email" />
        </div>
      </div>
      <p className="mb-3 text-secondary  fs-7 fw-semibold">Change Password</p>
      <div className="row px-2 mb-2 row-cols-1 row-cols-md-2">
        <div className="col px-1">
          <TextField value={20} label="Current Password" />
        </div>
        <div className="col px-1">
          <TextField value={20} label="New Password" />
        </div>
        <div className="col px-1">
          <TextField value={20} label="Repeat Password" />
        </div>
      </div>
    </div>
  );
};

export default DataSheetSection;
