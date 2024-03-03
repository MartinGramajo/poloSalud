const DondeEncontrarnos = () => {
  return (
    <div className="mb-5 ">
      <div className="text-center text-black">
        <h3 className="text-center text-dark py-5">
          {" "}
          ¿DÓNDE NOS PODES ENCONTRAR?{" "}
        </h3>
      </div>
      <div className="text-center container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14242.123818853335!2d-65.21031819518315!3d-26.823059727208125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c3bcade52c7%3A0x7829ea5a44b238bf!2sSantiagoDiesel!5e0!3m2!1ses!2sar!4v1700608241976!5m2!1ses!2sar"
          width="100%"
          height="550"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default DondeEncontrarnos;
