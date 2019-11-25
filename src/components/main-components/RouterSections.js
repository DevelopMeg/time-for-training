import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../router-components/HomePage";
import TrainingList from "../router-components/TrainingList";
import PriceList from "../router-components/PriceList";
import TrainersInfo from "../router-components/TrainersInfo";
import ErrorPage from "../router-components/ErrorPage";
import Trainer from "../subcomponents/TrainersInfoComponents/Trainer";
import ErrorData from "../router-components/ErrorData";

class RouterSections extends Component {
  state = {
    dataTrainers: [],
    errorDataTrainer: false
  };

  componentDidMount() {
    this.handleGetTrainers();
  }

  handleGetTrainers = async () => {
    const APITrainers = "https://randomuser.me/api/?results=18&nat=US";

    try {
      const response = await fetch(APITrainers);
      const data = await response.json();

      if (!response.ok) {
        throw new Error();
      }

      return this.setState({
        dataTrainers: data.results
      });
    } catch (err) {
      return this.setState({
        errorDataTrainer: true
      });
    }
  };

  render() {
    if (this.state.errorDataTrainer) {
      return <ErrorData />;
    }

    const listTrainers = this.state.dataTrainers.map((trainer, id) => {
      return <Trainer key={id} trainer={trainer} />;
    });

    const trainerNames = this.state.dataTrainers.map(trainer => {
      return `${trainer.name.first} ${trainer.name.last}`;
    });

    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/training-list"
          render={() => {
            return <TrainingList trainerNames={trainerNames} />;
          }}
        />
        <Route path="/price-list" component={PriceList} />
        <Route
          path="/trainers-info"
          render={() => {
            return <TrainersInfo listTrainers={listTrainers} />;
          }}
        />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}

export default RouterSections;
