import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

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
  readOnly = false,
  options = [],
  hasError = false,
}) => {
  const [showPass, setShowPass] = useState(false);

  const toggleShowPass = () => {
    setShowPass((prev) => !prev);
  };

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
      className={`${containerStyle} textfield-container d-flex flex-column position-relative`}
    >
      {showCount && (
        <div
          style={{ right: 10, top: "50%", transform: "translateY(-50%)" }}
          className="char-count text-secondary fs-8 position-absolute"
        >
          {value.length + "/20"}
        </div>
      )}

      {type === "password" && (
        <div
          onClick={toggleShowPass}
          style={{ right: 20, top: "50%", transform: "translateY(-50%)" }}
          className="text-muted fs-5 pointer position-absolute"
        >
          {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
        </div>
      )}

      {type === "select" ? (
        <select
          disabled={readOnly}
          style={{ paddingBlock: 12 }}
          name={name}
          value={value}
          onChange={onChange}
          className={`px-3 text-muted ${hasError && "error"}`}
          ref={reference}
          readOnly={readOnly}
        >
          <option disabled value="default">
            Select
          </option>
          {options.map((option, index) => (
            <option
              style={{ color: "rgb(70,70,70)" }}
              key={index}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      ) : rows > 0 ? (
        <textarea
          style={{ resize: "none" }}
          name={name}
          value={value}
          rows={rows}
          placeholder={label}
          className={`px-3 text-muted py-3 ${hasError && "error"}`}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          ref={reference}
          readOnly={readOnly}
        />
      ) : (
        <input
          name={name}
          value={value}
          placeholder={label}
          className={`input text-muted ${hasError && "error"}`}
          type={type === "password" && !showPass ? "password" : "text"}
          onChange={onChange}
          readOnly={readOnly}
          ref={reference}
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
