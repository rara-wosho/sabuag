const TabsContainer = ({ activeTab, setActiveTab }) => {
  return (
    <div
      style={{ maxWidth: 400 }}
      className="tabs-container mt-2 mb-2 d-inline-flex align-items-center border w-100 overflow-hidden rounded-3"
    >
      <div
        onClick={() => setActiveTab(1)}
        className={`tab me-2 w-100 rounded-3 ${
          activeTab === 1 ? "active" : ""
        }`}
      >
        <p className="mb-0 px-3 px-md-5 py-1 py-md-2 text-center tab-label">
          This month
        </p>
      </div>
      <div
        onClick={() => setActiveTab(2)}
        className={`tab me-2 w-100 rounded-3 ${
          activeTab === 2 ? "active" : ""
        }`}
      >
        <p className="mb-0 px-3 px-md-5 py-1 py-md-2 text-center tab-label">
          Recent
        </p>
      </div>
      <div
        onClick={() => setActiveTab(3)}
        className={`tab w-100 rounded-3 ${activeTab === 3 ? "active" : ""}`}
      >
        <p className="mb-0 px-3 px-md-5 py-1 py-md-2 text-center tab-label">
          All
        </p>
      </div>
    </div>
  );
};

export default TabsContainer;
