import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const markers = [
  {
    markerOffset: -15,
    name: "Syria",
    coordinates: [38.9968, 34.8021],
    description: "Capital: Damascus",
  },
  {
    markerOffset: -15,
    name: "Afghanistan",
    coordinates: [66.2023, 33.9391],
    description: "Capital: Kabul",
  },
];

// Define colors for specific countries
const getColor = (geo) => {
  switch (geo.properties.name) {
    case "Syria":
      return "#FF6347"; // Red for Syria
    case "Afghanistan":
      return "#4682B4"; // Steel Blue for Afghanistan
    case "Turkey":
      return "#FFD700"; // Gold for Turkey
    case "Iran":
      return "#32CD32"; // Lime Green for Iran
    default:
      return "#D6D6DA"; // Light grey for all other countries
  }
};

export default function WhereWeWork() {
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check for mobile size

  // Update state on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "150vh",
        position: "relative",
        textAlign: "center",
        backgroundColor: "#f5f5f5", // Light background color
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Box shadow for depth
      }}
    >
      <h1 style={{ marginTop: "25px", fontSize: "35px", fontWeight: "bold", color: "#333" }}>
        Where We Work
      </h1>

      {/* Conditionally render map or markers based on screen size */}
      {isMobile ? (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Mobile view - show only markers and their descriptions */}
          {markers.map(({ name, description }) => (
            <div
              key={name}
              style={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                padding: "15px",
                margin: "10px 0",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Card shadow
                width: "80%", // Responsive width
                textAlign: "left", // Left align text
              }}
            >
              <h2 style={{ fontSize: "20px", margin: "0", color: "#FF6347" }}>{name}</h2>
              <p style={{ margin: "5px 0", color: "#666" }}>{description}</p>
            </div>
          ))}
        </div>
      ) : (
        <ComposableMap style={{ height: "100%" }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getColor(geo)} // Apply color based on country
                  stroke="#FFFFFF"
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset, description }) => (
            <Marker
              key={name}
              coordinates={coordinates}
              onMouseEnter={() => setHoveredMarker(name)}
              onMouseLeave={() => setHoveredMarker(null)}
            >
              <circle r={5} fill="#FF6347" />
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{ fontFamily: "Arial", fontSize: 12 }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      )}

      {/* Tooltip */}
      {hoveredMarker && !isMobile && (
        <div
          style={{
            position: "absolute",
            top: "50%", // Adjust this value for your layout
            left: "50%", // Adjust this value for your layout
            transform: "translate(-50%, -50%)",
            padding: "5px 10px",
            backgroundColor: "#FFF",
            border: "1px solid #CCC",
            borderRadius: "5px",
            zIndex: 10,
          }}
        >
          {markers.find((marker) => marker.name === hoveredMarker).description}
        </div>
      )}
    </div>
  );
}
