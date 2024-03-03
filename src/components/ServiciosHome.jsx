import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiciosHome = () => {
  return (
    <section className=" bg-white">
      <div className="container py-5">
        <div className="row  text-center my-5text-dark">
          <h1 className="text-center text-dark pt-5"> PORQUE NOS ELIGEN</h1>
          <h4 className="text-center text-dark pb-5"> ¿ Que te ofrecemos? </h4>
          <div className="col-12 col-md-6 col-lg-3">
            <div>
              <FontAwesomeIcon
                className="iconos-redes fs-1"
                icon={faCheckCircle}
              />
              <div className="my-4">
                <h5>
                  <b>Representantes oficiales de Cummins Argentina.</b>
                </h5>
                <h6>
                  Repuestos 100% genuinos, con respaldo y garantía de fábrica.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div>
              <FontAwesomeIcon
                className="iconos-redes fs-1"
                icon={faCheckCircle}
              />
              <div className="my-4">
                <h5>
                  <b> Marcas originales</b>{" "}
                </h5>
                <h6>
                  Contamos con todos los repuestos Cummins que necesitas, con la
                  originalidad y garantía de calidad que sólo nosotros podemos
                  entregar.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 ">
            <div>
              <FontAwesomeIcon
                className="iconos-redes fs-1"
                icon={faCheckCircle}
              />
              <div className="my-4">
                <h5>
                  <b>Personal especializado</b>{" "}
                </h5>
                <h6>
                  Nuestro equipo de ventas le brindara asesoramiento técnico
                  integral según sus necesidades.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div>
              <FontAwesomeIcon
                className="iconos-redes fs-1"
                icon={faCheckCircle}
              />
              <div className="my-4">
                <h5>
                  {" "}
                  <b>Envíos al interior en el día</b>{" "}
                </h5>
                <h6>
                  Hacemos envíos a nuestra zona de influencia de la manera más
                  rápida y eficiente.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-12">
            <div>
              <FontAwesomeIcon
                className="iconos-redes fs-1"
                icon={faCheckCircle}
              />
              <div className="my-4">
                <h5>
                  {" "}
                  <b>Flexibilidad en los medios de pago </b>{" "}
                </h5>
                <h6>
                  Aceptamos todos los medios de pago: Efectivo, Transferencias
                  bancarias, Tarjetas de crédito y débito, Cheques.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosHome;
