import React from "react";

const SectionWelcome = () => {
  return (
    <section className="section-welcome">
      <div className="section-welcome__box-title">
        <h1 className="section-welcome__title">Welcome to Time For Training</h1>
        <h2 className="section-welcome__subtitle">changes start with you</h2>
      </div>
      <div className="scroll-down__box">
        <i className="fas fa-angle-double-down scroll-down__sign"></i>
      </div>
    </section>
  );
};

export default SectionWelcome;
