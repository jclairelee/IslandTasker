import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./ServiceArea.scss";
import { taskers } from "../../../temporaryData";
const ServiceArea = () => {
  const [geojsonData, setGeojsonData] = useState(null);
  const [address, setAddress] = useState("");
  const [pinCoordinates, setPinCoordinates] = useState([
    [49.3496, -124.4414], // Qualicum Beach, BC
    [49.3197, -124.3136], // Parksville, BC
    [49.2749, -124.1539], // Nanoose Bay, BC
    [49.1666, -123.936], // Nanaimo, BC
    [49.2404, -124.8028], // Port Alberni, BC
  ]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 767);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
          setPinCoordinates([...pinCoordinates, [lat, lon]]);
        } else {
          console.error("No results found");
        }
      })
      .catch((error) => {
        console.error("Error fetching geocoding data:", error);
      });
  };

  const calculateBoundingBox = (coords) => {
    let minLat = coords[0][0],
      maxLat = coords[0][0];
    let minLng = coords[0][1],
      maxLng = coords[0][1];

    coords.forEach(([lat, lng]) => {
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
      if (lng < minLng) minLng = lng;
      if (lng > maxLng) maxLng = lng;
    });

    return { minLat, maxLat, minLng, maxLng };
  };

  const getCenterAndZoom = (boundingBox) => {
    const { minLat, maxLat, minLng, maxLng } = boundingBox;
    const center = [(minLat + maxLat) / 2, (minLng + maxLng) / 2];

    // This is a simple approximation for zoom level. Adjust as needed.
    const latDiff = maxLat - minLat;
    const lngDiff = maxLng - minLng;
    const maxDiff = Math.max(latDiff, lngDiff);

    let zoom;
    if (maxDiff < 0.01) zoom = 13;
    else if (maxDiff < 0.1) zoom = 12;
    else if (maxDiff < 0.5) zoom = 10;
    else zoom = 8;

    return { center, zoom };
  };

  const boundingBox = calculateBoundingBox(pinCoordinates);
  const { center, zoom } = getCenterAndZoom(boundingBox);

  const handleMarkerClick = (index) => {
    const profileUrl = `/task/${index}`;

    window.location.href = profileUrl;
  };
  const mapStyling_mobile = {
    height: "30vh",
    width: "100%",
    borderRadius: "16px",
  };
  const mapStyling_regular = {
    height: "100%",
    width: "100%",
    borderRadius: "16px",
  };
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 4;

  const displayedTaskers = showAll
    ? taskers
    : taskers.slice(0, initialDisplayCount);

  return (
    <div className="serviceArea">
      <div className="serviceArea-left">
        <h1 className="serviceArea-left__title">Results on Map</h1>
        <MapContainer
          center={center}
          zoom={zoom}
          style={isSmallScreen ? mapStyling_mobile : mapStyling_regular}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {geojsonData && <GeoJSON data={geojsonData} />}

          {pinCoordinates.map((coord, index) => (
            <Marker key={index} position={coord}>
              <Popup>
                <button onClick={() => handleMarkerClick(index)}>
                  View Profile
                </button>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className="serviceArea-right">
        <h1 className="serviceArea-right__header">Searched Taskers</h1>
        <div className="serviceArea-rightBox">
          {displayedTaskers.map((tasker, index) => (
            <div className="serviceArea-rightBox__profile" key={index}>
              <div className="serviceArea-rightBox__profile__pic">
                <img src={tasker.pp} alt="Profile" />
              </div>
              <div className="serviceArea-rightBox__profile__details">
                <h2 className="serviceArea-rightBox__profile__name">
                  {tasker.username}
                </h2>
                <p className="serviceArea-rightBox__profile__description">
                  {tasker.desc}
                </p>
                <div className="serviceArea-rightBox__profile__actions">
                  <button className="serviceArea-rightBox__profile__btn">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
          {!showAll && taskers.length > initialDisplayCount && (
            <div className="serviceArea-rightBox__profile__viewMore">
              <button onClick={() => setShowAll(true)}>View More</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ServiceArea;
