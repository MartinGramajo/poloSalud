import Brands from "../components/Brands";
import DondeEncontrarnos from "../components/DondeEncontrarnos";
import ServiciosHome from "../components/ServiciosHome";
import SliderHome from "../components/SliderHome";
import Valores from "../components/Valores";

const Home = () => {
  return (
    <div>
      {/* <SliderHome /> */}
      <Brands title="Estos son algunos de nuestros clientes:" />
      <Valores />
      <ServiciosHome />
      <DondeEncontrarnos />
    </div>
  );
};

export default Home;
