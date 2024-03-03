import {
  faCity,
  faEnvelope,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactoForm from "./ContactoForm";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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
        <hr style={{ width: "200px", color: "#d02323" }} />
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
                Hpólito Yrigoyen 1562, Santiago del Estero - capital
              </h5>
            </div>
            <div className="my-4">
              <h5>
                <FontAwesomeIcon className="mx-2 fs-4" icon={faHouse} />
                Av. República de Siria 1166, T4000 <br /> San Miguel de Tucumán,
                Tucumán - Argentina
              </h5>
            </div>
            <div className="my-4">
              <h5>
                <FontAwesomeIcon className="mx-2 fs-4" icon={faWhatsapp} />
                WhatsApp: 3815207330 - 3814572720 (24 hs.){" "}
              </h5>
            </div>
            <div className="my-4">
              <h5>
                <FontAwesomeIcon className="mx-2 fs-4" icon={faPhone} />
                teléfonos: 381-4300606/4215607
              </h5>
            </div>
            <div className="my-4">
              <h5>
                <FontAwesomeIcon className="mx-2 fs-4" icon={faEnvelope} />
                Email: ventas@santiagodiesel.com.ar{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoContenido;
