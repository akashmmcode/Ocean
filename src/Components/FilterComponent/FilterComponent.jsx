import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./FilterComponent.css";
import { filerdata } from "../../utils/helper";
import TaskDetailsContext from "../../utils/TaskDetailsContext";
import { InputFieldComponent, ButtonComponent } from "../../Components";

export default function FilterComponent() {
  const [taskList, setTaskList] = React.useContext(TaskDetailsContext);
  const [searchTest, setSearchText] = React.useState("");
  function valuechnage(event) {
    setSearchText(event.target.value);
  }

  return (
    <div className="search-container">
      <InputFieldComponent
        handleChange={(event) => {
          valuechnage(event);
        }}
        value={searchTest}
        label={"Filter"}
      />
      <ButtonComponent
        handleChange={() => {
          const filteredData = filerdata(searchTest, taskList);
          setTaskList(filteredData);
        }}
        name={"Search"}
      />
    </div>
  );
}
