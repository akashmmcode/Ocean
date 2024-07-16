import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import TaskDetailsContext from "../../utils/TaskDetailsContext";
import "./BarChartComponent.css";
import { PieChartComponent } from "../../Components";

export default function BarChartComponent() {
  const [taskList, setTaskList] = React.useContext(TaskDetailsContext);

  const Project1 = taskList.filter((item) => item.project == "Project1");

  const Project1ToDo = Project1.filter((item) => item.status == "Todo");

  const Project1InProgress = Project1.filter(
    (item) => item.status == "In-progress"
  );

  const Project1Completed = Project1.filter(
    (item) => item.status == "Completed"
  );

  const Project1TodoHalted = Project1.filter((item) => item.status == "Halted");

  let Project1BugCountTodo = 0;

  for (let i = 0; i < Project1ToDo.length; i++) {
    Project1BugCountTodo = Project1BugCountTodo + Project1[i].bugs;
  }

  return (
    <div className="Bar_outer_div">
      <p className="info">The task here was - Show project-wise bug status counts using a bar chart. But it was nowhere mentioned where are we taking the bugs as input for a project so i have hard coded the bugs based on projects and added them please see the code for better understanding</p>
      <BarChart
        xAxis={[
          { scaleType: "band", data: ["Project 1", "Project 2", "Project 3"] },
        ]}
        series={[
          { data: [Project1BugCountTodo, 3, 5], label: "Todo" },
          { data: [1, 6, 3], label: "Progress" },
          { data: [2, 5, 6], label: "Completed" },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
}
