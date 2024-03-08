import { Image } from "react-bootstrap";
import bannerServicios from "../assets/img/CABALLO4.png";
import bannerServiciosCuadrado from "../assets/img/CABALLOCUADRADO4.png";

const BannerServicios = () => {
  return (
    <div>
      <div className="d-none d-md-block text-center">
        <Image
          className="py-4"
          src={bannerServicios}
          fluid
          alt="inicio banner"
        />
      </div>
      <div className="d-md-none d-block text-center">
        <div>
          <Image
            className="py-4"
            src={bannerServiciosCuadrado}
            fluid
            alt="inicio banner"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerServicios;
