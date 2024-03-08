import { Image } from "react-bootstrap";
import bannerInicio from "../assets/img/CABALLO5.png";
import bannerInicioCuadrado from "../assets/img/CABALLOCUADRADO5.png";
const BannerEmpresa = () => {
  return (
    <div>
      <div className="d-none d-md-block text-center">
        <div className="">
          <Image
            className="py-4"
            src={bannerInicio}
            fluid
            alt="inicio banner"
          />
        </div>
      </div>
      <div className="d-md-none d-block text-center"></div>
    </div>
  );
};

export default BannerEmpresa;
