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
      <Brands title="Estos son algunos de nuestros clientes:" />
      <div className="container py-5 my-5 text-center">
        <div>
          <h4 style={{ fontSize: "18px" }}>
            Somos profesionales diplomados, altamente capacitados en el análisis
            y optimización de la biomecánica del caballo de polo y que
            utilizamos principalmente técnicas manuales provenientes de la
            medicina osteopática, para fomentar el mantenimiento de la salud del
            caballo de polo.
          </h4>
        </div>
      </div>
      <NuestrosRecursos />
      <div className="text-center">
        <h1 style={{ fontSize: "26px", fontWeight: "bold" }} className="pt-5">
          Lorem ipsum dolor sit amet
        </h1>
      </div>
      <MapComponent />
      <PorqueElegirPolo />
      <PorqueElegirPolo2 />
      <DondeEncontrarnos />
    </div>
  );
};

export default Home;
