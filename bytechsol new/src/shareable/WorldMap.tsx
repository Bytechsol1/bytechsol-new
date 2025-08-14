import "../assets/components-css/WorldMap.css";
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import type { Feature } from "geojson";
import { GEO_API_URL } from "../enviroment/Bytechsol-Api";

const WorldMap: React.FC = () => {
  const [tooltipContent, setTooltipContent] = useState("");

  const markers = [
    {
      name: "Pakistan",
      coordinates: [67.0011, 24.8607],
      code: "PK",
    },
    {
      name: "United States",
      coordinates: [-98.5795, 39.8283],
      code: "US",
    },
  ];

  return (
    <>
      <div className="loc-content">
        <div className="loc-header" data-aos="fade-left">
          <span>Our </span>
          <span className="trs-highlight">Locations</span>
        </div>
      </div>

      <div
        className="map"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          padding: "40px 10px",
          background: "#1b3276",
          position: "relative",
        }}
      >
        <ComposableMap
          projection="geoMercator"
          width={800}
          height={400}
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "auto",
          }}
        >
          {/* Render countries first */}
          <Geographies geography={GEO_API_URL}>
            {({ geographies }: { geographies: Feature[] }) =>
              geographies.map((geo: Feature) => {
                const countryCode = geo.properties?.iso_a2;
                const name = geo.properties?.name;

                const isPakistan = countryCode === "PK";
                const isUSA = countryCode === "US";

                let fill = "#EAEAEC";
                if (isPakistan || isUSA) {
                  fill = "#FFD700";
                }

                return (
                  <Geography
                    key={geo.id as string}
                    geography={geo}
                    fill={fill}
                    stroke="#D6D6DA"
                    onMouseEnter={() => {
                      if (isPakistan || isUSA) setTooltipContent(name);
                    }}
                    onMouseLeave={() => setTooltipContent("")}
                    style={{
                      default: { outline: "none" },
                      hover: {
                        fill: isPakistan
                          ? "#32CD32"
                          : isUSA
                          ? "#1E90FF"
                          : "#EAEAEC",
                        outline: "none",
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
          <Geographies geography={GEO_API_URL}>
            {({
              projection,
            }: {
              projection: (coordinates: [number, number]) => [number, number];
              geographies: Feature[];
            }) => {
              const pakistan = projection([67.0011, 24.8607]);
              const usa = projection([-98.5795, 39.8283]);
              const controlX = (pakistan[0] + usa[0]) / 2;
              const controlY =
                (pakistan[1] + usa[1]) / 2 - Math.abs(pakistan[0] - usa[0]) / 3;

              const pathData = `M${usa[0]},${usa[1]} Q${controlX},${controlY} ${pakistan[0]},${pakistan[1]}`;

              return (
                <g>
                  <path
                    d={pathData}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    strokeDasharray="6 4"
                  />
                </g>
              );
            }}
          </Geographies>
          {/* Marker icons */}
          // Update your Marker component in the WorldMap.tsx file
          {markers.map((marker) => (
            <Marker
              key={marker.name}
              coordinates={marker.coordinates}
              onMouseEnter={() => setTooltipContent(marker.name)}
              onMouseLeave={() => setTooltipContent("")}
            >
              <g>
                {/* Country name label - appears on hover */}
                {tooltipContent === marker.name && (
                  <text
                    textAnchor="middle"
                    y={-40}
                    style={{
                      fill: "#3b82f6",
                      fontSize: "14px",
                      fontFamily: "Gilroy-SemiBold, sans-serif",
                      pointerEvents: "none",
                      fontWeight: "bold",
                    }}
                  >
                    {marker.name}
                  </text>
                )}

                {/* Location icon */}
                <foreignObject width={30} height={30} x={-8} y={-25}>
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "24px",
                      color: "#3b82f6",
                      transition: "transform 0.3s ease, color 0.3s ease",
                    }}
                    className="location-icon"
                  >
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                </foreignObject>
              </g>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </>
  );
};

export default WorldMap;
