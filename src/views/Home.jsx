import BioComponent from "../components/BioComponent";
import BioComponentMobile from "../components/BioComponentMobile";
import CarouselComponent from "../components/CarouselComponent";
import ImageTextComponent from "../components/ImageTextComponent";
import ImageTextComponent2 from "../components/ImageTextComponent2";
import ImageTextComponent3 from "../components/ImageTextComponent3";
import ImageTextMobileComponent from "../components/ImageTextMobileComponent";
import ImageTextMobileComponent3 from "../components/ImageTextMobileComponent3";
import ImageTextMobileComponent2 from "../components/ImageTextMobileComponente2";
import MobileCarouselComponent from "../components/MobileCarouselComponent";
import ScrollAnimation from "react-animate-on-scroll";
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
        <ScrollAnimation animateIn="fadeIn">
          <div id="servicios">
            <ImageTextComponent />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div id="trabajamos">
            <ImageTextComponent2 />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div id="termografia">
            <ImageTextComponent3 />
          </div>
        </ScrollAnimation>
      </div>
      <div className="d-lg-none d-block ">
        <ScrollAnimation animateIn="fadeIn">
          <div id="servicios">
            <ImageTextMobileComponent />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div id="trabajamos">
            <ImageTextMobileComponent2 />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div id="termografia">
            <ImageTextMobileComponent3 />
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Home;
