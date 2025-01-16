import React from "react";

const SecondaryButton = ({ label, handlePress, containerStyle, isLoading }) => {
  return (
    <button
      id="secondary-btn"
      onClick={handlePress}
      className={` ${containerStyle}`}
    >
      {label}
    </button>
  );
};

export default SecondaryButton;
