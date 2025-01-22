import { Link } from "react-router-dom";
import SecondaryButton from "../../components/ui/SecondaryButton";
import ToggleDarkMode from "../../components/ui/ToggleDarkMode";
import TextField from "../../components/ui/TextField";

import { MdOutlineMail, MdOutlineLock } from "react-icons/md";

const SignIn = () => {
  return (
    <div className="sign-in-page p-3">
      <div className="fixed-top p-2">
        <ToggleDarkMode />
      </div>
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
              />
              <TextField
                icon={<MdOutlineLock />}
                label="Password"
                type="password"
                containerStyle="bg-white"
              />
              <a
                className="txt-primary2 fs-8 fw-medium text-start mb-4 d-block"
                href="#"
              >
                Forgot Password?
              </a>
              <Link to="/home">
                <SecondaryButton
                  containerStyle="w-100 text-white mb-4 py-2 rounded-3 shadow-sm"
                  label="Sign In"
                />
              </Link>

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
