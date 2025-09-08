import "../assets/components-css/WorldMap.css";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import type { Feature } from "geojson";
import { GEO_API_URL } from "../enviroment/BytechsolApi";
import usa from "../assets/images/united states.png"
import pak from "../assets/images/pakista.svg"

const WorldMap: React.FC = () => {
  const markers = [
    {
      name: "Pakistan",
      coordinates: [67.0011, 24.8607],
      code: "PK",
      flag: pak, 
    },
    {
      name: "USA",
      coordinates: [-98.5795, 39.8283],
      code: "US",
      flag: usa, 
    },
  ];

  return (
    <>
    <div className="container">
      <div className="loc-content">
        <div className="loc-header" data-aos="fade-left">
          <span
  className="trs-highlight fw-bold d-inline-block position-relative text-start"
  style={{ width: "1091px", fontSize: "55px", fontFamily: "Guminert", color: "#000" }}
>
  Our Headquarters centrally based in Pakistan & USA
</span>

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
          background: "#fff", // white background
          position: "relative",
        }}
      >
        <ComposableMap
          projection="geoMercator"
          width={800}
          height={400}
          style={{
            width: "100%",
            // maxWidth: "900px",
            height: "auto",
          }}
        >
          {/* Render countries */}
          <Geographies geography={GEO_API_URL}>
            {({ geographies }: { geographies: Feature[] }) =>
              geographies.map((geo: Feature) => {
                const countryCode = geo.properties?.iso_a2;
                const isPakistan = countryCode === "PK";
                const isUSA = countryCode === "US";

                let fill = "#fff"; // default blue
                if (isPakistan || isUSA) fill = "#fff";

                return (
                  <Geography
                    key={geo.id as string}
                    geography={geo}
                    fill={fill}
                    stroke="#D6D6DA"
                    style={{
                      default: { outline: "none" },
                      hover: {
                        fill: isPakistan
                          ? "#32CD32"
                          : isUSA
                          ? "#000"
                          : "#fff",
                        outline: "none",
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>

        

          {/* Fixed visible country labels with flags */}
          {markers.map((marker) => (
            <Marker key={marker.name} coordinates={marker.coordinates}>
              <g>
                {/* Country name + flag */}
                <foreignObject width={80} height={50} x={-40} y={-60}>
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "14px",
                      fontFamily: "Gilroy-SemiBold, sans-serif",
                      fontWeight: "bold",
                      color: "#000",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <img
                      src={marker.flag}
                      alt={`${marker.name} Flag`}
                      style={{ width: "30px", height: "30px" }}
                    />
                    <span>{marker.name}</span>
                  </div>
                </foreignObject>

                {/* Location icon */}
                <foreignObject width={30} height={30} x={-8} y={-25}>
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "24px",
                      color: "#3b82f6",
                    }}
                  >
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                </foreignObject>
              </g>
            </Marker>
          ))}
        </ComposableMap>
      </div>
          </div>
    </>
  );
};

export default WorldMap;
