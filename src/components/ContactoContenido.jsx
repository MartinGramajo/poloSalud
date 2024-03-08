import { faCity, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactoForm from "./ContactoForm";

const ContactoContenido = () => {
  return (
    <section className="container">
      <div className="d-flex justify-content-center py-4">
        <h1 style={{ fontSize: "26px", fontWeight: "bold" }}>
          {" "}
          Conecta con los Expertos en Bienestar Equino
        </h1>
      </div>
      <div className="text-center">
        <h5 style={{ fontSize: "18px" }}>
          {" "}
          En nuestra sección de contacto, te invitamos a abrir un canal directo
          con el equipo que está redefiniendo el cuidado y el rendimiento de los
          caballos de polo en Argentina. Ya sea que busques asesoramiento
          especializado, desees conocer más sobre nuestras técnicas basadas en
          la ciencia o estés interesado en colaborar con nosotros, aquí
          encontrarás todos los medios para comunicarte. Nuestra misión de
          garantizar la excelencia en el bienestar y rendimiento deportivo de
          estos magníficos animales es lo que nos impulsa. Comparte tu pasión y
          tus preguntas con nosotros; estamos aquí para conectar, escuchar y
          responder.
        </h5>
      </div>
      <div className="d-flex justify-content-center">
        <hr style={{ width: "200px", color: "#8ECFD3" }} />
      </div>
      <div className="row my-4 text-center">
        <div className="col-lg-6 col-12">
          <ContactoForm />
        </div>
        <div className="col-lg-6 col-12">
          <h3 style={{ fontSize: "26px", fontWeight: "bold" }}>
            Detalles del contacto
          </h3>
          <div>
            <div className="my-4">
              <h5 style={{ fontSize: "18px" }}>
                <FontAwesomeIcon className="mx-2 fs-4" icon={faCity} />
                Dirección: calle 123
              </h5>
            </div>

            <div className="my-4">
              <h5 style={{ fontSize: "18px" }}>
                <FontAwesomeIcon className="mx-2 fs-4" icon={faPhone} />
                Cel: +34 650 032 819
              </h5>
            </div>
            <div className="my-4">
              <h5 style={{ fontSize: "18px" }}>
                <FontAwesomeIcon className="mx-2 fs-4" icon={faEnvelope} />
                Email: malujanarias@gmail.com{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoContenido;
