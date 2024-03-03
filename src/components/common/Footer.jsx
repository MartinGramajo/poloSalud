import { Image, Nav } from "react-bootstrap";
import logoNuevo from "../../assets/img/logo-nuevo.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" text-white bg-dark text-white mt-auto ">
      <div className="px-4 pt-4 container">
        <div className="row">
          {/* Column1 */}
          <div className="col-12 col-lg-3 text-md-start d-flex justify-content-lg-start justify-content-center mx-auto mt-3 mt-md-0 ">
            <ul className="list-unstyled">
              <li className="text-center my-5">
                <Image
                  className="tamaño-logo-footer"
                  src={logoNuevo}
                  alt="logoHotel"
                  fluid
                />
              </li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col-12 col-lg-3 text-md-start d-flex justify-content-center mx-auto  ">
            <ul className="list-unstyled my-5">
              <li>
                <p className="tamaño-chico text-center  mt-2 mb-0">
                  Direccion: calle 123 <br />
                  Cel: +34 650 032 819 <br />
                  Mail: malujanarias@gmail.com
                  <br />
                </p>
              </li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col-12 col-lg-3  text-center   mb-1 mt-5 p-1 ">
            <ul className="list-unstyled ">
              <li>
                <p className="text-center">
                  Atención Horaria: <br /> lunes a viernes 9:00 a 18:00 <br />
                  sábados 09:00 a 13:00
                </p>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3  text-center   mb-1 mt-3 p-1 ">
            <Nav className=" mt-2 mt-sm-0  flex-column mx-5 py-4 ">
              <Nav.Link
                to="/servicios"
                as={NavLink}
                className=" text-white mx-xl-2 my-auto nav-links"
              >
                SERVICIOS
              </Nav.Link>
              <Nav.Link
                to="/empresa"
                as={NavLink}
                className="text-white mx-xl-2 my-auto nav-links"
              >
                GALERÍA
              </Nav.Link>
              <Nav.Link
                to="/productos"
                as={NavLink}
                className=" text-white mx-xl-2 my-auto nav-links"
              >
                NOVEDADES
              </Nav.Link>

              <Nav.Link
                to="/contacto"
                as={NavLink}
                className="text-white mx-xl-2 my-auto nav-links"
              >
                CONTACTO
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </div>
      <div className="p-2 color-gris-fondo ">
        <div className="text-center tamaño-chico  text-md-start my-2 d-flex justify-content-center  ">
          <a
            className="text-decoration-none text-white"
            href="https://www.dkzstudio.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              Produced by DKZ Studio &copy; {new Date().getFullYear()}
            </span>
            <span> Todos los derechos reservados</span>
          </a>
        </div>
      </div>
    </div>
  );
}
