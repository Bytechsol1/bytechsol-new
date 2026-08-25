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
import usa from "../assets/images/united states.png";
import pak from "../assets/images/pakista.svg";
import { useState } from "react";

const WorldMap: React.FC = () => {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const markers = [
    {
      name: "Pakistan",
      coordinates: [67.0011, 24.8607],
      code: "PK",
      flag: pak,
      address: `Office 301 4th floor, Business bay, M9, Block 3 A
Gulistan-e-Johar, Karachi, 75290, Pakistan`
    },
    {
      name: "USA",
      coordinates: [-98.5795, 39.8283],
      code: "US",
      flag: usa,
      address: `30 N Gould St Ste R,
Sheridan, WY 82801`
    }
  ];

  return (
    <>
      <div className="container">
        <div className="loc-content">
          <div className="loc-header" data-aos="fade-left">
            <span
              className="trs-highlight fw-bold d-block d-md-inline-block text-center text-md-start mx-auto"
              style={{
                maxWidth: "100%",
                fontSize: "32px", // smaller for mobile
                fontFamily: "Guminert",
                color: "#000",
              }}
            >
              Our Headquarters centrally based in USA & Pakistan
            </span>
          </div>
        </div>

        <div
          className="map d-flex justify-content-center align-items-center py-4 px-2"
          data-aos="fade-up"
          style={{
            background: "#fff",
            position: "relative",
          }}
        >
          <ComposableMap
            projection="geoMercator"
            width={800}
            height={400}
            style={{
              width: "100%",
              maxWidth: "900px", // keeps it responsive
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

                  let fill = "#fff"; // default
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
              <Marker 
                key={marker.name} 
                coordinates={marker.coordinates}
                onMouseEnter={() => setHoveredMarker(marker.name)}
                onMouseLeave={() => setHoveredMarker(null)}
              >
                <g>
                  {/* Country name + flag */}
                  <foreignObject width={200} height={150} x={-100} y={-80} style={{overflow: 'visible', pointerEvents: 'none'}}>
                    <div
                      className="d-flex flex-column align-items-center text-center"
                      style={{
                        fontSize: "12px", // smaller font for mobile
                        fontFamily: "Guminert-SemiBold, sans-serif",
                        fontWeight: "bold",
                        color: "#000",
                        gap: "4px",
                        cursor: "default",
                        marginTop: "20px",
                        pointerEvents: 'auto'
                      }}
                    >
                      <img
                        src={marker.flag}
                        alt={`${marker.name} Flag`}
                        className="img-fluid"
                        style={{ width: "24px", height: "24px" }}
                      />
                      <span>{marker.name}</span>

                      <div 
                        className="mt-2 p-2 bg-slate-900 text-white text-[11px] text-center font-medium rounded-lg shadow-xl transition-all duration-300"
                        style={{
                          width: marker.name === 'Pakistan' ? '220px' : '160px',
                          opacity: hoveredMarker === marker.name ? 1 : 0,
                          height: hoveredMarker === marker.name ? 'auto' : '0px',
                          overflow: 'hidden'
                        }}
                      >
                        {marker.address.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i === 0 && <br/>}
                          </React.Fragment>
                        ))}
                      </div>
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
