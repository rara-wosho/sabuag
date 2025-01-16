import { SlOptionsVertical } from "react-icons/sl";

function CollectionCard({ color, title }) {
  return (
    <div
      className={`collection-card ${color} d-flex align-items-center justify-content-between rounded-2 fs-7 ps-2 pe-1 py-2`}
    >
      <p className="mb-0 text-truncate fw-medium">{title}</p>
      <div className="option-count px-1">
        <SlOptionsVertical />
      </div>
    </div>
  );
}

export default CollectionCard;
