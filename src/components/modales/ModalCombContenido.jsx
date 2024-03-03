import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import filtrocomb from "../../assets/img/filtrocomb.jpg";

const ModalCombContenido = (props) => {
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
          <Image src={filtrocomb} alt="banner motores" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalCombContenido;
