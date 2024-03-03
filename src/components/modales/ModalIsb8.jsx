import React from "react";
import { Button, Image } from "react-bootstrap";
import isc8 from "../../assets/img/isc8.3.png";
import ModalIsb8Contenido from "./ModalIsb6Contenido";

const ModalIsb8 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className="border-0 btn-modal"
        onClick={() => setModalShow(true)}
      >
        <Image src={isc8} alt="banner motores" fluid />
      </Button>

      <ModalIsb8Contenido show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ModalIsb8;
