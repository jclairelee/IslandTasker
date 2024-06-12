import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapComponent = () => {
  const [geojsonData, setGeojsonData] = useState(null);
  const [address, setAddress] = useState("");
  const [pinCoordinates, setPinCoordinates] = useState(null);

  useEffect(() => {
    fetch("/Parksville.geojson")
      .then((response) => response.json())
      .then((data) => setGeojsonData(data))
      .catch((error) => console.error("Error fetching GeoJSON data:", error));
  }, []);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePinAddress = () => {
    const geocodeUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      address
    )}`;

    fetch(geocodeUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Geocoding Response:", data);
        if (data && data.length > 0) {
          const lat = parseFloat(data[0].lat);
          const lon = parseFloat(data[0].lon);
          setPinCoordinates([lat, lon]);
        } else {
          console.error("No results found");
        }
      })
      .catch((error) => {
        console.error("Error fetching geocoding data:", error);
      });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="Enter Address"
        />
        <button onClick={handlePinAddress}>Pin Address</button>
      </div>
      <MapContainer
        center={[49.3197, -124.3136]}
        zoom={9}
        style={{ height: "80vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {geojsonData && <GeoJSON data={geojsonData} />}
        {pinCoordinates && (
          <Marker position={pinCoordinates}>
            <Popup>You pinned this address!</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
