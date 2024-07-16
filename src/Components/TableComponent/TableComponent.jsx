import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TaskDetailsContext from "../../utils/TaskDetailsContext";
import Button from "@mui/material/Button";
import "./TableComponent.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { ModalComponent } from "../../Components";

export default function BasicTable() {
  const [taskList, setTaskList] = React.useContext(TaskDetailsContext);

  const removeTask = (desc, proj) => {
    setTaskList((prev) =>
      prev.filter((item) => !(item.taskDesc == desc && item.project == proj))
    );
  };

  return (
    <>
      {/* <ButtonComponent name={"Add New Task"} /> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right" className="row_heading">Task Description</TableCell>
              <TableCell align="right" className="row_heading">Project</TableCell>
              <TableCell align="right" className="row_heading">Progress</TableCell>
              <TableCell align="right" className="row_heading">Status</TableCell>
              <TableCell align="right" className="row_heading">Assignee</TableCell>
              <TableCell align="right" className="row_heading">Due Date</TableCell>
              <TableCell align="right" className="row_heading">Priority</TableCell>
              <TableCell align="right" className="row_heading">Operations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {taskList.map((row, index) => (
              <TableRow
                key={index + 1}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{row.taskDesc}</TableCell>
                <TableCell align="right">{row.project}</TableCell>
                <TableCell align="right">{row.progress}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.assignee}</TableCell>
                <TableCell align="right">{row.dueDate}</TableCell>
                <TableCell align="right">{row.priority}</TableCell>
                <div className="edit_options">
                  {/* <Button
                    variant="outlined"
                    onClick={() => removeTask(row.taskDesc, row.project)}
                    style={{
                      height: "32px",
                      marginTop: "8px",
                      marginRight: "8px",
                      marginLeft: "10px",
                    }}
                    className="buttons"
                  >
                    Edit
                  </Button> */}
                  <ModalComponent
                    name={"edit"}
                    taskDesc={row.taskDesc}
                    project={row.project}
                    id={row.ID}
                  />
                  <Button
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    onClick={() => removeTask(row.taskDesc, row.project)}
                    style={{
                      height: "32px",
                      marginTop: "8px",
                      marginRight: "8px",
                      marginLeft: "10px",
                    }}
                    className="buttons"
                  >
                    Delete
                  </Button>
                </div>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
