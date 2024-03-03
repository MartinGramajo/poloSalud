import ModalFoto1 from "./modales/ModalFoto1";
import ModalFoto2 from "./modales/ModalFoto2";
import ModalFoto3 from "./modales/ModalFoto3";
import ModalFoto4 from "./modales/ModalFoto4";
import ModalFoto5 from "./modales/ModalFoto5";
import ModalFoto6 from "./modales/ModalFoto6";
import ModalFoto7 from "./modales/ModalFoto7";
import ModalFoto8 from "./modales/ModalFoto8";

const ModalesA = () => {
  return (
    <section className="">
      <div className="container ">
        <div className="row text-white text-center">
          <div className="col-12 col-md-6 col-lg-3">
            <div>
              <ModalFoto1 />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div>
              <ModalFoto2 />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 ">
            <div>
              <ModalFoto3 />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div>
              <ModalFoto4 />
            </div>
          </div>
          <div className="row text-white text-center my-5">
            <div className="col-12 col-md-6 col-lg-3">
              <div>
                <ModalFoto5 />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div>
                <ModalFoto6 />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 ">
              <div>
                <ModalFoto7 />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div>
                <ModalFoto8 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalesA;
