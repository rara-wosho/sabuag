import { useState } from "react";
import PrimaryButton from "../../components/ui/PrimaryButton";
import TextField from "../../components/ui/TextField";

import { IoClose } from "react-icons/io5";

const Members = () => {
  const [showMemberForm, setShowMemberForm] = useState(false);
  const [formType, setFormType] = useState("main-fields");

  const changeFormType = (e) => {
    setFormType(e.target.value);
  };
  return (
    <div className="min-h-vh bg-white rounded-4 px-3 px-lg-5 pt-lg-5 pb-lg-4">
      <div className="d-flex align-items-center mb-3">
        {showMemberForm ? (
          <div className="d-flex align-items-center border px-2 rounded-2">
            <p className="mb-0 text-muted fs-7">Template : </p>
            <select
              onChange={changeFormType}
              className="bg-white ms-2 text-secondary border-0 outline-0 fs-7 py-1"
              defaultValue="Main Fields"
            >
              <option value="main-fields">Main Fields</option>
              <option value="complete">Complete Form</option>
            </select>
          </div>
        ) : (
          <PrimaryButton
            handlePress={() => setShowMemberForm(true)}
            containerStyle="fs-7 px-3 py-1 py-md-2 rounded shadow-sm"
            label="Add Member"
          />
        )}
      </div>

      {/* NEW MEMBER FORM  */}

      {showMemberForm && (
        <>
          <div className="d-flex align-items-center justify-content-end mt-4 mb-3">
            <button
              onClick={() => setShowMemberForm(false)}
              className="btn text-muted outline-0 me-3"
            >
              <IoClose className="me-1" size={22} />
              Cancel
            </button>
            <PrimaryButton
              label="Register Now"
              containerStyle="py-1 px-2 rounded shadow-sm px-md-3"
            />
          </div>
          <p className="mb-3 text-secondary fs-7">Credentials</p>
          <div className="row row-cols-1 row-cols-lg-3 px-2 mb-3">
            <div className="col px-1">
              <TextField label="Email" />
            </div>
            <div className="col px-1">
              <TextField label="Contact Number" />
            </div>
          </div>
          <p className="mb-3 text-secondary fs-7">User Information</p>
          <div className="row row-cols-1 row-cols-lg-3 px-2 mb-3">
            <div className="col px-1">
              <TextField label="First Name" />
            </div>
            <div className="col px-1">
              <TextField label="Last Name" />
            </div>
            <div className="col px-1">
              <TextField label="Middle Name" />
            </div>
            <div className="col px-1">
              <TextField label="Position" />
            </div>
            {formType === "complete" && (
              <>
                <div className="col px-1">
                  <TextField
                    label="Gender"
                    type="select"
                    options={[
                      { label: "Male", value: "male" },
                      { label: "Female", value: "female" },
                    ]}
                  />
                </div>
                <div className="col px-1">
                  <TextField label="Age" type="number" />
                </div>
              </>
            )}
          </div>
          {formType === "complete" && (
            <>
              <p className="mb-3 text-secondary fs-7">Academic Information</p>
              <div className="row row-cols-1 row-cols-lg-3 px-2 mb-3">
                <div className="col px-1">
                  <TextField
                    label="Program"
                    type="select"
                    value="default"
                    options={[
                      { value: "bsit", label: "BSIT" },
                      { value: "btle-ia", label: "BTLE IA" },
                      { value: "btle-he", label: "BTLE HE" },
                      { value: "bsmb", label: "BSMB" },
                    ]}
                  />
                </div>
                <div className="col px-1">
                  <TextField
                    label="Year"
                    type="select"
                    value="default"
                    options={[
                      { value: "1", label: "1st Year" },
                      { value: "2", label: "2nd Year" },
                      { value: "3", label: "3rd Year" },
                      { value: "4", label: "4th Year" },
                    ]}
                  />
                </div>
                <div className="col px-1">
                  <TextField label="Section" />
                </div>
              </div>
              <p className="mb-3 text-secondary fs-7">Address</p>
              <div className="row row-cols-1 row-cols-lg-3 px-2 mb-3">
                <div className="col px-1">
                  <TextField label="Province" />
                </div>
                <div className="col px-1">
                  <TextField label="Municipality/City" />
                </div>
                <div className="col px-1">
                  <TextField label="Barangay" />
                </div>
              </div>
            </>
          )}
        </>
      )}
      {/* BODY  */}

      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
        <div className="col p-3 border"></div>
        <div className="col p-3 border"></div>
        <div className="col p-3 border"></div>
        <div className="col p-3 border"></div>
      </div>
    </div>
  );
};

export default Members;
