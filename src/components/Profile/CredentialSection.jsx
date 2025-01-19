import { FiEdit3 } from "react-icons/fi";

const CredentialSection = () => {
  return (
    <div className="profile-body px-3 px-md-5 py-3 py-md-4 rounded-bottom-4 bg-white shadow-sm h-100 w-100">
      <div className="d-flex align-items-center justify-content-between">
        <p className="mb-0 text-muted  fs-7 fw-semibold">Credentials</p>
        <button className="btn text-muted fw-semibold border px-2 rounded-2 bg-hover fs-7 shadow-sm py-1">
          <FiEdit3 /> Edit
        </button>
      </div>
    </div>
  );
};

export default CredentialSection;
