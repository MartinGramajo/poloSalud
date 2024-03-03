import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import isle from "../../assets/img/ISLe.png";

const ModalIsleContenido = (props) => {
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
          <Image src={isle} alt="banner motores" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalIsleContenido;
