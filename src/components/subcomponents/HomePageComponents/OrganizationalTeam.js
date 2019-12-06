import React, { Component } from "react";
import OrganizationalPerson from "./OrganizationalPerson";
import ErrorData from "../../router-components/ErrorData";

class OrganizatiolTeam extends Component {
  state = {
    dataTeam: [],
    errorDataTeam: false
  };
  componentDidMount() {
    this.handleGetTeam();
  }

  handleGetTeam = async () => {
    const APITeam = "https://randomuser.me/api/?results=8&nat=US&gender=female";

    try {
      const response = await fetch(APITeam);
      const data = await response.json();

      if (!response.ok) {
        throw new Error();
      }

      return this.setState({
        dataTeam: data.results
      });
    } catch (err) {
      return this.setState({
        errorDataTeam: true
      });
    }
  };

  render() {
    if (this.state.errorDataTeam) {
      return <ErrorData />;
    }

    return (
      <section className="section-organizational-team">
        <div className="section-organizational-team__box-title">
          <h3 className="section-organizational-team__title">
            organizational team
          </h3>
        </div>
      </section>
    );
  }
}

export default OrganizatiolTeam;
