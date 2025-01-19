import { FiEdit3 } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";

import TextField from "../ui/TextField";

import { useState, useRef, useEffect } from "react";

const ProfileSection = () => {
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading)
    return (
      <div className="h-100 w-100 bg-white d-flex justify-content-center pt-5 text-muted">
        Loading...
      </div>
    );

  return (
    <div className="profile-body px-3 px-md-5 py-3 py-md-4 rounded-bottom-4 bg-white shadow-sm h-100 w-100">
      {/* HEAD  */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <p className="mb-0 text-muted  fs-7 fw-semibold">Personal Info</p>
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

      {/* BODY  */}
      <div className="row px-2 row-cols-1 row-cols-md-2">
        <div className="col px-1">
          <TextField
            reference={inputRef}
            label="First Name"
            readOnly={readOnly}
            value="Israel"
          />
        </div>
        <div className="col px-1">
          <TextField readOnly={readOnly} value="De Vera" label="Last Name" />
        </div>
        <div className="col px-1">
          <TextField readOnly={readOnly} value={20} label="Age" />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
