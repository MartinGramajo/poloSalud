import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import isb6 from "../../assets/img/isb6.7.png";

const ModalIsb8Contenido = (props) => {
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
          <Image src={isb6} alt="banner motores" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalIsb8Contenido;
