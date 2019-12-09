import React from "react";
import purposeTraining from "../../image/purposeTraining.jpg";

const TrainersInfo = props => {
  return (
    <section className="section-trainers-info">
      <div className="section-trainers-info__box-title">
        <h2 className="section-trainers-info__title">Trainers Info</h2>
      </div>
      <div className="trainers">
        {props.listTrainers}
        <div className="trainers__image-fixed"></div>
      </div>
      <img
        src={purposeTraining}
        alt="purpose training"
        className="section-trainers-info__image"
      />
    </section>
  );
};

export default TrainersInfo;
