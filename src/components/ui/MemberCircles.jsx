const MemberCircles = () => {
  const array = [1, 2, 3, 4, 5, 6, 7];
  const splicedArray = array.splice(0, 5);
  return (
    <div
      style={{ width: 45 * (array.length > 5 ? 5 : array.length), height: 50 }}
      className="member-circles-container border border-danger d-flex align-items-center px-2 ms-2 position-relative"
    >
      {splicedArray.map((num, index) => {
        return (
          <div key={index} className="member-circles-img  shadow-sm">
            <img
              className="rounded-circle"
              src="/images/sabuag-mems.jpeg"
              alt=""
            />
          </div>
        );
      })}

      {array.length > 5 && (
        <div
          style={{ backgroundColor: "gray" }}
          className="shadow-sm member-circles-img d-flex center text-white"
        >
          ...
        </div>
      )}
    </div>
  );
};

export default MemberCircles;
