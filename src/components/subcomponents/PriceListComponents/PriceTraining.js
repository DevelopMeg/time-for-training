import React from "react";

const PriceTraining = props => {
  return (
    <section className="price-item">
      <div className="price-item__box-title">
        <h4 className="price-item__title">{props.priceTraining.name}</h4>
        <img
          src={props.priceTraining.icon}
          alt={props.priceTraining.name}
          className="price-item__icon"
        />
      </div>
      <p className="price-item__text">
        One person - {props.priceTraining.personOne}
      </p>
      <p className="price-item__text">
        Two people - {props.priceTraining.peopleTwo}
      </p>
      <p className="price-item__text">
        Three people - {props.priceTraining.peopleThree}
      </p>
      <p className="price-item__text">
        Four people - {props.priceTraining.peopleFour}
      </p>
    </section>
  );
};

export default PriceTraining;
