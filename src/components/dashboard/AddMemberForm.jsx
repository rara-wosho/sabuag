import { useState } from "react";
import TextField from "../ui/TextField";

const AddMemberForm = ({ formData, setFormData, formType, errors }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "lastName" && { password: value + "@sabuag2025" }),
    }));
  };

  console.log(formData);
  return (
    <>
      <p className="mb-3 text-secondary fs-7">Credentials</p>
      <div className="row row-cols-1 row-cols-lg-3 px-2 mb-3">
        <div className="col px-1">
          <TextField
            name="email"
            value={formData.email}
            hasError={errors.email}
            onChange={handleChange}
            label="Email"
          />
        </div>
        <div className="col px-1">
          <TextField
            name="contact"
            value={formData.contact}
            hasError={errors.contact}
            onChange={handleChange}
            label="Contact Number"
          />
        </div>
      </div>
      <p className="mb-3 text-secondary fs-7">User Information</p>
      <div className="row row-cols-1 row-cols-lg-3 px-2 mb-3">
        <div className="col px-1">
          <TextField
            name="firstName"
            value={formData.firstName}
            hasError={errors.firstName}
            onChange={handleChange}
            label="First Name"
          />
        </div>
        <div className="col px-1">
          <TextField
            name="lastName"
            value={formData.lastName}
            hasError={errors.lastName}
            onChange={handleChange}
            label="Last Name"
          />
        </div>
        <div className="col px-1">
          <TextField
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            label="Middle Name"
          />
        </div>
        <div className="col px-1">
          <TextField
            name="position"
            value={formData.position}
            hasError={errors.position}
            onChange={handleChange}
            label="Position"
          />
        </div>
        {formType === "complete" && (
          <>
            <div className="col px-1">
              <TextField
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                label="Gender"
                type="select"
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
              />
            </div>
            <div className="col px-1">
              <TextField
                name="age"
                value={formData.age}
                onChange={handleChange}
                label="Age"
                type="number"
              />
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
                name="program"
                value={formData.program}
                onChange={handleChange}
                label="Program"
                type="select"
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
                name="year"
                value={formData.year}
                onChange={handleChange}
                label="Year"
                type="select"
                options={[
                  { value: "1", label: "1st Year" },
                  { value: "2", label: "2nd Year" },
                  { value: "3", label: "3rd Year" },
                  { value: "4", label: "4th Year" },
                ]}
              />
            </div>
            <div className="col px-1">
              <TextField
                name="section"
                value={formData.section}
                onChange={handleChange}
                label="Section"
              />
            </div>
          </div>
          <p className="mb-3 text-secondary fs-7">Address</p>
          <div className="row row-cols-1 row-cols-lg-3 px-2 mb-3">
            <div className="col px-1">
              <TextField
                name="province"
                value={formData.province}
                onChange={handleChange}
                label="Province"
              />
            </div>
            <div className="col px-1">
              <TextField
                name="city"
                value={formData.city}
                onChange={handleChange}
                label="Municipality/City"
              />
            </div>
            <div className="col px-1">
              <TextField
                name="barangay"
                value={formData.barangay}
                onChange={handleChange}
                label="Barangay"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddMemberForm;
