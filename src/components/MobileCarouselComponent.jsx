import React from "react";
import Slider from "react-slick";

// Importa estilos slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cliente from "../assets/img/slider0.1.png";
import cliente2 from "../assets/img/slider2.png";
import cliente3 from "../assets/img/slider3.png";
import cliente4 from "../assets/img/slider8.png";
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
        width: "20px",
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
        width: "10px",
        height: "30px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      ❮
    </div>
  );
}

const MobileCarouselComponent = () => {
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
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div>
            <img
              src={cliente}
              alt="Imagen"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="text-center mt-4">
            <h5 className="lato-regular" style={{ fontSize: "16px" }}>
              Optimice el rendimiento equino: su socio en la excelencia del polo
            </h5>
            <div className="mt-4">
              <Link className="" to="/servicios">
                <button className="ver-mas-btn">Ver más</button>
              </Link>
            </div>
          </div>
        </div>
        {/* Repite el div para más slides según sea necesario */}
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div>
            <img
              src={cliente2}
              alt="Imagen"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="text-center mt-4">
            <h5 className="lato-regular" style={{ fontSize: "16px" }}>
              Elevamos el desempeño del Polo a través de un cuidado y dedicación
              exclusivos
            </h5>

            <div className="mt-4">
              <Link className="" to="/servicios">
                <button className="ver-mas-btn">Ver más</button>
              </Link>
            </div>
          </div>
        </div>
        {/* Repite el patrón para más diapositivas */}
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div>
            <img
              src={cliente3}
              alt="Imagen"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="text-center mt-4">
            <h5 className="lato-regular" style={{ fontSize: "16px" }}>
              Polo Salud puede integrarse perfectamente con tu equipo para
              mejorar el rendimiento, la salud y el bienestar de su caballo de
              polo.
            </h5>

            <div className="mt-4">
              <Link className="" to="/servicios">
                <button className="ver-mas-btn">Ver más</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div>
            <img
              src={cliente4}
              alt="Imagen"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="text-center mt-4">
            <h5 className="lato-regular" style={{ fontSize: "16px" }}>
              Servicios de Osteopatía Equina diseñados para optimizar el
              rendimiento del caballo de Polo y prevenir lesiones.
            </h5>

            <div className="mt-4">
              <Link className="" to="/servicios">
                <button className="ver-mas-btn">Ver más</button>
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MobileCarouselComponent;
