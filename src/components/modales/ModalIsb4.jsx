import React from "react";
import { Button, Image } from "react-bootstrap";
import ModalIsb4Contenido from "./ModalIsb4Contenido";
import isb4 from "../../assets/img/isb4.5.png";

const ModalIsb4 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="border-0 btn-modal" onClick={() => setModalShow(true)}>
        <Image src={isb4} alt="banner motores" fluid />
      </Button>

      <ModalIsb4Contenido show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ModalIsb4;
