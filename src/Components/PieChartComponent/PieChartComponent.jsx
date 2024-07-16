import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import "./PieChartComponent.css";
import TaskDetailsContext from "../../utils/TaskDetailsContext";

export default function PieChartComponent() {
  const [taskList, setTaskList] = React.useContext(TaskDetailsContext);

  console.log(taskList, "PPPP");

  const todoCount = taskList.filter((item) => item.status == "Todo").length;
  const progressCount = taskList.filter(
    (item) => item.status == "In-progress"
  ).length;
  const completedCount = taskList.filter(
    (item) => item.status == "Completed"
  ).length;

  return (
    <div className="Bar_outer_div">
      <p className="info">Same no bug data. So showing the count of the tasks based on the status</p>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: todoCount, label: "ToDo" },
              { id: 1, value: progressCount, label: "Progress" },
              { id: 2, value: completedCount, label: "Completed" },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
}
