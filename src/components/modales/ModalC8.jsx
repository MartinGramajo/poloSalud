import React from "react";
import { Button, Image } from "react-bootstrap";
import c8 from "../../assets/img/c8.3.png";
import ModalC8Contenido from "./ModalC8Contenido";

const ModalC8 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className="border-0 btn-modal"
        onClick={() => setModalShow(true)}
      >
        <Image src={c8} alt="banner motores" fluid />
      </Button>

      <ModalC8Contenido show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ModalC8;
