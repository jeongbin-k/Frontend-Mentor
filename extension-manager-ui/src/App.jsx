import "./reset.css";
import "./App.css";
import { useState, useEffect } from "react";
import data from "./data/data.json";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import ExtensionGrid from "./components/ExtensionGrid";

function App() {
  const [extensions, setExtensions] = useState(data);
  const [filterStatus, setFilterStatus] = useState("All");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 다크모드
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // 필터 기능
  const filteredExtensions = extensions.filter((item) => {
    if (filterStatus === "All") return true;
    if (filterStatus === "Active") return item.isActive === true;
    if (filterStatus === "Inactive") return item.isActive === false;
    return true;
  });

  // 토글 기능
  const onToggle = (id) => {
    setExtensions((prev) =>
      prev.map((item) =>
        Number(item.id) === Number(id)
          ? { ...item, isActive: !item.isActive }
          : item
      )
    );
  };

  // 삭제 기능
  const onDelete = (id) => {
    setExtensions((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    console.log("현재 확장된 리스트 :", extensions);
  }, [extensions]);

  return (
    <div className={`app-content ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="app-inner">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <FilterBar
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />
        <ExtensionGrid
          onToggle={onToggle}
          onDelete={onDelete}
          extensions={filteredExtensions}
        />
      </div>
    </div>
  );
}

export default App;
