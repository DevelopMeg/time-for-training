import React, { Component } from "react";

class TrainingList extends Component {
  state = {};

  render() {
    return (
      <section className="section-training-list">
        <div className="section-training-list__box-title">
          <h2 className="section-training-list__title">training list</h2>
        </div>
        <div className="trainings"></div>
      </section>
    );
  }
}

export default TrainingList;
