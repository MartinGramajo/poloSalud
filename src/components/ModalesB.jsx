import ModalFoto9 from "./modales/ModalFoto9";
import ModalFoto10 from "./modales/ModalFoto10";
import ModalFoto11 from "./modales/ModalFoto11";
import ModalFoto12 from "./modales/ModalFoto12";

const ModalesB = () => {
  return (
    <section className="text-dark">
      <div className="container">
        <div className="row text-dark text-center my-5">
          <div className="col-12 col-md-4 col-lg-3">
            <div>
              <ModalFoto9 />
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 ">
            <div>
              <ModalFoto10 />
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <div>
              <ModalFoto11 />
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <div>
              <ModalFoto12 />
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalesB;
