import BioComponent from "../components/BioComponent";
import BioComponentMobile from "../components/BioComponentMobile";
import CarouselComponent from "../components/CarouselComponent";
import DondeEncontrarnos from "../components/DondeEncontrarnos";
import ImageTextComponent from "../components/ImageTextComponent";
import ImageTextMobileComponent from "../components/ImageTextMobileComponent";
import MapComponent from "../components/MapComponent";
import MobileCarouselComponent from "../components/MobileCarouselComponent";
import NuestrosRecursos from "../components/NuestrosRecursos";
import PorqueElegirPolo from "../components/PorqueElegirPolo";
import PorqueElegirPolo2 from "../components/PorqueElegirPolo2";

const Home = () => {
  return (
    <div>
      <div className="d-none d-lg-block py-5 my-5">
        <CarouselComponent />
      </div>
      <div className="d-lg-none d-block py-5  my-5">
        <MobileCarouselComponent />
      </div>

      <div className="d-none d-lg-block pt-5">
        <BioComponent />
      </div>
      <div className="d-lg-none d-block pt-5">
        <BioComponentMobile />
      </div>
      <div className="d-none d-lg-block ">
        <ImageTextComponent />
      </div>
      <div className="d-lg-none d-block ">
        <ImageTextMobileComponent />
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
