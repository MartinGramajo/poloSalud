import React from "react";
import backgroundImage from "../assets/img/slider15.png"; // Ruta de tu imagen de fondo
import logoNuevo from "../assets/img/logo-blanco.png";
import { Link } from "react-router-dom";

const BioComponent = () => {
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
          width: "70%", // Ancho del área de la imagen de fondo
          height: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`, // Degradado negro sobre la imagen de fondo
          backgroundSize: "cover",
          backgroundPosition: "bottom", // Ajusta la posición de la imagen a la izquierda
        }}
      />

      {/* Contenedor del contenido negro */}
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "30%", // Ancho del contenido negro
          height: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), linear-gradient(black, black)`, // Degradado negro sobre el color negro
          opacity: "0.9", // Opacidad del contenido negro
        }}
      >
        {/* Marca abajo */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            color: "white",
          }}
        >
          <img
            style={{ width: "250px" }}
            className="img-fluid"
            src={logoNuevo}
            alt=""
          />
        </div>
      </div>

      {/* Biografía */}
      <div
        style={{
          position: "absolute",
          top: "78%",
          left: "10%",
          transform: "translateY(-50%)",
          color: "white",
          zIndex: "1", // Asegura que la biografía esté sobre la imagen de fondo
          maxWidth: "40%", // Ancho máximo de la biografía
        }}
      >
        <h2>
          María Lujan Arias <br />
          Osteópata D.O.
        </h2>
        <p>
          En osteopatía equina, trato sobretodo caballos de Polo y Salto. Me
          focalizo en que puedan: mantener su salud ante la demanda física
          propia de la disciplina extender su vida deportiva, disminuyendo el
          porcentaje de lesiones a repetición mantener la flexibilidad de su
          columna vertebral y su musculatura Acompañamiento in situ en las
          competiciones deportivas
        </p>
        <div className="mt-4">
          <Link to="/quien/soy">
            <button className="ver-mas-btn text-white">Ver biografía</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BioComponent;
