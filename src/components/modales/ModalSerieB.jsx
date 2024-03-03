import React from "react";
import { Button, Image } from "react-bootstrap";
import serieb from "../../assets/img/SERIE-B.png";
import ModalSerieBContenido from "./ModalSerieBContenido";

const ModalSerieB = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className="border-0 btn-modal"
        onClick={() => setModalShow(true)}
      >
        <Image src={serieb} alt="banner motores" fluid />
      </Button>

      <ModalSerieBContenido
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalSerieB;
