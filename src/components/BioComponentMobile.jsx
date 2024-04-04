import React from "react";
import backgroundImage from "../assets/img/slider15.png"; // Ruta de tu imagen de fondo
import logoNuevo from "../assets/img/logo-blanco.png";
import { Link } from "react-router-dom";

const BioComponentMobile = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "700px",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Contenedor de la imagen de fondo con degradado negro */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%", // Ancho del área de la imagen de fondo
          height: "80%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`, // Degradado negro sobre la imagen de fondo
          backgroundSize: "cover",
          backgroundPosition: "bottom", // Ajusta la posición de la imagen a la izquierda
        }}
      />

      {/* Biografía */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
          color: "white",
          zIndex: "1", // Asegura que la biografía esté sobre la imagen de fondo
          maxWidth: "80%", // Ancho máximo de la biografía
        }}
      >
        <h2>María Lujan Arias</h2>
        <h3>Osteópata D.O.</h3>
        <p>
          En osteopatía equina, trato sobretodo caballos de Polo y Salto. Me
          focalizo en que puedan: mantener su salud ante la demanda física
          propia de la disciplina, extender su vida deportiva, disminuyendo el
          porcentaje de lesiones a repetición, y mantener la flexibilidad de su
          columna vertebral y su musculatura. Ofrezco acompañamiento in situ en
          las competiciones deportivas.
        </p>
        <div className="mt-4">
          <Link to="/quien/soy">
            <button className="ver-mas-btn text-white">Ver biografía</button>
          </Link>
        </div>
      </div>

      {/* Contenedor del contenido negro */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%", // Ancho del contenido negro
          height: "20%",
          backgroundColor: "black",
          opacity: "0.9", // Opacidad del contenido negro
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Marca */}
        <div>
          <img
            style={{ width: "100px" }}
            className="img-fluid"
            src={logoNuevo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BioComponentMobile;
