import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../router-components/HomePage";
import TrainingList from "../router-components/TrainingList";
import PriceList from "../router-components/PriceList";
import TrainersInfo from "../router-components/TrainersInfo";
import ErrorPage from "../router-components/ErrorPage";

class RouterSections extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/training-list" component={TrainingList} />
        <Route path="/price-list" component={PriceList} />
        <Route path="/trainers-info" component={TrainersInfo} />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}

export default RouterSections;
