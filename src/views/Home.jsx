import Brands from "../components/Brands";
import DondeEncontrarnos from "../components/DondeEncontrarnos";
import NuestrosRecursos from "../components/NuestrosRecursos";
import PorqueElegirPolo from "../components/PorqueElegirPolo";
import ServiciosHome from "../components/PorqueElegirPolo";
import SliderHome from "../components/SliderHome";

const Home = () => {
  return (
    <div>
      {/* <SliderHome /> */}
      <Brands title="Estos son algunos de nuestros clientes:" />
      <NuestrosRecursos />
      <PorqueElegirPolo />
      <DondeEncontrarnos />
    </div>
  );
};

export default Home;
