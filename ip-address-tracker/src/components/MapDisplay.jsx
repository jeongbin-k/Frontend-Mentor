import "./MapDisplay.jsx";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapDisplay.css";
import iconLocation from "../assets/images/icon-location.svg";

const ChangeView = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    // 좌표가 유효하고, 실제로 지도의 현재 중심과 다를 때만 실행
    if (center && center[0] !== undefined) {
      const currentCenter = map.getCenter();
      if (currentCenter.lat !== center[0] || currentCenter.lng !== center[1]) {
        map.setView(center, 13);
      }
    }
  }, [center, map]);

  return null;
};

// 마커
const customIcon = new L.Icon({
  iconUrl: iconLocation,
  iconSize: [46, 56],
  iconAnchor: [23, 56],
});

const MapDisplay = ({ lat, lng }) => {
  const position = [lat, lng];
  return (
    <div id="map">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <ChangeView center={position} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={position} icon={customIcon} />
      </MapContainer>
      <h1>Map</h1>
    </div>
  );
};

export default MapDisplay;
