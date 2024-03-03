const ServiciosContenido = () => {
  return (
    <section className="container text-center">
      <div>
        <div className="d-flex justify-content-center py-4">
          <h1> CADA MINUTO CUENTA</h1>
        </div>

        <div className="d-flex justify-content-center">
          <hr style={{ width: "200px", color: "#d02323" }} />
        </div>
        <div className=" mt-3 mb-5">
          <h5>
            En Santiago Diesel sabemos lo que es tener tu vehículo fuera de
            servicio implicando muchas pérdidas económicas y de tiempo. <br />
            Ofrecemos todo el soporte técnico y servicio para nuestros motores,
            porque sabemos que es primordial para asegurar la productividad del
            negocio de nuestros clientes y mantener su equipo funcionando.{" "}
            Contamos con nuestra maestranza, servicios en terreno y servicios en
            taller.
          </h5>
        </div>
      </div>
      <div className="">
        <div>
          <div className="d-flex my-2 justify-content-center">
            <h2> ACTUALIZACIÓN DE CALIBRACIÓN</h2>
          </div>
          <div className="d-flex justify-content-center">
            <hr style={{ width: "100px", color: "red" }} />
          </div>
          <div className="my-4">
            <h5>
              Descargaremos parámetros de operación guardados en la memoria del
              ECM, de los cuales se puede separar lo más importantes para el
              óptimo funcionamiento de tu motor.
            </h5>
          </div>
          <div>
            <div className="d-flex my-2 justify-content-center">
              <h2>REPARACIONES PARCIALES</h2>
            </div>
            <div className="d-flex justify-content-center">
              <hr style={{ width: "100px", color: "red" }} />
            </div>
            <div className="my-4">
              <h5>
                Realizaremos el más exhaustivo diagnóstico de falla y
                repararemos parcialmente el motor, asegurándonos de su
                funcionamiento.
              </h5>
            </div>
          </div>
          <div>
            <div className="d-flex my-2 justify-content-center">
              <h2> REPARACIONES MAYORES</h2>
            </div>
            <div className="d-flex justify-content-center">
              <hr style={{ width: "100px", color: "red" }} />
            </div>
            <div className="my-4">
              <h5>
                La excelencia técnica nos destaca, animate y realiza la
                cotización de un kit Overhaul de motor y renueva la vida útil de
                tu equipo.
              </h5>
            </div>
          </div>

          <div>
            <div className="d-flex my-2 justify-content-center">
              <h2> MANUTENCIONES </h2>
            </div>
            <div className="d-flex justify-content-center">
              <hr style={{ width: "100px", color: "red" }} />
            </div>
            <div className="d-flex my-2"></div>
            <div className="my-4">
              <h5>
                {" "}
                Realizamos el mantenimiento necesario de tus equipos, indicando
                los productos adecuados e idóneos necesarios para el mejor
                rendimiento de tu motor. Seremos tu asesor en termino de
                eficiencia y rendimiento.
              </h5>
            </div>
          </div>
          <div>
            <div className="d-flex my-2 justify-content-center">
              <h2> TALLER DE BUSES Y CAMIONES</h2>
            </div>
            <div className="d-flex justify-content-center">
              <hr style={{ width: "100px", color: "red" }} />
            </div>
            <div className="my-4">
              <h5 className="pb-5">
                Somos expertos en Motores Cummins, acompañando a nuestros
                clientes automotrices para que sus equipos estén siempre
                operativos y en el menor tiempo posible.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosContenido;
