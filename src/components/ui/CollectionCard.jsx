import { SlOptionsVertical } from "react-icons/sl";
import { useAuth } from "../../hooks/AuthProvider";

function CollectionCard({
  color,
  title,
  handlePress,
  toggleCollection,
  creatorID,
}) {
  const { userDetails } = useAuth();
  return (
    <div
      className={`collection-card ${color} d-flex align-items-center justify-content-between rounded-2 fs-7`}
    >
      <p
        onClick={handlePress}
        className="mb-0 w-100 text-truncate ps-2 pe-1 py-2 fw-medium"
      >
        {title}
      </p>
      {(userDetails.role === "admin" ||
        userDetails.role === "superadmin" ||
        creatorID === userDetails.userID) && (
        <div onClick={toggleCollection} className="option-count ps-1 pe-2 py-2">
          <SlOptionsVertical />
        </div>
      )}
    </div>
  );
}

export default CollectionCard;
