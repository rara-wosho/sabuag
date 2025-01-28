import React from "react";

const MemberRow = ({ members, setMembers }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
      <div className="col px-1 py-2 border"></div>

      {members.length > 0 &&
        members.map((member) => {
          return <div className="col px-1 py-2 border"></div>;
        })}
    </div>
  );
};

export default MemberRow;
