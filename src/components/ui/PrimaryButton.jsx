const PrimaryButton = ({
  label,
  handlePress,
  containerStyle,
  disabled = false,
  isLoading = false,
}) => {
  return (
    <button
      disabled={isLoading || disabled}
      id="primary-btn"
      onClick={handlePress}
      className={`${containerStyle} bg-primary-linear  ${
        (disabled || isLoading) && "opacity-50"
      }`}
    >
      {isLoading ? (
        <div
          className="spinner-border text-white spinner-border-sm"
          role="status"
        ></div>
      ) : (
        label
      )}
    </button>
  );
};

export default PrimaryButton;
