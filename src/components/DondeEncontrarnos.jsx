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
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d768.8695800159863!2d2.6638432696585372!3d39.5713690319904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDM0JzE2LjkiTiAywrAzOSc1Mi4yIkU!5e0!3m2!1ses-419!2sar!4v1709491277107!5m2!1ses-419!2sar"
          width="100%"
          height="450"
          style={{ border: "0px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default DondeEncontrarnos;
