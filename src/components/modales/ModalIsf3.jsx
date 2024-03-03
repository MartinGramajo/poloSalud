import React from "react";
import { Button, Image } from "react-bootstrap";
import isf3 from "../../assets/img/isf3.8.png";
import ModalIsf3Contenido from "./ModalIsf3Contenido";

const ModalIsf3 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className="border-0 btn-modal"
        onClick={() => setModalShow(true)}
      >
        <Image src={isf3} alt="banner motores" fluid />
      </Button>

      <ModalIsf3Contenido show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ModalIsf3;
