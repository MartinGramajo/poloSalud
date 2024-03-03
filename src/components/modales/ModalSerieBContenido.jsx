import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import serieb from "../../assets/img/SERIE-B.jpg";

const ModalSerieBContenido = (props) => {
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
          <Image src={serieb} alt="banner motores" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalSerieBContenido;
