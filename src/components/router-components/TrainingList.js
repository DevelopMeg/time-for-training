import React, { Component } from "react";
import SearchTraining from "../subcomponents/TrainingListComponents/SearchTraining";

class TrainingList extends Component {
  state = {
    valueSearchTraining: ""
  };

  handleChangeValueSearchTraining = e => {
    this.setState({
      valueSearchTraining: e.target.value
    });
  };

  render() {
    return (
      <section className="section-training-list">
        <div className="section-training-list__box-title">
          <h2 className="section-training-list__title">training list</h2>
        </div>
        <SearchTraining
          valueSearchTraining={this.state.valueSearchTraining}
          handleChangeValueSearchTraining={this.handleChangeValueSearchTraining}
        />
        <div className="trainings"></div>
      </section>
    );
  }
}

export default TrainingList;
