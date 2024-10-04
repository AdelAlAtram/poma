import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const markers = [
  {
    markerOffset: -15,
    name: "Afghanistan",
    coordinates: [66.2023, 33.9391],
    description:
      "In Afghanistan, mental health providers are key to providing and advocating for mental health support within their communities. PoMA makes sure they can do that by building their capacity through training and providing clinical supervision.",
  },
  {
    markerOffset: -15,
    name: "Syria",
    coordinates: [38.9968, 34.8021],
    description:
      "In Syria, graduates are well-positioned to deliver community-based psychological support. PoMA has empowered them to do so by developing and delivering an accredited program in Psychosocial Support.",
  },
  {
    markerOffset: -15,
    name: "Iraq",
    coordinates: [43.6793, 33.2232],
    description:
      "In Iraq, minority Kurdish communities in the North of the country have been discriminated against and persecuted for decades, with women and girls experiencing a high level of sexual and gender-based violence.",
  },
  {
    markerOffset: -15,
    name: "Libya",
    coordinates: [17.2283, 26.3351],
    description:
      "In Libya, access to mental health support is limited by cultural barriers such as stigma and shame. PoMA works to integrate mental health into existing Child Protection programs.",
  },
  {
    markerOffset: -15,
    name: "South Africa",
    coordinates: [24.9916, -30.5595],
    description:
      "In South Africa, PoMA partnered with a government care agency to support the mental health needs of abandoned children or those removed from their families.",
  },
  {
    markerOffset: -15,
    name: "Switzerland",
    coordinates: [8.2275, 46.8182],
    description:
      "In Switzerland, certain communities are without access to health and social services, due to a myriad of barriers including language and lack of awareness.",
  },
  {
    markerOffset: -15,
    name: "Poland",
    coordinates: [19.1451, 51.9194],
    description:
      "Poland has hosted a significant number of Ukrainian and third-country refugees since 2022, the majority of whom have traveled by land and settled in major cities.",
  },
  {
    markerOffset: -15,
    name: "Ukraine",
    coordinates: [31.1656, 48.3794],
    description:
      "In Ukraine and neighboring countries, displaced Ukrainians are in dire need of mental health and psychosocial support services. PoMA's research helps to advocate for greater awareness and access.",
  },
  {
    markerOffset: -15,
    name: "Peru",
    coordinates: [-75.0152, -9.19],
    description:
      "In Peru, PoMA collaborated with non-profit organizations to develop and provide mental health support for children in care, addressing the unique challenges faced by those without parental care and stability.",
  },
  {
    markerOffset: -15,
    name: "USA",
    coordinates: [-95.7129, 37.0902],
    description:
      "In the USA, new migrants face challenges finding accommodation, accessing social services, and integrating into wider society.",
  },
];

// Define colors for specific countries
const getColor = (geo) => {
  switch (geo.properties.name) {
    case "Afghanistan":
      return "#4682B4"; // Steel Blue for Afghanistan
    case "Syria":
      return "#FF6347"; // Red for Syria
    case "Iraq":
      return "#32CD32"; // Lime Green for Iraq
    case "Libya":
      return "#FFD700"; // Gold for Libya
    case "South Africa":
      return "#FF8C00"; // Dark Orange for South Africa
    case "Switzerland":
      return "#8A2BE2"; // BlueViolet for Switzerland
    case "Poland":
      return "#FF4500"; // OrangeRed for Poland
    case "Ukraine":
      return "#1E90FF"; // DodgerBlue for Ukraine
    case "Peru":
      return "#FF69B4"; // Hot Pink for Peru
    case "USA":
      return "#83BDF7"; // Sky Blue for USA
    default:
      return "#3ED0A1"; // Light grey for all other countries
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
              <circle r={3} fill="black" />
              <text
                textAnchor="middle"
                y={(() => {
                  // Apply custom spacing for Switzerland, Poland, Ukraine
                  if (name === "Switzerland") return markerOffset + 30;
                  if (name === "Ukraine") return markerOffset + 10;
                  if (name === "Poland") return markerOffset + 4;
                  // Apply custom spacing for Syria and Iraq
                  if (name === "Syria") return markerOffset + 5;
                  if (name === "Iraq") return markerOffset + 28;
                  // Default offset for all other markers
                  return markerOffset;
                })()}
                style={{ fontSize: 13 }}
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
