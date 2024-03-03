import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import isb4 from "../../assets/img/isb4.5.png";

const ModalIsb4Contenido = (props) => {
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
          <Image src={isb4} alt="banner motores" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalIsb4Contenido;
