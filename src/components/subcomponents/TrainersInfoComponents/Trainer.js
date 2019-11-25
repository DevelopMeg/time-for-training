import React from "react";

const Trainer = props => {
  return (
    <div className="trainer">
      <div className="trainer-front card">
        <img
          src={props.trainer.picture.medium}
          alt={props.trainer.picture.name}
          className="trainer-front__image"
        />
        <p className="trainer-front__name">
          {props.trainer.name.first} {props.trainer.name.last}
        </p>
        <p className="trainer-front__contact">{props.trainer.phone}</p>
      </div>
      <div className="trainer-back card">
        <h4 className="trainer-back__title">About me...</h4>
        <p className="trainer-back__text">
          I come from the city: {props.trainer.location.city}, in a country:{" "}
          {props.trainer.location.country}. My profession number is:{" "}
          {props.trainer.location.postcode}. My profession name is:{" "}
          {props.trainer.login.username}.
        </p>
      </div>
    </div>
  );
};

export default Trainer;
