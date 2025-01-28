import { useNavigate } from "react-router-dom";

function MytaskCard() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate("/home/task/" + id);
  };
  return (
    <div onClick={() => handleClick(12)} className="mytask-card bg-hover">
      <p className="mb-0 mytask-title txt-black">
        Lorem ipsum dolor sit amet consectetur.
      </p>
    </div>
  );
}

export default MytaskCard;
