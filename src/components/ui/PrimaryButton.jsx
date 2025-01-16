import React from "react";

const PrimaryButton = ({ label, handlePress, containerStyle, isLoading }) => {
  return (
    <button
      id="primary-btn"
      onClick={handlePress}
      className={`${containerStyle} bg-primary-linear`}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
