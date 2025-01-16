import success from "../../assets/logos/checked.png";
import question from "../../assets/logos/question.png";
import error from "../../assets/logos/error.png";

const Alert = ({
  type,
  title,
  message,
  onClick,
  onClose,
  left = "Cancel",
  right = "Ok",
}) => {
  return (
    <div className="alert-backdrop">
      <div className="alert m-4 p-md-4 rounded-3 shadow-lg bg-white-linear">
        <div className="alert-icon rounded-circle shadow">
          {type === "success" && <img src={success} alt="Success Icon" />}
          {type === "confirmation" && <img src={question} alt="Warning Icon" />}
          {type === "error" && <img src={error} alt="Error Icon" />}
        </div>
        <div className="alert-body pt-4 pb-4 d-flex flex-column center">
          <p
            className={`${
              type === "error" ? "text-danger" : "txt-primary3"
            } fs-5 mb-1 fw-semibold pt-2 text-center`}
          >
            {title}
          </p>
          <p className="fs-6 text-secondary mb-0 text-center px-2">{message}</p>
        </div>
        <div
          style={{ gap: 8 }}
          className="d-flex align-items-center w-100 mt-1"
        >
          <button className="w-100 btn btn-outline-secondary" onClick={onClose}>
            {left}
          </button>
          <button
            onClick={onClick}
            className={`${
              type === "error" ? "bg-danger" : "bg-primary-linear"
            } w-100 btn text-white`}
          >
            {right}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
