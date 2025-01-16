function AssigneeCard({ containerStyle }) {
  return (
    <div className={`${containerStyle} mb-3 d-flex align-items-center`}>
      <img
        className="rounded-circle shadow-sm me-3"
        style={{ width: 40, height: 40, objectFit: "cover" }}
        src="/images/meme.jpg"
        alt=""
      />
      <div className="information">
        <div className="text-truncate mb-0 text-muted normal-text-size">
          Israel De Vera
        </div>
        <div className="text-truncate mb-0 text-secondary fs-8">
          Editorial Cartoonist
        </div>
      </div>
      {/* <div className="p-2 pointer text-secondary ms-auto me-1">
        <IoClose size={20} />
      </div> */}
    </div>
  );
}

export default AssigneeCard;
