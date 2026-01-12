import "./reset.css";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MapDisplay from "./components/MapDisplay";
import InfoCard from "./components/InfoCard";
import { useState, useEffect } from "react";

function App() {
  const [ipData, setIpData] = useState(null); // API 데이터를 담을 State

  const fetchIpInfo = async (ip = "") => {
    // 1. 주소 조립
    const apiKey = import.meta.env.VITE_IPIFY_API_KEY;
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;

    try {
      // 2. 데이터 요청
      const response = await fetch(url);
      const data = await response.json();
      console.log("데이터 확인:", data);

      // 3. 받은 데이터를 state에 담기
      setTimeout(() => {
        setIpData(data);
      }, 0);
    } catch (error) {
      console.error("오류 발생", error);
    }
  };

  // 4. 페이지가 처음 켜질 때 내 IP 정보를 가져옴
  useEffect(() => {
    fetchIpInfo();
  }, []);
  if (!ipData) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>Loading...</div>
    );
  }
  return (
    <main className="app-container">
      {ipData && (
        <>
          <section className="section-top">
            <SearchBar onSearch={fetchIpInfo} />
            <InfoCard
              ip={ipData.ip}
              location={`${ipData.location.region}, ${ipData.location.city}`}
              timezone={ipData.location.timezone}
              isp={ipData.isp}
            />
          </section>
          <section className="section-bottom">
            <MapDisplay lat={ipData.location.lat} lng={ipData.location.lng} />
          </section>
        </>
      )}
    </main>
  );
}

export default App;
