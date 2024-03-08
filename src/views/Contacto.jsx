import { Image } from "react-bootstrap";
import ContactoContenido from "../components/ContactoContenido";
import bannerInicio from "../assets/img/CABALLO3.png";
import bannerInicioCuadrado from "../assets/img/CABALLOCUADRADO3.png";

const Contacto = () => {
  return (
    <div>
      <div className="d-none d-md-block text-center">
        <Image className="py-4" src={bannerInicio} fluid alt="inicio banner" />
      </div>
      <div className="d-md-none d-block text-center">
        <div>
          <Image
            className="py-4"
            src={bannerInicioCuadrado}
            fluid
            alt="inicio banner"
          />
        </div>
      </div>
      <ContactoContenido />
    </div>
  );
};

export default Contacto;
