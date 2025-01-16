function Select({ label, name, opt1, opt2, opt3 }) {
  return (
    <div className="select-container border-secondary rounded-2">
      <select
        defaultValue={label}
        className="outline-0 form-select shadow-0 bg-none py-2 fs-7"
        name={name}
        id=""
      >
        <option className="text-muted" value={label} disabled>
          {label}
        </option>
        <option className="text-muted" value={opt1}>
          {opt1}
        </option>
        <option className="text-muted" value={opt2}>
          {opt2}
        </option>
        {opt3 && <option value={opt3}>{opt3}</option>}
      </select>
    </div>
  );
}

export default Select;
