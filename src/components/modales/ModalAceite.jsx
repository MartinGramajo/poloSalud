import React from "react";
import { Button, Image } from "react-bootstrap";
import filtroaceite from "../../assets/img/filtroaceite.jpg";
import ModalAceiteContenido from "./ModalAceiteContenido";

const ModalAceite = () => {
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
          src={filtroaceite}
          alt="banner motores"
          fluid
        />
      </Button>

      <ModalAceiteContenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalAceite;
