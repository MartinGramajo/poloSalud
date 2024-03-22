import Brands from "../components/Brands";
import ContenidoInicialHome from "../components/ContenidoInicialHome";
import DondeEncontrarnos from "../components/DondeEncontrarnos";
import MapComponent from "../components/MapComponent";
import NuestrosRecursos from "../components/NuestrosRecursos";
import PorqueElegirPolo from "../components/PorqueElegirPolo";
import PorqueElegirPolo2 from "../components/PorqueElegirPolo2";

const Home = () => {
  return (
    <div>
      <ContenidoInicialHome />
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
