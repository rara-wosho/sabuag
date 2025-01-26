import { Link, useNavigate } from "react-router-dom";
import SecondaryButton from "../../components/ui/SecondaryButton";
import ToggleDarkMode from "../../components/ui/ToggleDarkmode";

import TextField from "../../components/ui/TextField";
import { Snackbar, Alert } from "@mui/material";

import { MdOutlineMail, MdOutlineLock } from "react-icons/md";

import { useState } from "react";

// FIREBASE
import { auth } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const [warning, setWarning] = useState({
    status: false,
    message: "",
    variant: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleRegister = () => {
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        console.log(user);
        console.log("user id: " + user.uid);
        setIsLoading(false);
        setFormData({ email: "", password: "" });

        setWarning((prev) => ({
          ...prev,
          status: true,
          message: "Successfully signed in",
          variant: "success",
        }));

        setTimeout(() => {
          setWarning({ status: false, message: "" });
        }, 3000);

        navigate("home");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log("warning : " + error.message);

        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setWarning((prev) => ({
            ...prev,
            status: true,
            message: "Email is already in use",
            variant: "warning",
          }));

          setTimeout(() => {
            setWarning({ status: false, message: "" });
          }, 3000);
        }
        setIsLoading(false);
        // ..
      });
  };

  return (
    <div className="sign-in-page p-3">
      <div className="fixed-top p-2">
        <ToggleDarkMode />
      </div>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={warning.status}
        key={"top" + "center"}
      >
        <Alert sx={{ width: "100%" }} severity={warning.variant}>
          {warning.message}
        </Alert>
      </Snackbar>
      <div className="d-flex align-items-center mb-2">
        <img
          style={{ width: 50, height: 50, objectFit: "contain" }}
          src="images/official-sabuag.png"
          alt=""
        />
        <p className="txt-primary mb-0 fw-semibold fs-2 ms-1">SABUAG</p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 bg-white rounded-3 py-2 py-lg-3 px-2 px-lg-3 shadow-sm">
        <div className="col first-col bg-body2 px-4 d-none d-md-flex rounded-2 align-items-center justify-content-center flex-column">
          <div className="img-container">
            <img
              className="img-fluid"
              src="images/signin2.png"
              alt="sign in image"
            />
          </div>
          <p className="text-muted text-center fs-6">
            <span className="txt-primary3">S</span>ustainable and{" "}
            <span className="txt-primary3">A</span>
            chievable <span className="txt-primary3">B</span>
            roadcasting with <span className="txt-primary3">U</span>
            nbiased and <span className="txt-primary3">A</span>
            ttainable <span className="txt-primary3">G</span>oals
          </p>
        </div>
        <div className="col ps-3 pe-3 pe-md-2 ps-md-4 py-5">
          <div className="d-flex align-items-center justify-content-center flex-column">
            <p className="text-center fs-3 fw-semibold mb-1 txt-primary">
              Sign In
            </p>
            <p className="text-muted fs-6 text-center">
              Please input your credentials
            </p>
            <div className="auth-form w-100">
              <TextField
                label="Email"
                containerStyle="bg-white"
                icon={<MdOutlineMail />}
                type="text"
                name="email"
                onChange={handleChange}
                value={formData.email}
              />
              <TextField
                icon={<MdOutlineLock />}
                label="Password"
                type="password"
                containerStyle="bg-white"
                onChange={handleChange}
                value={formData.password}
                name="password"
              />
              <div className="d-flex align-items-center justify-content-between mb-4">
                <a
                  className="txt-primary2 fs-8 fw-medium text-start d-block"
                  href="#"
                >
                  Forgot Password?
                </a>
                <label
                  className="text-muted fs-7 d-flex align-items-center"
                  htmlFor="remember-me"
                >
                  <input
                    className="me-1"
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                  />
                  Remember me
                </label>
              </div>
              <SecondaryButton
                containerStyle="w-100 text-white mb-4 py-2 rounded-3 shadow-sm"
                label="Sign In"
                handlePress={handleRegister}
                isLoading={isLoading}
              />

              <Link
                className="txt-primary2 text-center d-block fs-7 fw-semibold ms-1"
                to="/join-us"
              >
                Join Our Organization
              </Link>
              {/* <button className="btn btn-outline-secondary w-100 mb-3">
                Sign up
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <p
        // style={{ bottom: "1rem" }}
        className="mb-0 mt-4 text-muted fs-8"
      >
        Developed by: Israel De Vera
      </p>
    </div>
  );
};

export default SignIn;
