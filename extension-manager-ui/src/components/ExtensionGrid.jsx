import "./ExtensionGrid.css";
import ExtensionCard from "./ExtensionCard";

const ExtensionGrid = ({ extensions, onToggle, onDelete }) => {
  return (
    <div className="extension-grid">
      {extensions.map((item, index) => (
        <ExtensionCard
          key={index}
          item={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ExtensionGrid;
