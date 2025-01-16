import { RiPushpinFill } from "react-icons/ri";

import { useNavigate } from "react-router-dom";

function ItemCard() {
  const navigate = useNavigate();
  const handleClickItem = (itemID) => {
    navigate(`${itemID}`);
  };
  return (
    <div
      onClick={() => handleClickItem(12)}
      className="bg-body2 bg-hover pointer rounded-2 py-2 py-md-3 px-2 px-md-3 d-flex align-items-center"
    >
      <div className="item-info w-100 d-flex flex-column">
        <div className="d-flex txt-black mb-1 align-items-center">
          <p className="mb-0 text-truncate normal-text-size">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          {true && (
            <div className="ps-2">
              <RiPushpinFill size={14} />
            </div>
          )}
        </div>
        <div className="d-flex align-items-center">
          <img
            className="rounded-circle me-2 shadow-sm"
            style={{ width: 18, height: 18, objectFit: "cover" }}
            src="/images/meme.jpg"
            alt="owner's image"
          />
          <p className="mb-0 fs-7 text-truncate text-muted">Israel De Vera</p>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
