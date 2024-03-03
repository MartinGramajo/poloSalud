import React from "react";
import { Button, Image } from "react-bootstrap";
import isle from "../../assets/img/ISLe.png";
import ModalIsleContenido from "./ModalIsleContenido";

const ModalIsle = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className="border-0 btn-modal"
        onClick={() => setModalShow(true)}
      >
        <Image src={isle} alt="banner motores" fluid />
      </Button>

      <ModalIsleContenido show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ModalIsle;
