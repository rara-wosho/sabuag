import { Link } from "react-router-dom";
import SecondaryButton from "../../components/ui/SecondaryButton";
import ToggleDarkMode from "../../components/ui/ToggleDarkMode";
import TextField from "../../components/ui/TextField";

import { MdOutlineMail, MdOutlineLock } from "react-icons/md";

const SignIn = () => {
  return (
    <div className="sign-in-page p-3 ">
      <div className="d-flex align-items-center mb-3">
        <img
          style={{ width: 50, height: 50, objectFit: "contain" }}
          src="images/official-sabuag.png"
          alt=""
        />
        <p className="txt-primary mb-0 fw-semibold fs-2 ms-1">SABUAG</p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 bg-white rounded-3 py-2 py-lg-3 px-2 px-lg-3 shadow">
        <div className="col first-col px-4 d-none d-md-flex rounded-2 align-items-center justify-content-center flex-column">
          <div className="img-container">
            <img
              className="img-fluid"
              src="images/signin2.png"
              alt="sign in image"
            />
          </div>
          <p className="text-secondary text-center fs-6">
            Sustainable and Achievable Broadcasting with Unbiased and Attainable
            Goals
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
              />
              <TextField
                icon={<MdOutlineLock />}
                label="Password"
                containerStyle="bg-white"
              />
              {/* <PrimaryButton containerStyle="mt-2 mb-2 w-100" label="Sign In" /> */}
              <Link to="/home">Home</Link>
              <SecondaryButton
                containerStyle="w-100 text-white mb-2 py-2 rounded-3 shadow-sm"
                label="Sign In"
              />
              <a
                className="text-secondary fs-6 text-start mb-0 d-block mb-4"
                href="#"
              >
                forgot password?
              </a>

              <p className="mb-3 text-center text-secondary">
                Wanna join SABUAG?
                <Link className="txt-primary fw-semibold ms-2" to="/signup">
                  Apply Now
                </Link>
              </p>
              {/* <button className="btn btn-outline-secondary w-100 mb-3">
                Sign up
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div
        // style={{ bottom: "1rem" }}
        className="mb-0 mt-4 text-muted fs-8"
      >
        Rael De Vera@2024
      </div>
    </div>
  );
};

export default SignIn;
