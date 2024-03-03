import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import filtrocarter from "../../assets/img/filtrocarter.jpeg";

const ModalCarterContenido = (props) => {
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
          <Image src={filtrocarter} alt="banner motores" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalCarterContenido;
