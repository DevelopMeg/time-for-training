import React from "react";
import purposeTraining from "../../image/purposeTraining.jpg";
import Trainer from "../subcomponents/TrainersInfoComponents/Trainer";

const TrainersInfo = props => {
  const listTrainers = props.dataTrainers.map((trainer, id) => {
    return <Trainer key={id} trainer={trainer} />;
  });

  return (
    <section className="section-trainers-info">
      <div className="section-trainers-info__box-title">
        <h2 className="section-trainers-info__title">Trainers Info</h2>
      </div>
      <div className="trainers">
        {listTrainers}
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
