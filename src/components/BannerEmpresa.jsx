import { Image } from "react-bootstrap";
import bannerServicios from "../assets/img/CABALLO4.png";
import bannerServiciosCuadrado from "../assets/img/CABALLOCUADRADO4.png";
const BannerEmpresa = () => {
  return (
    <div>
      <div className="d-none d-md-block text-center">
        <div className="">
          <Image
            className="py-4"
            src={bannerServicios}
            fluid
            alt="inicio banner"
          />
        </div>
      </div>
      <div className="d-md-none d-block text-center">
        <div>
          <Image
            className="py-4"
            src={bannerServicios}
            fluid
            alt="inicio banner"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerEmpresa;
