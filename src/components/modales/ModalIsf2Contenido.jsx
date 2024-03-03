import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import isf2 from "../../assets/img/isf2.8.png";

const ModalIsf2Contenido = (props) => {
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
          <Image src={isf2} alt="banner motores" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalIsf2Contenido;
