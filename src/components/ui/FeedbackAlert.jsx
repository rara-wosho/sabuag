import { CgClose } from "react-icons/cg";
import { useAlert } from "../../hooks/AlertContext";

import { FaCircleCheck } from "react-icons/fa6";
import { IoMdWarning } from "react-icons/io";
import { MdError } from "react-icons/md";

const FeedbackAlert = () => {
  const { alert, hideAlert } = useAlert();

  console.log(alert);
  return (
    <>
      {alert.show && (
        <div
          className={`feedback-alert rounded-3 shadow-sm ps-3 py-2 pe-2 d-flex align-items-center fw-medium ${alert.type}`}
        >
          {alert.type === "error" && <MdError size={28} />}
          {alert.type === "success" && <FaCircleCheck size={22} />}
          {alert.type === "warning" && <IoMdWarning size={24} />}

          <p className="mb-0 ms-2">{alert.message}</p>
          <button onClick={hideAlert} className="btn ms-auto p-1">
            <CgClose size={20} />
          </button>
        </div>
      )}
    </>
  );
};

export default FeedbackAlert;
