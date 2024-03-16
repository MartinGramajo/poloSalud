import BannerEmpresa from "../components/BannerEmpresa";
import EmpresaContenido from "../components/EmpresaContenido";

const Empresa = () => {
  return (
    <div>
      <BannerEmpresa />
      <h1
        style={{ fontSize: "26px", fontWeight: "bold" }}
        className="py-2 text-center"
      >
        ¿Quién soy ?
      </h1>
      <div className="pb-4">
        <EmpresaContenido />
      </div>
    </div>
  );
};

export default Empresa;
