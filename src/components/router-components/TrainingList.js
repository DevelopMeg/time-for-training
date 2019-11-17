import React, { Component } from "react";
import SearchTraining from "../subcomponents/TrainingListComponents/SearchTraining";
import Training from "../subcomponents/TrainingListComponents/Training";

class TrainingList extends Component {
  state = {
    valueSearchTraining: "",
    clickChooseSearch: "",
    filterDataTrainings: []
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.valueSearchTraining !== this.state.valueSearchTraining) {
      let filterData;

      if (this.state.valueSearchTraining !== "") {
        filterData = this.dataTrainings.filter(training => {
          const optionSearch = training[this.state.clickChooseSearch];

          return optionSearch
            .toLowerCase()
            .includes(this.state.valueSearchTraining.toLowerCase());
        });
      } else {
        filterData = [...this.dataTrainings];
      }

      this.setState({
        filterDataTrainings: filterData
      });
    }
  }

  handleChangeValueSearchTraining = e => {
    this.setState({
      valueSearchTraining: e.target.value
    });
  };

  handleClickChooseSearch = (currentBtn, siblingBtn, e) => {
    this.setState({
      clickChooseSearch: e.target.innerHTML
    });

    currentBtn.className += " handle-search__option--active";
    siblingBtn.classList.remove("handle-search__option--active");
  };

  handleClearChooseSearch = (...btns) => {
    this.setState({
      clickChooseSearch: "",
      valueSearchTraining: ""
    });

    btns.forEach(btn => {
      btn.classList.remove("handle-search__option--active");
    });
  };

  render() {
    let trainings;
    if (this.state.valueSearchTraining.length !== 0) {
      trainings = this.state.filterDataTrainings.map((training, id) => {
        return <Training key={id} training={training} />;
      });
    } else {
      trainings = this.dataTrainings.map((training, id) => {
        return <Training key={id} training={training} />;
      });
    }

    return (
      <section className="section-training-list">
        <div className="section-training-list__box-title">
          <h2 className="section-training-list__title">training list</h2>
        </div>
        <SearchTraining
          valueSearchTraining={this.state.valueSearchTraining}
          handleChangeValueSearchTraining={this.handleChangeValueSearchTraining}
          handleClickChooseSearch={this.handleClickChooseSearch}
          handleClearChooseSearch={this.handleClearChooseSearch}
          clickChooseSearch={this.state.clickChooseSearch}
        />
        <div className="trainings">{trainings}</div>
      </section>
    );
  }
}

export default TrainingList;
