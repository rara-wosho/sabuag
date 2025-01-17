const TextField = ({
  label,
  type = "text",
  rows = 0,
  name,
  value,
  onChange,
  containerStyle,
  showCount = false,
  icon,
  reference,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault(); // Prevent default tab behavior
      const textarea = e.target;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      // Insert tab character at the cursor position
      const newValue = value.substring(0, start) + "\t" + value.substring(end);

      // Call the onChange function to update the value
      onChange({
        target: {
          name,
          value: newValue,
        },
      });

      // Move the cursor after the inserted tab character
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 1;
      }, 0);
    }
  };

  return (
    <div
      className={`${containerStyle} textfield-container d-flex flex-column position-relative border`}
    >
      {showCount && (
        <div
          style={{ right: 10, top: "50%", transform: "translateY(-50%)" }}
          className="char-count text-secondary fs-8 position-absolute"
        >
          {value.length + "/20"}
        </div>
      )}

      {rows > 0 ? (
        <textarea
          name={name}
          value={value}
          rows={rows}
          placeholder={label}
          className="px-3 text-muted py-3"
          onChange={onChange}
          onKeyDown={handleKeyDown}
          ref={reference}
        />
      ) : (
        <input
          name={name}
          value={value}
          placeholder={label}
          className="input px-3 text-muted"
          type={type}
          onChange={onChange}
        />
      )}
      <label className="px-2 label text-muted d-flex align-items-center">
        {icon && <div className="me-1">{icon}</div>}
        {label}
      </label>
    </div>
  );
};

export default TextField;
