import React, { Component } from "react";
import SearchTraining from "../subcomponents/TrainingListComponents/SearchTraining";
import Training from "../subcomponents/TrainingListComponents/Training";

class TrainingList extends Component {
  state = {
    valueSearchTraining: ""
  };

  dataTrainings = [
    {
      date: new Date("2019-10-03").toDateString(),
      title: "self-confidence in work",
      category: "soft skills",
      trainer: this.props.trainerNames[0],
      city: "Warsaw",
      hours: "8 hours"
    },
    {
      date: new Date("2019-10-14").toDateString(),
      title: "time-scheduling in family",
      category: "time-sheduling",
      trainer: this.props.trainerNames[2],
      city: "Cracow",
      hours: "5 hours"
    },
    {
      date: new Date("2019-10-28").toDateString(),
      title: "how to use schedule?",
      category: "time-sheduling",
      trainer: this.props.trainerNames[6],
      city: "Poznan",
      hours: "5 hours"
    },
    {
      date: new Date("2019-11-05").toDateString(),
      title: "how to achieve your goals?",
      category: "habits and goals",
      trainer: this.props.trainerNames[10],
      city: "Wroclaw",
      hours: "8 hours"
    },
    {
      date: new Date("2019-11-16").toDateString(),
      title: "workplace organization",
      category: "self-organization",
      trainer: this.props.trainerNames[14],
      city: "Warsaw",
      hours: "8 hours"
    },
    {
      date: new Date("2019-11-24").toDateString(),
      title: "teamwork and individuality",
      category: "soft-skills",
      trainer: this.props.trainerNames[17],
      city: "Cracow",
      hours: "8 hours"
    }
  ];

  handleChangeValueSearchTraining = e => {
    this.setState({
      valueSearchTraining: e.target.value
    });
  };

  render() {
    const trainings = this.dataTrainings.map((training, id) => {
      return <Training key={id} training={training} />;
    });

    return (
      <section className="section-training-list">
        <div className="section-training-list__box-title">
          <h2 className="section-training-list__title">training list</h2>
        </div>
        <SearchTraining
          valueSearchTraining={this.state.valueSearchTraining}
          handleChangeValueSearchTraining={this.handleChangeValueSearchTraining}
        />
        <div className="trainings">{trainings}</div>
      </section>
    );
  }
}

export default TrainingList;
