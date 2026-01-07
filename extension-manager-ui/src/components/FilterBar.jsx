import "./FilterBar.css";

const Filterbar = ({ filterStatus, setFilterStatus }) => {
  return (
    <div className="filter-bar">
      <h1>Extension List</h1>
      <div className="filter-btn">
        <button
          type="button"
          className={filterStatus === "All" ? "btn-active" : ""}
          onClick={() => setFilterStatus("All")}
        >
          All
        </button>
        <button
          type="button"
          className={filterStatus === "Active" ? "btn-active" : ""}
          onClick={() => setFilterStatus("Active")}
        >
          Active
        </button>
        <button
          type="button"
          className={filterStatus === "Inactive" ? "btn-active" : ""}
          onClick={() => setFilterStatus("Inactive")}
        >
          Inactive
        </button>
      </div>
    </div>
  );
};

export default Filterbar;
