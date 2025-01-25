import { useState } from "react";
import PrimaryButton from "../../components/ui/PrimaryButton";

import { IoClose } from "react-icons/io5";
import AddMemberForm from "../../components/dashboard/AddMemberForm";

const Members = () => {
  const [showMemberForm, setShowMemberForm] = useState(false);
  const [formType, setFormType] = useState("basic");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    middleName: "",
    gender: "",
    age: "",
    position: "",
    contact: "",
    program: "default",
    year: "default",
    section: "",
    barangay: "",
    city: "",
    province: "",

    role: "user",
    status: "active",
  });

  const [errors, setErrors] = useState({
    email: false,
    contact: false,
    firstName: false,
    lastName: false,
    position: false,
  });

  const handleCancel = () => {
    setFormType("basic");
    setShowMemberForm(false);
    setFormData({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      middleName: "",
      gender: "",
      age: "",
      position: "",
      contact: "",
      program: "default",
      year: "default",
      section: "",
      barangay: "",
      city: "",
      province: "",

      role: "user",
      status: "active",
    });
  };

  const changeFormType = (e) => {
    setFormType(e.target.value);
  };

  const handleRegister = () => {
    const newErrors = {};

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = true;
    }
    if (!formData.contact || !/^\d{10,11}$/.test(formData.contact)) {
      newErrors.contact = true;
    }
    if (!formData.firstName) {
      newErrors.firstName = true;
    }
    if (!formData.lastName) {
      newErrors.lastName = true;
    }
    if (!formData.position) {
      newErrors.position = true;
    }

    const hasError = Object.keys(newErrors).length > 0;
    setErrors((prev) => ({ ...prev, ...newErrors }));

    if (hasError) {
      setTimeout(() => {
        setErrors({
          email: false,
          contact: false,
          firstName: false,
          lastName: false,
          position: false,
        });
      }, 3000);
    } else {
      // Perform register logic
    }
  };

  return (
    <div className="min-h-vh bg-white rounded-4 px-3 px-lg-5 pt-3 pt-lg-5 pb-lg-4">
      <div className="row row-cols-2 mb-3">
        <div className="col d-flex align-items-center">
          {showMemberForm ? (
            <div className="d-flex align-items-center border px-2 rounded-2">
              <p className="mb-0 text-muted fs-7 me-2 d-none d-md-inline-block">
                Form :
              </p>
              <select
                onChange={changeFormType}
                className="bg-white text-secondary border-0 outline-0 fs-7 py-1"
              >
                <option value="basic">Basic</option>
                <option value="complete">Complete</option>
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
        {showMemberForm && (
          <div className="col d-flex align-items-center justify-content-end">
            <button
              onClick={handleCancel}
              className="btn fs-7 text-muted outline-0 me-md-2"
            >
              <IoClose className="me-1 d-none d-md-inline-block" size={20} />
              Cancel
            </button>
            <PrimaryButton
              handlePress={handleRegister}
              label="Register"
              containerStyle="py-1 px-2 fs-7 rounded shadow-sm px-md-3"
            />
          </div>
        )}
      </div>

      {/* NEW MEMBER FORM  */}
      {showMemberForm && (
        <AddMemberForm
          formData={formData}
          setFormData={setFormData}
          formType={formType}
          errors={errors}
        />
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
