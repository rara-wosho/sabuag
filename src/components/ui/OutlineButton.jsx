const OutlineButton = ({
  label,
  handlePress,
  icon,
  containerStyle,
  isLoading,
}) => {
  return (
    <button
      id="outline-btn"
      onClick={handlePress}
      className={`${containerStyle} fs-7`}
    >
      <span className="me-1">{icon}</span>
      {label}
    </button>
  );
};

export default OutlineButton;
