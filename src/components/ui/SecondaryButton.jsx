const SecondaryButton = ({
  label,
  handlePress,
  containerStyle,
  isLoading = false,
  disabled = false,
}) => {
  return (
    <button
      disabled={isLoading || disabled}
      id="secondary-btn"
      onClick={handlePress}
      className={` ${containerStyle} ${
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

export default SecondaryButton;
