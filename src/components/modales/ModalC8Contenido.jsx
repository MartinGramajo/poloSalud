import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import c8 from "../../assets/img/c8.3.png";

const ModalC8Contenido = (props) => {
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
          <Image src={c8} alt="banner motores" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalC8Contenido;
