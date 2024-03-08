import React from "react";
import { Image } from "react-bootstrap";
import bannerInicio from "../assets/img/CABALLO1.png";
import bannerInicioCuadrado from "../assets/img/CABALLOCUADRADO1.png";

const ContenidoInicialHome = () => {
  return (
    <section className=" container">
      <div className="text-center my-4">
        <h1 style={{ fontSize: "26px", fontWeight: "bold" }} className="py-5">
          Bienvenidos a la web de Polo salud{" "}
        </h1>
        <article className="d-none d-md-block">
          <Image
            className="py-4"
            src={bannerInicio}
            fluid
            alt="inicio banner"
          />
        </article>
        <article className="d-md-none d-block">
          <Image
            className="py-4"
            src={bannerInicioCuadrado}
            fluid
            alt="inicio banner"
          />
        </article>
        <h4 style={{ fontSize: "18px" }}>
          Una empresa Argentina, dedicada al bienestar del caballo de polo que
          tiene por <b>misión</b>:
        </h4>
        <h5>
          <i style={{ fontSize: "18px" }}>
            “ Lograr que el caballo de polo mantenga su rendimiento deportivo y
            calidad de vida, utilizando técnicas manuales basadas en el
            conocimiento científico de la anatomía, biomecánica y fisiología de
            la raza y el deporte”.
          </i>
        </h5>
      </div>
    </section>
  );
};

export default ContenidoInicialHome;
