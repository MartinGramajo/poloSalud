import { faCity, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactoForm from "./ContactoForm";

const ContactoContenido = () => {
  return (
    <section className="container">
      <div className="d-flex justify-content-center py-4">
        <h1 style={{ fontSize: "26px", fontWeight: "bold" }}>
          CONECTA CON LOS EXPERTOS EN BIENESTAR EQUINO
        </h1>
      </div>
      <div className="d-flex justify-content-center">
        <hr style={{ width: "200px", color: "#8ECFD3" }} />
      </div>
      <div className="row my-4 text-center">
        <div className=" col-12">
          <ContactoForm />
        </div>
      </div>
    </section>
  );
};

export default ContactoContenido;
