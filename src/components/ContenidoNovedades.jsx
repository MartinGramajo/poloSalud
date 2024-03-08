import React from "react";
import { Image } from "react-bootstrap";
import bannerNovedades from "../assets/img/bannerNovedades.jpg";

const ContenidoNovedades = () => {
  return (
    <div className="text-center">
      <article>
        <Image
          className="py-4"
          src={bannerNovedades}
          fluid
          alt="novedades banner"
        />
        <article>
          <div className="d-flex justify-content-center py-4">
            <h1 style={{ fontSize: "26px", fontWeight: "bold" }}>
              {" "}
              Últimas Innovaciones en el Cuidado del Caballo de Polo
            </h1>
          </div>
          <div className="text-center mb-5">
            <h5 style={{ fontSize: "18px" }}>
              {" "}
              Bienvenido a nuestra sección de novedades, el espacio dedicado a
              mantenerte al día con los avances más recientes y emocionantes en
              el bienestar y rendimiento de los caballos de polo. Aquí
              compartiremos contigo las últimas investigaciones, técnicas
              revolucionarias, y prácticas basadas en la ciencia que están
              transformando el cuidado equino en Argentina y más allá. Desde
              estudios de caso hasta lanzamientos de nuevos servicios, pasando
              por seminarios web educativos y colaboraciones exclusivas, esta es
              tu fuente de información privilegiada sobre cómo la pasión y la
              innovación se unen para elevar el estándar de excelencia en el
              deporte del polo. Mantente conectado y sé el primero en conocer
              cómo estamos cambiando el juego en el cuidado de los caballos de
              polo.
            </h5>
          </div>
        </article>
        <article className="mb-5">
          <h2 style={{ fontSize: "26px", fontWeight: "bold" }}>
            ¿Cómo se desarrolla una sesión de Osteopatía equina?
          </h2>
          <h5 style={{ fontSize: "18px" }}>
            En una primera medida se evalúa y observa al caballo estático y
            luego en movimiento, analizando la calidad de cada uno de sus aires.{" "}
            <br /> Luego se procede a la palpación superficial, media y profunda
            donde se analizan la textura y movilidad de las diferentes
            estructuras anatómicas: músculos, tendones , ligamentos juego
            articular de la columna vertebral y los miembros, movilidad y
            motilidad visceral , y el funcionamiento e interacción del sistema
            nervioso . Según el diagnóstico osteopático y quiropráctico se
            procederá a las manipulaciones y ajustes de la zona a tratar. <br />{" "}
            Las sesiones generalmente duran una hora y se realizan in situ.
          </h5>
        </article>
      </article>
      <article className="mb-5">
        <h2 style={{ fontSize: "26px", fontWeight: "bold" }}>
          ¿Qué caballos pueden beneficiarse de este tipo de tratamiento?{" "}
        </h2>
        <h5 style={{ fontSize: "18px" }}>
          Es aplicado sobre todo en caballos deportistas (salto, carreras, doma
          clásica, endurance, etc.) donde su exigencia es la de un deportista de
          alto rendimiento, así como también caballos de centros de
          equinoterapia, cabalgatas y uso doméstico.{" "}
        </h5>
      </article>
      <article className="my-4">
        <h2 style={{ fontSize: "26px", fontWeight: "bold" }}>
          ¿Cómo me doy cuenta si mi caballo se puede beneficiar de la
          terapéutica?{" "}
        </h2>
        <h5 style={{ fontSize: "18px" }}>
          ● Cómo jinete, si sientes y notas que tu caballo: <br />
          ● Trabaja diferente de un lado u otro <br />
          ● Patea cuando te acercas <br />
          ● Se molesta al ensillarlo, <br />
          ● En la zona de la chincha tiene pelos blancos a nivel de la Cruz o
          zona donde va la montura <br />
          ● Atrofia muscular <br />
          ● Bajo rendimiento deportivo <br />
          ● Mal o diferente comportamiento pérdida de peso <br />
          ● Dificultad para colocarle la cabezada, cabecea al andar <br />
          ● Kissing spine <br />
          ● Lesiones a repetición en tendones y ligamentos <br />● Principios de
          cólicos a repetición
        </h5>
      </article>
    </div>
  );
};

export default ContenidoNovedades;
