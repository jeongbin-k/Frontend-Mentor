import "./ExtensionCard.css";

const ExtensionCard = ({ item, onToggle, onDelete }) => {
  const images = import.meta.glob("../assets/images/*.svg", { eager: true });

  const getImageUrl = (path) => {
    // path가 "./assets/images/logo.svg" 라면
    //"../assets/images/logo.svg"로 바꿔서 매칭합니다.
    const key = path.replace("./assets", "../assets");
    return images[key]?.default || "";
  };

  return (
    <div className="extension-card">
      <div className="card-text">
        <img src={getImageUrl(item.logo)} alt="logo" />
        <div className="card-title">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      </div>
      <div className="card-state">
        <button
          type="button"
          className="remove"
          onClick={() => onDelete(item.id)}
        >
          Remove
        </button>
        <div>
          <input
            type="checkbox"
            className="toggle-input"
            id={`toggle-${item.id}`}
            checked={item.isActive}
            onChange={() => {
              console.log("클릭됨", item.id);
              onToggle(item.id);
            }}
          />
          <label className="toggle-label" htmlFor={`toggle-${item.id}`}></label>
        </div>
      </div>
    </div>
  );
};

export default ExtensionCard;
