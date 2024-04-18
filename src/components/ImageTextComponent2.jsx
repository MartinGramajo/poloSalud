import React from "react";
import backgroundImage from "../assets/img/slider6.png";
import { Link } from "react-router-dom";

const ImageTextComponent2 = () => {
  return (
    <div className="d-flex align-items-center">
      {/* Texto a la derecha */}
      <div className="container" style={{ width: "50%" }}>
        <h3>CÓMO TRABAJAMOS</h3>
        <p>
          Trabajamos en los principales spots de polo más reconocidos. Nos
          desplazamos a los principales spots de polo más reconocidos para
          ofrecer nuestros servicios in situ, integrándonos en la dinámica y
          funcionamiento de la organización. Es nuestro deseo brindar servicios
          de calidad que se integren perfectamente a la organización y que
          vengan a sumar a la salud y bien estar tanto de los caballos como los
          jugadores. Establecemos un plan de tratamiento y mantenimiento
          realista y según las propias necesidades de cada organización. Nuestro
          espíritu es innovador, colaborativo y eficaz
        </p>
      </div>
      {/* Imagen cuadrada a la izquierda */}
      <div style={{ width: "50%", marginRight: "20px" }}>
        <img
          src={backgroundImage}
          alt="Imagen"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default ImageTextComponent2;
