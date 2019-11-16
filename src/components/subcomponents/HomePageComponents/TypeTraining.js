import React from "react";
import timeSheduling from "../../../image/timeSheduling.png";
import softSkills from "../../../image/softSkills.png";
import selfOrganization from "../../../image/selfOrganization.png";
import habitsGoals from "../../../image/habitsGoals.png";
import middleSign from "../../../image/middleSign.png";

const TypeTraining = () => {
  return (
    <section className="section-type-training">
      <h3 className="section-type-training__title">types of training</h3>

      <div className="type-training">
        <div className="type-training__box-title">
          <h4 className="type-training__title">time sheduling</h4>
          <img
            src={timeSheduling}
            alt="clock"
            className="type-training__icon"
          />
        </div>
        <p className="type-training__text">
          Create a schedule of the day that will allow you to achieve your goals
          and dreams without wasting time.
        </p>
      </div>

      <div className="type-training">
        <div className="type-training__box-title">
          <h4 className="type-training__title">soft skills</h4>
          <img src={softSkills} alt="person" className="type-training__icon" />
        </div>
        <p className="type-training__text">
          Developing soft skills can change your private and professional life.
          Make dreams come true be yourself.
        </p>
      </div>

      <div className="type-training">
        <div className="type-training__box-title">
          <h4 className="type-training__title">self-organization</h4>
          <img
            src={selfOrganization}
            alt="calendar"
            className="type-training__icon"
          />
        </div>
        <p className="type-training__text">
          Good self-organization allows you to achieve more dreams, organize the
          environment around you.
        </p>
      </div>

      <div className="type-training">
        <div className="type-training__box-title">
          <h4 className="type-training__title">habits and goals</h4>
          <img
            src={habitsGoals}
            alt="planner"
            className="type-training__icon"
          />
        </div>
        <p className="type-training__text">
          Achieve goals with good habits, and eliminate these bad habits, that
          stop you achieve these good goals.
        </p>
      </div>

      <div className="company-sign">
        <img src={middleSign} alt="letter" className="company-sign__sign" />
      </div>
    </section>
  );
};

export default TypeTraining;
