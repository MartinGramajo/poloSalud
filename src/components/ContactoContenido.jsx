import { faCity, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactoForm from "./ContactoForm";

const ContactoContenido = () => {
  return (
    <section className="container">
      <div className="d-flex justify-content-center py-4">
        <h1> MANTENGÁMONOS EN CONTACTO</h1>
      </div>
      <div className="text-center">
        <h5> podes enviarnos un correo electrónico con tu consulta</h5>
      </div>
      <div className="d-flex justify-content-center">
        <hr style={{ width: "200px", color: "#8ECFD3" }} />
      </div>
      <div className="row my-4 text-center">
        <div className="col-lg-6 col-12">
          <ContactoForm />
        </div>
        <div className="col-lg-6 col-12">
          <h3>Detalles del contacto</h3>
          <div>
            <div className="my-4">
              <h5>
                <FontAwesomeIcon className="mx-2 fs-4" icon={faCity} />
                Dirección: calle 123
              </h5>
            </div>

            <div className="my-4">
              <h5>
                <FontAwesomeIcon className="mx-2 fs-4" icon={faPhone} />
                Cel: +34 650 032 819
              </h5>
            </div>
            <div className="my-4">
              <h5>
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
