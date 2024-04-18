import BioComponent from "../components/BioComponent";
import BioComponentMobile from "../components/BioComponentMobile";
import CarouselComponent from "../components/CarouselComponent";
import ImageTextComponent from "../components/ImageTextComponent";
import ImageTextComponent2 from "../components/ImageTextComponent2";
import ImageTextComponent3 from "../components/ImageTextComponent3";
import ImageTextMobileComponent from "../components/ImageTextMobileComponent";
import MobileCarouselComponent from "../components/MobileCarouselComponent";

const Home = () => {
  return (
    <div>
      <div className="d-none d-lg-block" style={{ backgroundColor: "#191919" }}>
        <CarouselComponent />
      </div>
      <div className="d-lg-none d-block" style={{ backgroundColor: "#191919" }}>
        <MobileCarouselComponent />
      </div>
      <div className="d-none d-lg-block ">
        <BioComponent />
      </div>
      <div className="d-lg-none d-block">
        <BioComponentMobile />
      </div>
      <div className="d-none d-lg-block ">
        <div id="servicios">
          <ImageTextComponent />
        </div>
        <div id="trabajamos">
          <ImageTextComponent2 />
        </div>
        <div id="termografia">
          <ImageTextComponent3 />
        </div>
      </div>
      <div className="d-lg-none d-block ">
        <ImageTextMobileComponent />
      </div>
    </div>
  );
};

export default Home;
