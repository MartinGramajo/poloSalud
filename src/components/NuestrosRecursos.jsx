import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NuestrosRecursos = () => {
  return (
    <section className=" bg-dark">
      <div className="container py-5">
        <h1 className="text-center text-white pt-5"> Valores </h1>
        <div className="row text-white text-center my-5">
          <div className="col-12 col-md-6 col-lg-3">
            <div>
              <FontAwesomeIcon
                className="iconos-redes fs-1"
                icon={faCheckDouble}
              />
              <div className="my-4">
                <h5> COMPROMISO </h5>
                <h6>
                  El compromiso real con los clientes es la forma de entender
                  nuestra actividad.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div>
              <FontAwesomeIcon
                className="iconos-redes fs-1"
                icon={faCheckDouble}
              />
              <div className="my-4">
                <h5> HONESTIDAD </h5>
                <h6>
                  Valor indispensable para generar un ambiente de confianza y
                  armonía, la honestidad garantiza credibilidad.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 ">
            <div>
              <FontAwesomeIcon
                className="iconos-redes fs-1"
                icon={faCheckDouble}
              />
              <div className="my-4">
                <h5> RESPETO POR LOS ANIMALES </h5>
                <h6>
                  En el ámbito personal y profesional, o en cualquier situación
                  que acontezca, tanto dentro como fuera de la empresa.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div>
              <FontAwesomeIcon
                className="iconos-redes fs-1"
                icon={faCheckDouble}
              />
              <div className="my-4">
                <h5> EQUIPO </h5>
                <h6>
                  Trabajamos en equipo, lo que supone colaborar, compartir
                  esfuerzos y multiplicar logros.
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
