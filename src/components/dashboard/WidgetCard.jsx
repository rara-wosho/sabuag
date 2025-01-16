import { FaAngleRight } from "react-icons/fa6";

const WidgetCard = ({ label, icon, bgIcon }) => {
  return (
    <div className="h-100 pointer d-flex flex-column justify-content-between rounded-4 widget-card shadow-sm position-relative bg-white-linear">
      <div className="bg-icon txt-primary">{bgIcon}</div>
      <div className="pt-3 pb-2 px-3 d-flex align-items-center">
        <div className="bg-secondary shadow p-2 d-inline-block rounded-3 icon-container">
          {icon}
        </div>
        <div className="ms-auto d-flex flex-column">
          <p className="txt-primary3 mb-0 fs-4 fw-semibold card-value">32</p>
        </div>
      </div>
      <div className="px-3 pb-3 pt-2 d-flex align-items-center justify-content-between">
        <p className="mb-0 fw-semibold widget-card-label txt-primary3">
          {label}
        </p>
        <FaAngleRight size={15} color="gray" />
      </div>
    </div>
  );
};

export default WidgetCard;
