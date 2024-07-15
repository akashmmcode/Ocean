import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import TaskDetailsContext from "./utils/TaskDetailsContext";
import { v4 as uuidv4 } from "uuid";
import Grid from "@mui/material/Grid";

import {
  TableComponent,
  ModalComponent,
  FilterComponent,
  CardComponent,
  BarChartComponent,
  PieChartComponent,
  LeftNavComponent,
  HeaderComponent,
} from "./Components";

function App() {
  const [taskList, setTaskList] = useState([
    {
      ID: uuidv4(),
      taskDesc: "Walk",
      project: "Project1",
      progress: 40,
      status: "Todo",
      assignee: "Manager",
      dueDate: "July15",
      priority: "High",
      bugs: 10,
    },
    {
      ID: uuidv4(),
      taskDesc: "Run",
      project: "Project1",
      progress: 40,
      status: "Todo",
      assignee: "Manager",
      dueDate: "July15",
      priority: "High",
      bugs: 10,
    },
  ]);

  const [showTasks, setShowTasks] = useState(true);

  const showTasksfn = () => {
    setShowTasks(true);
  };

  const showDashboardfn = () => {
    setShowTasks(false);
  };

  return (
    <>
      <TaskDetailsContext.Provider value={[taskList, setTaskList]}>
        <HeaderComponent />
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <LeftNavComponent
              showTasks={showTasksfn}
              showDashboard={showDashboardfn}
            />
          </Grid>
          <Grid item xs={10}>
            {showTasks ? (
              <div className="leftnav_section">
                <FilterComponent />
                <ModalComponent />
                <TableComponent />
              </div>
            ) : (
              <div className="main_section">
                <CardComponent />
                <div className="graphs_div">
                  <BarChartComponent />
                  <PieChartComponent />
                </div>
              </div>
            )}
          </Grid>
        </Grid>
      </TaskDetailsContext.Provider>
    </>
  );
}

export default App;
