import React from "react";

const OrganizationalPerson = props => {
  return (
    <div className="organizational-person">
      <img
        src={props.person.picture.medium}
        alt={props.person.name.first}
        className="organizational-person__image"
      />

      <p className="organizational-person__name">
        {props.person.name.first} {props.person.name.last}
      </p>
      <p className="organizational-person__contact">
        <i className="fas fa-mobile-alt organizational-person__contact-icon"></i>
        {props.person.phone}
      </p>
    </div>
  );
};

export default OrganizationalPerson;
