import BannerEmpresa from "../components/BannerEmpresa";
import BiografiaContenido from "../components/BiografiaContenido";
import EmpresaContenido from "../components/EmpresaContenido";

const Empresa = () => {
  return (
    <div>
      <BannerEmpresa />
      <div className=" text-center">
        <h2 className="lato-bold" style={{ fontSize: "18px" }}>
          María Lujan Arias Osteópata <br />
          Osteópata Diplomada, miembro del registro de Osteópatas de España
          Nº783.
        </h2>
      </div>
      <h4 style={{ fontSize: "36px" }} className=" text-center lato-bold py-2">
        MI HISTORIA
      </h4>
      {/* <div className="pb-4">
        <EmpresaContenido />
      </div> */}
      <div>
        <BiografiaContenido />
      </div>
    </div>
  );
};

export default Empresa;
