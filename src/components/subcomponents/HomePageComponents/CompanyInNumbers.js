import React, { Component } from "react";

class CompanyInNumbers extends Component {
  state = {
    numberTraining: 0,
    numberClient: 0,
    numberTrainers: 0,
    numberTeam: 0
  };

  dataCompanyNumber = [
    { type: "numberTraining", number: 50, title: "training" },
    { type: "numberClient", number: 155, title: "happy client" },
    { type: "numberTrainers", number: 18, title: "trainers" },
    { type: "numberTeam", number: 8, title: "organize team" }
  ];

  render() {
    const {
      numberTraining,
      numberClient,
      numberTrainers,
      numberTeam
    } = this.state;

    const companyNumber = this.dataCompanyNumber.map((item, id) => {
      return (
        <div key={id} className="company-in-number__item">
          <p className="company-in-number__number">
            {item.type === "numberTraining"
              ? numberTraining
              : item.type === "numberClient"
              ? numberClient
              : item.type === "numberTrainers"
              ? numberTrainers
              : item.type === "numberTeam"
              ? numberTeam
              : null}
          </p>
          <h4 className="company-in-number__title">{item.title}</h4>
        </div>
      );
    });

    return <aside className="company-in-number">{companyNumber}</aside>;
  }
}

export default CompanyInNumbers;
