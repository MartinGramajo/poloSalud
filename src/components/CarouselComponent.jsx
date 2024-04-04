import React from "react";
import Slider from "react-slick";

// Importa estilos slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cliente from "../assets/img/slider0.1.png";
import cliente2 from "../assets/img/slider2.png";
import cliente3 from "../assets/img/slider3.png";
import cliente4 from "../assets/img/slider8.png";
import cliente5 from "../assets/img/slider10.png";

import { Link } from "react-router-dom";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slick-next"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        color: "black",
        fontSize: "24px",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      ❯
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slick-prev"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        color: "black",
        fontSize: "24px",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      ❮
    </div>
  );
}
const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Slider {...settings}>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            {" "}
            {/* Ajustado para centrar el texto */}
            <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>
              Optimice el rendimiento equino:{" "}
            </h5>
            <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>
              {" "}
              su socio en la excelencia del polo
            </h5>
            <div className="mt-4">
              <Link className="" to="/servicios">
                <button className="ver-mas-btn">Ver más</button>
              </Link>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img
              src={cliente}
              alt="Imagen"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        {/* Repite el div para más slides según sea necesario */}
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            {" "}
            {/* Ajustado para centrar el texto */}
            <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>
              "Elevamos el desempeño del Polo{" "}
            </h5>
            <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>
              a través de un cuidado y dedicación exclusivos "
            </h5>
            <div className="mt-4">
              <Link className="" to="/servicios">
                <button className="ver-mas-btn">Ver más</button>
              </Link>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img
              src={cliente2}
              alt="Imagen"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            {" "}
            {/* Ajustado para centrar el texto */}
            <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>
              "Polo Salud puede integrarse perfectamente con tu equipo
            </h5>
            <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>
              para mejorar el rendimiento, la salud y el bienestar de su caballo
              de polo."
            </h5>
            <div className="mt-4">
              <Link className="" to="/servicios">
                <button className="ver-mas-btn">Ver más</button>
              </Link>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img
              src={cliente3}
              alt="Imagen"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            {" "}
            {/* Ajustado para centrar el texto */}
            <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>
              "Servicios de Osteopatía Equina diseñados{" "}
            </h5>
            <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>
              para optimizar el rendimiento del caballo de Polo y prevenir
              lesiones"
            </h5>
            <div className="mt-4">
              <Link className="" to="/servicios">
                <button className="ver-mas-btn">Ver más</button>
              </Link>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img
              src={cliente4}
              alt="Imagen"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            {" "}
            {/* Ajustado para centrar el texto */}
            <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>
              "Descubra cómo su enfoque único se integra perfectamente.{" "}
            </h5>
            <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>
              con la cultura de su equipo, fomentando la colaboración y la
              excelencia"
            </h5>
            <div className="mt-4">
              <Link className="" to="/servicios">
                <button className="ver-mas-btn">Ver más</button>
              </Link>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img
              src={cliente5}
              alt="Imagen"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
