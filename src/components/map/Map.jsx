import React, { useEffect, useState } from "react";
import { taskers } from "../../../temporaryData"; // Assuming this contains your taskers data
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import proj4 from "proj4";

const Map = ({ customH, customW, currentPro, radius }) => {
  const [primaryLatLng, setPrimaryLatLng] = useState(null); // State for transformed coordinates
  const [proMarker, setProMarker] = useState(null); // State for marker position

  useEffect(() => {
    const fetchCoordinates = async () => {
      const res = taskers.filter(
        (tasker) => tasker.username === currentPro.username
      );

      if (res.length > 0) {
        let currentPro_address = res[0].address;

        // Ignore any text starting from ', PARKSVILLE'
        const indexOfParksville = currentPro_address.indexOf(", PARKSVILLE");
        if (indexOfParksville !== -1) {
          currentPro_address = currentPro_address.substring(
            0,
            indexOfParksville
          );
        }

        try {
          const response = await fetch("../../Parksville.geojson");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();

          if (data.features) {
            let coordinatesFound = false;

            data.features.forEach((feature) => {
              const properties = feature.properties;
              if (
                properties &&
                properties.Address &&
                properties.Address === currentPro_address
              ) {
                const coordinates = feature.geometry.coordinates;

                // Define the source and target coordinate systems for transformation
                const sourceEPSG =
                  "+proj=utm +zone=10 +ellps=GRS80 +datum=NAD83 +units=m +no_defs";
                const targetEPSG =
                  "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs";

                // Perform coordinate transformation from source to target
                const transformedCoords = proj4(
                  sourceEPSG,
                  targetEPSG,
                  coordinates
                );

                // Set primaryLatLng after transformation
                setPrimaryLatLng(transformedCoords);

                coordinatesFound = true;
              }
            });

            if (!coordinatesFound) {
              console.log(
                "Coordinates not found for address:",
                currentPro_address
              );
            }
          } else {
            console.warn("No features found in GeoJSON data");
          }
        } catch (error) {
          console.error("Error fetching or parsing GeoJSON:", error);
        }
      }
    };

    fetchCoordinates();
  }, [currentPro]);

  useEffect(() => {
    // Update proMarker when primaryLatLng changes
    if (primaryLatLng) {
      // Leaflet's Spherical Mercator projection unprojects the transformed coordinates
      const newLatLng = L.latLng(
        L.Projection.SphericalMercator.unproject(L.point(primaryLatLng))
      );

      setProMarker(newLatLng);
    }
  }, [primaryLatLng]);

  const temporary_coord = [-13852556.369556686, 6333954.2980660135];
  const temporary_coord_latlang = L.latLng(
    L.Projection.SphericalMercator.unproject(L.point(temporary_coord))
  );

  return (
    proMarker && (
      <MapContainer
        center={temporary_coord_latlang}
        zoom={14}
        style={{ height: customH, width: customW }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          noWrap={false}
          style={{ border: "none", outline: "none" }}
        />
        <Circle center={temporary_coord_latlang} radius={radius} />
      </MapContainer>
    )
  );
};

export default Map;
