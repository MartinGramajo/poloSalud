import Brands from "../components/Brands";
import CarouselComponent from "../components/CarouselComponent";
import CarouselHome from "../components/CarouselComponent";
import ContenidoInicialHome from "../components/ContenidoInicialHome";
import DondeEncontrarnos from "../components/DondeEncontrarnos";
import MapComponent from "../components/MapComponent";
import MobileCarouselComponent from "../components/MobileCarouselComponent";
import NuestrosRecursos from "../components/NuestrosRecursos";
import PorqueElegirPolo from "../components/PorqueElegirPolo";
import PorqueElegirPolo2 from "../components/PorqueElegirPolo2";

const Home = () => {
  return (
    <div>
      <ContenidoInicialHome />
      <div className="d-none d-lg-block">
        <CarouselComponent />
      </div>
      <div className="d-lg-none d-block">
        <MobileCarouselComponent />
      </div>
      <div className="pt-4">
        <Brands />
      </div>
      <NuestrosRecursos />
      <MapComponent />
      <PorqueElegirPolo />
      <PorqueElegirPolo2 />
      <DondeEncontrarnos />
    </div>
  );
};

export default Home;
