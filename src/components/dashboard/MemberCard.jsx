const MemberCard = ({ name, position }) => {
  return (
    <div className="member-card mb-2 ps-2 py-2 pe-2 shadow-sm border-left bg-body2 border-radius-right d-flex align-items-center pointer">
      <img
        className="me-2 ms-1 rounded-2"
        style={{ width: 50, height: 50, objectFit: "cover" }}
        src="images/meme.jpg"
        alt=""
      />
      <div>
        <p className="mb-0 fw-medium text-muted">{name}</p>
        <p className="mb-0 fs-7 text-secondary">{position}</p>
      </div>
    </div>
  );
};

export default MemberCard;
