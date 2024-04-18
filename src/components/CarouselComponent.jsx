import React from "react";
import Slider from "react-slick";

// Importa estilos slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cliente from "../assets/img/slider15.png";
import cliente2 from "../assets/img/slider3.png";
import cliente3 from "../assets/img/slider16.png";
import cliente4 from "../assets/img/slider8.png";

import { Link } from "react-router-dom";

// function NextArrow(props) {
//   const { onClick } = props;
//   return (
//     <div
//       className="slick-next"
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "transparent",
//         color: "black",
//         fontSize: "24px",
//         width: "30px",
//         height: "30px",
//         borderRadius: "50%",
//       }}
//       onClick={onClick}
//     >
//       ❯
//     </div>
//   );
// }

// function PrevArrow(props) {
//   const { onClick } = props;
//   return (
//     <div
//       className="slick-prev"
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "transparent",
//         color: "black",
//         fontSize: "24px",
//         width: "30px",
//         height: "30px",
//         borderRadius: "50%",
//       }}
//       onClick={onClick}
//     >
//       ❮
//     </div>
//   );
// }
const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
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
            <h5
              className="lato-regular text-white"
              style={{ fontSize: "24px" }}
            >
              "Elevamos el desempeño del Polo <br /> a través de un seguimiento,
              cuidado y dedicación exclusivos"
            </h5>
            <div className="mt-4">
              <Link className="" to="/servicios">
                <button className="ver-mas-btn text-white">
                  CONOCÉ NUESTROS SERVICIOS
                </button>
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
            <h5
              className="lato-regular text-white"
              style={{ fontSize: "24px" }}
            >
              "No sólo tratamos y cuidamos lo que más te importa;
              <br /> nos convertimos en parte de tu equipo"
            </h5>

            <div className="mt-4">
              <Link className="" to="/servicios">
                <button className="ver-mas-btn text-white">
                  CONOCÉ CÓMO TRABAJAMOS
                </button>
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
            <h5
              className="lato-regular text-white"
              style={{ fontSize: "24px" }}
            >
              “Transformar lo invisible en visible”
            </h5>

            <div className="mt-4">
              <Link className="" to="/servicios">
                <button className="ver-mas-btn text-white">
                  CONOCÉ EL USO DE LA CÁMARA TERMOGRÁFICA
                </button>
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
      </Slider>
    </div>
  );
};

export default CarouselComponent;
