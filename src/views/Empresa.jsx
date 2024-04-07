import BannerEmpresa from "../components/BannerEmpresa";
import BiografiaContenido from "../components/BiografiaContenido";

const Empresa = () => {
  return (
    <div>
      <BannerEmpresa />
      <div className=" text-center">
        <h2 className="lato-regular text-black-50" style={{ fontSize: "18px" }}>
          María Lujan Arias Osteópata <br />
          Osteópata Diplomada, miembro del registro de Osteópatas de España
          Nº783.
        </h2>
      </div>
      <h4
        style={{ fontSize: "36px", fontWeight: "bold" }}
        className=" text-center lato-regular py-2"
      >
        MI HISTORIA
      </h4>
      <div>
        <BiografiaContenido />
      </div>
    </div>
  );
};

export default Empresa;
