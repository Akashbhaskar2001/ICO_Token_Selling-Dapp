import React from "react";

const Service = () => {
  const services = [
    {
      title: "Secure Storage",
      description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"

    },
    {
      title: "Mobile App",
      description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"

    },
    {
      title: "Exchange Service",
      description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"

    },
    {
      title: "Investment Project",
      description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"

    },
    {
      title: "Credit card use",
      description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"

    },
    {
      title: "Planning",
      description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"

    },


  ];
  return (
    <section id="service" className="small_pb">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-8 offset-lg-2
        col-md-12 col-sm-12">
        <div className="title_default_light title_border text-center">
          <h4
           className="animation"
          data-animation="fadeInUp"
          data-animation-delay="0.2s">
            Meet our solution for you
          </h4>
          <p className="animation"
              data-animation="fadeInUp"
          data-animation-delay="0.2s">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable
          </p>
        </div>
        </div>
      </div>
      <div className="row">
      {services.map((service, i) => (
        <div key={i + 1} className="col-lg-4
        col-md-6 col-sm-12">
        <div
        className="box_wrap text-center animation"
        data-animation="fadeInUp"
        data-animation-delay={'0.${i + 1}'}>
        <h4>{service.title}</h4>
        <p>{service.description}</p>
        </div>
        </div>


      ))}



      </div>
    </div>
    </section>




  );
};

export default Service;
