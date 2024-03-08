import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NuestrosRecursos = () => {
  return (
    <section className=" color-morado-fondo ">
      <div className="container py-5">
        <h1
          className="text-center text-white pt-5"
          style={{ fontSize: "26px", fontWeight: "bold" }}
        >
          {" "}
          Valores{" "}
        </h1>
        <div className="row text-white text-center my-5">
          <div className="col-12 col-md-12 col-lg-4">
            <div>
              <FontAwesomeIcon
                className="iconos-redes fs-1 color-azul  "
                icon={faCheckDouble}
              />
              <div className="my-4">
                <h5 style={{ fontSize: "22px", fontWeight: "bold" }}>
                  {" "}
                  CONOCIMIENTO{" "}
                </h5>
                <h6 style={{ fontSize: "18px" }}>
                  Somos profesionales, osteópatas diplomados D.O., inscriptos en
                  el Registro de Osteópatas de España ROE, y especializados en
                  osteopatía equina por la European School of Osteopathy ESO en
                  Inglaterra, capacitados en anatomía, biomecánica, fisiología,
                  neurología y semiopatología equina.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div>
              <FontAwesomeIcon
                className="iconos-redes fs-1 color-azul "
                icon={faCheckDouble}
              />
              <div className="my-4">
                <h5 style={{ fontSize: "22px", fontWeight: "bold" }}>
                  {" "}
                  TRABAJO EN EQUIPO{" "}
                </h5>
                <h6 style={{ fontSize: "18px" }}>
                  Lo que más nos importa es la salud y el bienestar del caballo,
                  por lo que siempre tomamos la mejor decisión en pos del
                  caballo, y si es necesario involucrar a otros profesionales
                  que hacen a la salud del caballo, se hace en su respectivo
                  momento.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 ">
            <div>
              <FontAwesomeIcon
                className="iconos-redes fs-1 color-azul "
                icon={faCheckDouble}
              />
              <div className="my-4">
                <h5 style={{ fontSize: "22px", fontWeight: "bold" }}>
                  {" "}
                  EFICIENCIA Y BIENESTAR{" "}
                </h5>
                <h6 style={{ fontSize: "18px" }}>
                  Nuestro trabajo hace que el caballo viva en salud día a día,
                  mejorando su calidad de vida, su bienestar y su performance .
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestrosRecursos;
