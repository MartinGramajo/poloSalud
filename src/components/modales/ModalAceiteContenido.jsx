import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import filtroaceite from "../../assets/img/filtroaceite.jpg";

const ModalAceiteContenido = (props) => {
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
          <Image src={filtroaceite} alt="banner motores" fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalAceiteContenido;
