import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import isf3 from "../../assets/img/isf3.8.png";

const ModalIsf3Contenido = (props) => {
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
          <Image src={isf3} alt="banner motores" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalIsf3Contenido;
