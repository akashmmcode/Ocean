import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import "./CardComponent.css";
import TaskDetailsContext from "../../utils/TaskDetailsContext";
import { CardTilesComponent } from "../../Components";

export default function CardComponent() {
  const [taskList, setTaskList] = React.useContext(TaskDetailsContext);

  const todolist = taskList.filter((item) => item.status == "Todo").length;
  const inprogresslist = taskList.filter(
    (item) => item.status == "In-progress"
  ).length;
  const completedlist = taskList.filter(
    (item) => item.status == "Completed"
  ).length;
  const haltedlist = taskList.filter((item) => item.status == "Halted").length;

  console.log(todolist);

  return (
    <div className="card_outer_div">
      <Box className="card">
        <CardTilesComponent count={todolist} name={"ToDo"} />
      </Box>
      <Box className="card">
        <CardTilesComponent count={inprogresslist} name={"In-progress"} />
      </Box>
      <Box className="card">
        <CardTilesComponent count={completedlist} name={"Completed"} />
      </Box>
      <Box className="card">
        <CardTilesComponent count={haltedlist} name={"Halted"} />
      </Box>
    </div>
  );
}
