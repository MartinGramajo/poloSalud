import React from "react";
import { Button, Image } from "react-bootstrap";
import filtrocomb from "../../assets/img/filtrocomb.jpg";
import ModalCombContenido from "./ModalCombContenido";

const ModalComb = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className="border-0 btn-modal"
        onClick={() => setModalShow(true)}
      >
        <Image
          className="imagen-filtros"
          src={filtrocomb}
          alt="banner motores"
          fluid
        />
      </Button>

      <ModalCombContenido show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ModalComb;
