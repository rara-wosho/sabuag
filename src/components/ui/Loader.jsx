import "./Loader.css";
const Loader = () => {
  return (
    <div className="loader">
      <div className="rounded-circle bg-primary"></div>
      <div className="rounded-circle bg-secondary"></div>
      <div className="rounded-circle bg-primary"></div>
      <div className="rounded-circle bg-secondary"></div>
    </div>
  );
};

export default Loader;
