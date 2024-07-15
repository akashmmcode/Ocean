import React from "react";
import "./LeftNavComponent.css";

const LeftNavComponent = (props) => {
  return (
    <div className="leftnav_outerdiv">
      <button onClick={props.showTasks}>Tasks</button>
      <button onClick={props.showDashboard}>Dashboard</button>
    </div>
  );
};

export default LeftNavComponent;
