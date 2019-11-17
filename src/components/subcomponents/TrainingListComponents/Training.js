import React from "react";
const Training = props => {
  return (
    <div className="training">
      <p className="training__date">{props.training.date}</p>
      <h4 className="training__title">{props.training.title}</h4>

      <div className="training__box-category">
        <span className="training__category-decorate"></span>
        <h5 className="training__category">{props.training.category} </h5>
        <span className="training__category-decorate"></span>
      </div>

      <div className="training__box-details">
        <p className="training__trainer">Trainer: {props.training.trainer}</p>
        <p className="training__city">City: {props.training.city}</p>
        <p className="training__duration">Duration: {props.training.hours}</p>
      </div>
    </div>
  );
};

export default Training;
