import BannerServicios from "../components/BannerServicios";
import ServiciosContenido from "../components/ServiciosContenido";

const Servicios = () => {
  return (
    <div>
      <BannerServicios />
      <article className="container" style={{ textAlign: "start" }}>
        <div className=" py-4">
          <h1 style={{ fontSize: "26px", fontWeight: "bold" }}>
            {" "}
            Servicios de Vanguardia para el Bienestar del Caballo de Polo
          </h1>
        </div>
        <div>
          <h5 style={{ fontSize: "18px" }}>
            {" "}
            Explora nuestra oferta exclusiva de servicios, donde la ciencia y la
            tradición se unen para asegurar el máximo bienestar y rendimiento de
            los caballos de polo. Nuestra empresa se enorgullece de liderar con
            un enfoque innovador en el cuidado equino, empleando técnicas
            manuales avanzadas y un profundo conocimiento científico en
            anatomía, biomecánica y fisiología. Desde evaluaciones integrales
            del bienestar físico hasta programas personalizados de mantenimiento
            y recuperación, cada servicio está diseñado para responder a las
            necesidades específicas de estos atletas equinos de élite. Descubre
            cómo nuestros servicios especializados pueden transformar la salud y
            el rendimiento de tu caballo, manteniéndolo en la cima de su juego.
            Bienvenido a la excelencia en el cuidado del caballo de polo.
          </h5>
        </div>
      </article>
      <ServiciosContenido />
    </div>
  );
};

export default Servicios;
