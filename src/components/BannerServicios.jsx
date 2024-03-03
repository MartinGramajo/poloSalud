import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import banner from "../assets/img/banner1.png";
import bannerCuadrado from "../assets/img/bannerCuadrado1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandFist, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import bannerServicios from "../assets/img/bannerServicios.jpeg";
import logoNuevo from "../assets/img/logo-nuevo.png";

const BannerServicios = () => {
  return (
    <div>
      <div className="d-none d-md-block">
        <div className="bg-dark">
          <Carousel className="" controls={false} fade>
            <Carousel.Item className="text-center">
              <Image
                className="color-morado-fondo "
                src={bannerServicios}
                alt="asdas"
                fluid
              />
              <Carousel.Caption className="">
                <div className="d-flex justify-content-center my-5">
                  <img className="tamaño-logo" src={logoNuevo} alt="logo" />
                </div>
                <h1>SERVICIOS</h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="d-md-none d-block">
        <div className="bg-dark">
          <Carousel controls={false} fade>
            <Carousel.Item>
              <Image
                className="opacity-1"
                src={bannerServicios}
                alt="asdas"
                fluid
              />
              <Carousel.Caption className="">
                <div className="d-flex justify-content-center ">
                  <img className="tamaño-logo" src={logoNuevo} alt="logo" />
                </div>
                <h1>SERVICIOS</h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BannerServicios;
