import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import isc8 from "../../assets/img/isc8.3.png";

const ModalIsb6Contenido = (props) => {
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
          <Image src={isc8} alt="banner motores" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalIsb6Contenido;
