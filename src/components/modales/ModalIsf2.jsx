import React from "react";
import { Button, Image } from "react-bootstrap";
import isf2 from "../../assets/img/isf2.8.png";
import ModalIsf2Contenido from "./ModalIsf2Contenido";

const ModalIsf2 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className="border-0 btn-modal"
        onClick={() => setModalShow(true)}
      >
        <Image src={isf2} alt="banner motores" fluid />
      </Button>

      <ModalIsf2Contenido show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ModalIsf2;
