const ProgressBar = ({ value }) => {
  const width = value ? 100 - value : 100;
  return (
    <div className="d-flex align-items-center">
      <div className="progress-bar d-flex align-items-end">
        <div style={{ width: `${width}%` }} className="bar"></div>
      </div>
      <p className="mb-0 text-secondary ms-1 fs-8">{value ? value : 0}%</p>
    </div>
  );
};

export default ProgressBar;
