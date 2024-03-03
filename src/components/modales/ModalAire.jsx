import React from "react";
import { Button, Image } from "react-bootstrap";
import filtroaire from "../../assets/img/filtroaire.png";
import ModalAireContenido from "./ModalAireContenido";

const ModalAire = () => {
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
          src={filtroaire}
          alt="banner motores"
          fluid
        />
      </Button>

      <ModalAireContenido show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ModalAire;
