import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Importa los íconos personalizados para cada país
import iconoArgentina from "../assets/img/icono-argentina.png";
import iconoInglaterra from "../assets/img/icono-inglaterra.png";
import iconoEspana from "../assets/img/icono-espana.png";
import iconoFrancia from "../assets/img/icono-francia.png";

// Configura los íconos personalizados para Leaflet
const iconos = {
  Argentina: new L.Icon({
    iconUrl: iconoArgentina,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  }),
  Inglaterra: new L.Icon({
    iconUrl: iconoInglaterra,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  }),
  España: new L.Icon({
    iconUrl: iconoEspana,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  }),
  Francia: new L.Icon({
    iconUrl: iconoFrancia,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  }),
};

const MapComponent = () => {
  const [checkList, setCheckList] = useState([
    { name: "Argentina", coordinates: [-38.4161, -63.6167] },
    { name: "Inglaterra", coordinates: [51.509865, -0.118092] },
    { name: "España", coordinates: [40.416775, -3.70379] },
    { name: "Francia", coordinates: [46.603354, 1.888334] },
  ]);

  return (
    <section className="container pt-5">
      <MapContainer
        center={[10, 0]}
        zoom={2}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {checkList.map((marker, index) => (
          <Marker
            key={index}
            position={marker.coordinates}
            icon={iconos[marker.name]}
          >
            <Popup>
              <div>
                <p>
                  <strong>País:</strong> {marker.name}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default MapComponent;
