import React from "react";
import middleSign from "../../image/middleSignColor.png";

const PriceList = () => {
  return (
    <section className="section-price-list">
      <div className="section-price-list__box-title">
        <h2 className="section-price-list__title">price list</h2>
      </div>
      <div className="section-price-list__box-prices">
        <div className="price-list"></div>
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
