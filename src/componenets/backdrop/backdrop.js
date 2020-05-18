import React from "react";
import ReactDOM from "react-dom";

import "./backdrop.scss";

const backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.open}></div>,
    document.getElementById("backdrop-hook")
  );
};

export default backdrop;
