import React from "react";
import TypeTraining from "./TypeTraining";
import OrganizationalTeam from "./OrganizationalTeam";
import CompanyInNumbers from "./CompanyInNumbers";

const AboutUs = () => {
  return (
    <section className="section-about-us">
      <h2 className="section-about-us__title">about us</h2>
      <p className="section-about-us__text">
        We are training company and create awesome training on different
        branches of personal development.
      </p>
      <TypeTraining />
      <OrganizationalTeam />
      <CompanyInNumbers />
    </section>
  );
};

export default AboutUs;
