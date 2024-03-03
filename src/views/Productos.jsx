import BannerProductos from "../components/BannerProductos";
import Brands from "../components/Brands";
import Filtracion from "../components/Filtracion";
import Motores from "../components/Motores";
import ProductoContenido from "../components/ProductoContenido";

const Productos = () => {
  return (
    <div>
      <BannerProductos />
      <ProductoContenido />
      <Motores />
      <Brands title="También trabajamos con todas estas marcas" />
      <Filtracion />
    </div>
  );
};

export default Productos;
