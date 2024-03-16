import React from "react";
import ModalesA from "../components/ModalesA";
import ModalesB from "../components/ModalesB";
import bannerInicio from "../assets/img/CABALLO2.png";
import bannerInicioCuadrado from "../assets/img/CABALLOCUADRADO2.png";
import { Image } from "react-bootstrap";

const Galeria = () => {
  return (
    <div>
      <section className="my-5">
        <div className="d-none d-md-block text-center">
          <Image
            className="py-4"
            src={bannerInicio}
            fluid
            alt="inicio banner"
          />
        </div>
        <div className="d-md-none d-block text-center">
          <div>
            <Image
              className="py-4"
              src={bannerInicio}
              fluid
              alt="inicio banner"
            />
          </div>
        </div>

        <article className="container text-center">
          <h1
            className="text-center text-dark pt-5"
            style={{ fontSize: "26px", fontWeight: "bold" }}
          >
            {" "}
            "Elegancia en Movimiento: La Ciencia del Bienestar Equino en el
            Polo"
          </h1>
          <h4 className="pb-5" style={{ fontSize: "18px" }}>
            {" "}
            Descubre nuestra galería exclusiva donde cada imagen narra la pasión
            y dedicación por el bienestar del caballo de polo. A través de
            técnicas manuales avanzadas y un profundo entendimiento de la
            anatomía, biomecánica y fisiología específicas de estos atletas
            equinos, nos esforzamos por mantener su rendimiento deportivo y
            calidad de vida en la cima. Sumérgete en el arte y la ciencia detrás
            del cuidado excepcional de los caballos de polo, y cómo nuestro
            compromiso se refleja en cada galope y jugada en el campo.
          </h4>
        </article>
        <ModalesA />
        <ModalesB />
      </section>
    </div>
  );
};

export default Galeria;
