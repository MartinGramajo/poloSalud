import React from "react";
import { Button, Image } from "react-bootstrap";
import isb6 from "../../assets/img/isb6.7.png";
import ModalIsb6Contenido from "./ModalIsb6Contenido";

const ModalIsb6 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className="border-0 btn-modal"
        onClick={() => setModalShow(true)}
      >
        <Image src={isb6} alt="banner motores" fluid />
      </Button>

      <ModalIsb6Contenido show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ModalIsb6;
