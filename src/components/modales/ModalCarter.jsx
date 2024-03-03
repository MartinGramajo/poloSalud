import React from "react";
import { Button, Image } from "react-bootstrap";
import filtrocarter from "../../assets/img/filtrocarter.jpeg";
import ModalCarterContenido from "./ModalCarterContenido";

const ModalCarter = () => {
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
          src={filtrocarter}
          alt="banner motores"
          fluid
        />
      </Button>

      <ModalCarterContenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalCarter;
