import React from "react";
import PriceTraining from "../subcomponents/PriceListComponents/PriceTraining";
import timeSheduling from "../../image/timeSheduling.png";
import softSkills from "../../image/softSkills.png";
import selfOrganization from "../../image/selfOrganization.png";
import habitsGoals from "../../image/habitsGoals.png";
import middleSign from "../../image/middleSignColor.png";

const listPriceTraining = [
  {
    name: "time sheduling",
    icon: timeSheduling,
    personOne: "250PLN",
    peopleTwo: "450PLN",
    peopleThree: "600PLN",
    peopleFour: "850PLN"
  },
  {
    name: "soft skills",
    icon: softSkills,
    personOne: "400PLN",
    peopleTwo: "700PLN",
    peopleThree: "1050PLN",
    peopleFour: "1450PLN"
  },
  {
    name: "self-organization",
    icon: selfOrganization,
    personOne: "350PLN",
    peopleTwo: "650PLN",
    peopleThree: "950PLN",
    peopleFour: "1250PLN"
  },
  {
    name: "habits and goals",
    icon: habitsGoals,
    personOne: "200PLN",
    peopleTwo: "350PLN",
    peopleThree: "500PLN",
    peopleFour: "750PLN"
  }
];

const PriceList = () => {
  const listPrice = listPriceTraining.map((priceTraining, i) => {
    return <PriceTraining key={i} priceTraining={priceTraining} />;
  });

  return (
    <section className="section-price-list">
      <div className="section-price-list__box-title">
        <h2 className="section-price-list__title">price list</h2>
      </div>
      <div className="section-price-list__box-prices">
        <div className="price-list">{listPrice}</div>
        <img
          src={middleSign}
          alt="letter"
          className="section-price-list__company-sign"
        />
      </div>
      <p className="section-price-list__text">
        If you want take part in more people together, please contact then we
        will be agreed price per training.
      </p>
    </section>
  );
};

export default PriceList;
