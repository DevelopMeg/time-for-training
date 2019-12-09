import React, { Component } from "react";

class CompanyInNumbers extends Component {
  constructor(props) {
    super(props);
    this.countUp = React.createRef();
    this.state = {
      numberTraining: 0,
      numberClient: 0,
      numberTrainers: 0,
      numberTeam: 0
    };
  }

  dataCompanyNumber = [
    { type: "numberTraining", number: 50, title: "training" },
    { type: "numberClient", number: 155, title: "happy client" },
    { type: "numberTrainers", number: 18, title: "trainers" },
    { type: "numberTeam", number: 8, title: "organize team" }
  ];

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (this.countUp.current !== null) {
      const companyNumberTop = this.countUp.current.offsetTop;
      const companyNumberHeight = this.countUp.current.offsetHeight;

      if (
        window.scrollY >=
        companyNumberTop + companyNumberHeight - window.innerHeight + 80
      ) {
        this.handleAddNumber();
      }
    }
  };

  handleAddNumber = () => {
    const duration = 5000;

    this.dataCompanyNumber.forEach(item => {
      const addNumberOne = () => {
        if (item.type === "numberTraining") {
          if (item.number !== this.state.numberTraining) {
            this.setState(prevState => ({
              numberTraining: prevState.numberTraining + 1
            }));
          } else {
            clearInterval(idInterval);
          }
        } else if (item.type === "numberClient") {
          if (item.number !== this.state.numberClient) {
            this.setState(prevState => ({
              numberClient: prevState.numberClient + 1
            }));
          } else {
            clearInterval(idInterval);
          }
        } else if (item.type === "numberTrainers") {
          if (item.number !== this.state.numberTrainers) {
            this.setState(prevState => ({
              numberTrainers: prevState.numberTrainers + 1
            }));
          } else {
            clearInterval(idInterval);
          }
        } else if (item.type === "numberTeam") {
          if (item.number !== this.state.numberTeam) {
            this.setState(prevState => ({
              numberTeam: prevState.numberTeam + 1
            }));
          } else {
            clearInterval(idInterval);
          }
        }
      };

      const idInterval = setInterval(addNumberOne, duration / item.number);
    });
  };
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

    return (
      <aside className="company-in-number" ref={this.countUp}>
        {companyNumber}
      </aside>
    );
  }
}

export default CompanyInNumbers;
