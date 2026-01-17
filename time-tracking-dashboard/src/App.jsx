import "./reset.css";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import ActivityCard from "./components/ActivityCard";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [timeframe, setTimeframe] = useState("weekly");

  return (
    <main className="app-container">
      <div className="dashboard-grid">
        <ProfileCard timeframe={timeframe} setTimeframe={setTimeframe} />

        {data.map((item) => (
          <ActivityCard key={item.title} data={item} timeframe={timeframe} />
        ))}
      </div>
    </main>
  );
}

export default App;
