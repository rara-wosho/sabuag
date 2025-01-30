import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

import { Snackbar, Alert } from "@mui/material";

import PrimaryButton from "../../components/ui/PrimaryButton";
import AddMemberForm from "../../components/dashboard/AddMemberForm";
import MemberRow from "../../components/members/MemberRow";

// FIREBASE
import { setDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../hooks/AuthProvider";

const Members = () => {
  const { userDetails } = useAuth();
  setTimeout(() => {
    console.log("user ID : ", userDetails.password);
  }, 1000);
  // DATA TO RENDER
  const [members, setMembers] = useState([1, 2, 3]);

  // FEEDBACKS
  const [isLoading, setIsLoading] = useState(false);
  const [warning, setWarning] = useState({
    status: false,
    message: "",
    variant: "",
  });

  // FORMS
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

  const resetForm = () => {
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

  const showWarning = (message, variant) => {
    setWarning((prev) => ({
      ...prev,
      status: true,
      message,
      variant,
    }));
    setTimeout(() => {
      setWarning({ status: false, message: "" });
    }, 3000);
  };
  const handleCancel = () => {
    setFormType("basic");
    setShowMemberForm(false);
    resetForm();
  };

  const changeFormType = (e) => {
    setFormType(e.target.value);
  };

  const handleRegister = async () => {
    const newErrors = {};

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = true;
    }
    if (!/^\d{10,11}$/.test(formData.contact)) {
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
      setIsLoading(true);

      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        const users = userCredentials.user;

        if (users) {
          // Prepare Firestore data
          const userDoc = {
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            middleName: formData.middleName || null,
            gender: formData.gender || null,
            age: formData.age || null,
            position: formData.position || null,
            contact: formData.contact,
            program: formData.program !== "default" ? formData.program : null,
            year: formData.year !== "default" ? formData.year : null,
            section: formData.section || null,
            barangay: formData.barangay || null,
            city: formData.city || null,
            province: formData.province || null,
            role: formData.role,
            status: formData.status,
            createdAt: new Date(),
            userID: users.uid,
            password: formData.password,
          };

          // Save to Firestore
          await setDoc(doc(db, "Users", users.uid), userDoc);

          // show warning
          showWarning("Registered Successfully", "success");

          // reset form
          resetForm();
        }
      } catch (error) {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          showWarning("Email is already in use", "warning");
        } else if (
          error.message === "Firebase: Error (auth/email-already-in-use)."
        ) {
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    // fetch members
  }, [members]);

  return (
    <div className="min-h-vh bg-white rounded-4 px-3 px-lg-5 pt-3 pt-lg-5 pb-lg-4">
      {/* ALERT  */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={warning.status}
        key={"top" + "center"}
      >
        <Alert sx={{ width: "100%" }} severity={warning.variant}>
          {warning.message}
        </Alert>
      </Snackbar>

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
              isLoading={isLoading}
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
      <MemberRow members={members} setMembers={setMembers} />
    </div>
  );
};

export default Members;
