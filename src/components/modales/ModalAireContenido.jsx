import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import filtroaire from "../../assets/img/filtroaire.png";

const ModalAireContenido = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          <Image src={filtroaire} alt="banner motores" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalAireContenido;
