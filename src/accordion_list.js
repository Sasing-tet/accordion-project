import React, { useState } from "react";

const Accordion_list = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <article className="accordion">
      <div className="header">
        {title}
        <button
          className="accordion-button"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? "-" : "+"}
        </button>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </article>
  );
};
export default Accordion_list;
