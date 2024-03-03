import { Image } from "react-bootstrap";
import bannerIntermedio from "../assets/img/bannerMotoresIntermedio.png";
import ModalIsb4 from "./modales/ModalIsb4";
import ModalIsb6 from "./modales/ModalIsb6";
import ModalIsb8 from "./modales/ModalIsb8";
import ModalIsf2 from "./modales/ModalIsf2";
import ModalIsf3 from "./modales/ModalIsf3";
import ModalIsle from "./modales/ModalIsle";
import ModalC8 from "./modales/ModalC8";
import ModalSerieB from "./modales/ModalSerieB";

const Motores = () => {
  return (
    <section className="bg-dark">
      <div className="container py-5">
        <h1 className="text-center text-white pt-5"> MOTORES CUMMINS </h1>
        <div className="row text-white text-center my-5">
          <div className="col-12 col-md-6 col-lg-3">
            <div>
              <ModalIsb4 />
              <div className="my-4">
                <h5> isb4 </h5>
                <h6>
                  El ISB4.5 de última generación avanza aún más e incorpora la
                  certificación de emisiones Euro 6. Combina los beneficios más
                  importantes de la certificación Euro 5 con los del motor
                  ISF3.8 y las tecnologías de emisiones ultrabajas de Cummins.
                  Incorpora las características del diseño modular automotriz
                  líder, lo cual permite que los principales componentes sean
                  más sencillos y livianos. Eso significa que el peso del motor
                  es 10% más liviano que el producto actual, a pesar de la
                  incorporación de las tecnologías de emisiones más importantes.
                  El diseño del sistema de combustión también hace que el nuevo
                  motor sea aún más silencioso que la versión con certificación
                  Euro 5.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div>
              <ModalIsb6 />
              <div className="my-4">
                <h5> isb6 </h5>
                <h6>
                  Fabricado a partir de la experiencia que hemos obtenido con
                  más de 10 millones de motores de la serie B hasta la fecha, el
                  ISB se destaca por un nivel de desempeño y un ahorro de
                  combustible que sigue mejorando con cada generación.
                  Desarrollado para satisfacer las exigentes regulaciones sobre
                  emisiones de todo el mundo, este producto tiene el mismo
                  desempeño mejorado en cualquier lugar. Sea que opere en
                  Europa, Turquía, Rusia, China, Brasil o India, sujeto a
                  cualquier tipo de regulaciones sobre emisiones, desde la Euro
                  2 a Euro 6, tenemos el ISB ideal para usted.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 ">
            <div>
              <ModalIsb8 />
              <div className="my-4">
                <h5> isc8</h5>
                <h6>
                  El ISB es exclusivo de Cummins, no hay ningún otro fabricante
                  capaz de ofrecer los mismos beneficios de diseño. Resulta un
                  motor potente, sumamente económico para los fabricantes de
                  camiones y autobuses, y está respaldado por la renombrada
                  confiabilidad de la plataforma de motor Cummins B. Las mejoras
                  más recientes en el diseño constituyen la base de la
                  estrategia de Cummins de ofrecer actualizaciones progresivas
                  de los productos, lo cual posiciona a la compañía muy por
                  encima de la competencia.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div>
              <ModalIsf2 />
              <div className="my-4">
                <h5> isf2</h5>
                <h6>
                  La familia de motores ISF es la más reciente incorporación a
                  la línea de motores confiables de Cummins. Puesto que tiene un
                  desempeño excepcional, es liviano, garantiza bajos costos
                  operativos y ofrece el nivel de confiabilidad y durabilidad
                  que ya es característico de Cummins, el motor ISF2.8 es ideal
                  para vehículos comerciales livianos, tales como camiones,
                  furgonetas, camionetas y vehículos utilitarios. El ISF2.8
                  ofrece ingeniería térmica avanzada, integración electrónica y
                  un sistema de combustible de conducto común de alta presión.
                  Además, se usa un turbocompresor de descarga Cummins para
                  lograr un desempeño excelente en todo el rango de rpm, y una
                  mejor respuesta hasta la torsión más alta en el límite
                  inferior.
                </h6>
              </div>
            </div>
          </div>

          {/* slider motores  */}
          <div className="text-center py-5">
            <Image src={bannerIntermedio} alt="banner motores" fluid />
          </div>

          {/* Motores part 2  */}
          <div className="row text-white text-center my-5">
            <div className="col-12 col-md-6 col-lg-3">
              <div>
                <ModalIsf3 />
                <div className="my-4">
                  <h5> isf3</h5>
                  <h6>
                    El ISF3.8 ofrece ingeniería térmica avanzada, integración
                    electrónica y un sistema de combustible de conducto común de
                    alta presión. Además, el turbocompresor de descarga de
                    Cummins se usa para ofrecer un desempeño excelente en todo
                    el rango de rpm, y una mejor respuesta hasta la torsión más
                    alta en el límite inferior.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div>
                <ModalIsle />
                <div className="my-4">
                  <h5> ISL </h5>
                  <h6>
                    El Cummins ISL es una opción de 8.9 litros potente,
                    altamente flexible, liviana, compacta y con consumo
                    eficiente de combustible. Puesto que es más liviano que los
                    motores de la competencia, los conductores se benefician del
                    alto desempeño, de la aceleración potente y de los costos
                    operativos más bajos, todo con la confiabilidad y la
                    durabilidad que espera de Cummins.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 ">
              <div>
                <ModalC8 />
                <div className="my-4">
                  <h5> c8.3 </h5>
                  <h6>
                    C8.3 de hoy está disponible en una amplia gama de
                    calificaciones, 185 a 260 hp. Características estándar de
                    alta resistencia como el turbo Holset HX40 y pistones con
                    inserciones de Ni-Resist hacen cada C8.3 dure más tiempo,
                    mientras que las opciones personalizadas que hagan todo el
                    trabajo C8.3 mejor en todo tipo de equipos y todo tipo de
                    clima. El resultado es una mayor salida de par con menos
                    combustible. Y, porque se puede ejecutar un C8.3 en cada
                    tipo de combustible a partir de Jet-A al queroseno a diesel,
                    que es como en casa en los lugares más remotos.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div>
                <ModalSerieB />
                <div className="my-4">
                  <h5> Serie-B</h5>
                  <h6>
                    Pequeños, ligeros y económicos, nuestros motores de serie B
                    incluyen un inyector de combustible para un desempeño más
                    limpio, más silencioso y con más ahorro de combustible, y
                    ofrecen un valor excepcional en términos de instalación,
                    sencillez y servicio, además de que no requieren chequeos de
                    holgura de válvula hasta que pasen 2,000 horas, el doble que
                    el estándar en la industria. Todos los motores en esta serie
                    operan bien en ciclos de trabajo intenso y ofrecen un
                    excelente consumo de combustible, capacidad de enfriamiento
                    sustancial, bajo nivel de ruido, bajo peso y alta potencia
                    de salida por litro, para una confiabilidad de primera.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motores;
