import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PorqueElegirPolo = () => {
  return (
    <section className=" bg-white">
      <div className="container py-5">
        <div className="row  text-center my-5text-dark">
          <h1 className="text-center text-dark pt-5">
            {" "}
            ¿ PORQUE ELEGIR POLO SALUD ?
          </h1>
          <h4 className="pb-5"> Que te ofrecemos</h4>

          <div className="col-12 col-md-12 col-lg-4 ">
            <div>
              <FontAwesomeIcon
                className="iconos-redes fs-1"
                icon={faCheckCircle}
              />
              <div className="my-4">
                <h5>
                  <b>CURAMOS</b>
                </h5>
                <h6>
                  Lorem ipsum dolor sit amet. Non modi mollitia sed eveniet
                  neque aut voluptas consectetur et blanditiis magni. Et officia
                  ullam qui natus voluptas ea repudiandae commodi ab assumenda
                  sequi eum mollitia ducimus aut corrupti voluptatum ea deleniti
                  illo.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div>
              <FontAwesomeIcon
                className="iconos-redes fs-1"
                icon={faCheckCircle}
              />
              <div className="my-4">
                <h5>
                  <b> PREVENIMOS</b>{" "}
                </h5>
                <h6>
                  Lorem ipsum dolor sit amet. Non modi mollitia sed eveniet
                  neque aut voluptas consectetur et blanditiis magni. Et officia
                  ullam qui natus voluptas ea repudiandae commodi ab assumenda
                  sequi eum mollitia ducimus aut corrupti voluptatum ea deleniti
                  illo.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 ">
            <div>
              <FontAwesomeIcon
                className="iconos-redes fs-1"
                icon={faCheckCircle}
              />
              <div className="my-4">
                <h5>
                  <b>REHABILITAMOS</b>{" "}
                </h5>
                <h6>
                  Lorem ipsum dolor sit amet. Non modi mollitia sed eveniet
                  neque aut voluptas consectetur et blanditiis magni. Et officia
                  ullam qui natus voluptas ea repudiandae commodi ab assumenda
                  sequi eum mollitia ducimus aut corrupti voluptatum ea deleniti
                  illo.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorqueElegirPolo;
