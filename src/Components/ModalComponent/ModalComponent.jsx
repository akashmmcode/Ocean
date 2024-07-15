import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "./ModalComponent.css";
import TaskDetailsContext from "../../utils/TaskDetailsContext";
import { v4 as uuidv4 } from "uuid";

import {
  TextAreaComponent,
  InputFieldComponent,
  ButtonComponent,
  SelectComponent,
} from "../../Components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ModalComponent(props) {
  console.log(props);

  const buttonStyle = {
    backgroundColor: "#22222200",
    color: props.name == "edit" ? "black" : "aliceblue",
    border: props.name == "edit" ? "1px solid black" : "1px solid white",
    marginBottom: "10px",
    marginTop: "8px",
    height: "2rem",
  };

  const [editId, setEditId] = React.useState("");

  const [required, setRequired] = React.useState(false);

  //Array desc because it conatins a function also inside.
  const [newTask, setNewTask] = React.useState({
    ID: uuidv4(),
    taskDesc: "",
    project: "",
    progress: "",
    status: "",
    assignee: "",
    dueDate: "",
    priority: "",
  });

  const [taskList, setTaskList] = React.useContext(TaskDetailsContext);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    if (props.name == "edit") {
      const edit_task = taskList.find(
        (item) =>
          item.taskDesc == props.taskDesc && item.project == props.project
      );
      setNewTask({
        ID: edit_task.ID,
        taskDesc: edit_task.taskDesc,
        project: edit_task.project,
        progress: edit_task.progress,
        status: edit_task.status,
        assignee: edit_task.assignee,
        dueDate: edit_task.dueDate,
        priority: edit_task.priority,
      });
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  function handleChange(event) {
    setNewTask((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  const addNewTask = () => {
    if (
      newTask.ID == "" ||
      newTask.taskDesc == "" ||
      newTask.project == "" ||
      newTask.progress == "" ||
      newTask.assignee == "" ||
      newTask.dueDate == ""
    ) {
      setRequired(true);
    } else {
      setRequired(false);
      setTaskList((prevTasks) => [...prevTasks, newTask]);
      handleClose();
      setNewTask({
        taskDesc: "",
        project: "",
        progress: "",
        status: "",
        assignee: "",
        dueDate: "",
        priority: "",
      });
    }
  };

  const EditTask = () => {
    const submit_edit_task = taskList.map((item) =>
      item.ID === newTask.ID
        ? {
            ...item,
            taskDesc: newTask.taskDesc,
            project: newTask.project,
            progress: newTask.progress,
            status: newTask.status,
            assignee: newTask.assignee,
            dueDate: newTask.dueDate,
            priority: newTask.priority,
          }
        : item
    );

    setTaskList([...submit_edit_task]);
    handleClose();
    setNewTask({
      taskDesc: "",
      project: "",
      progress: "",
      status: "",
      assignee: "",
      dueDate: "",
      priority: "",
    });
  };

  function cancel() {
    handleClose();
  }

  console.log(newTask);

  return (
    <div>
      <Button className="Add_Task" style={buttonStyle} onClick={handleOpen}>
        {props.name == "edit" ? "Edit Task" : "Add New Task"}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
          <h2 id="parent-modal-title" style={{ color: "black" }}>
            Add New Task
          </h2>
          <InputFieldComponent
            handleChange={handleChange}
            label={"Task Description"}
            name={"taskDesc"}
            value={newTask.taskDesc}
            required={required}
          />
          <div className="inputs_in_flex">
            <InputFieldComponent
              handleChange={handleChange}
              label={"Project Name"}
              name={"project"}
              value={newTask.project}
              required={required}
            />

            <InputFieldComponent
              handleChange={handleChange}
              label={"Progress in %"}
              name={"progress"}
              value={newTask.progress}
              required={required}
            />
            <InputFieldComponent
              handleChange={handleChange}
              label={"Assignee"}
              name={"assignee"}
              value={newTask.assignee}
              required={required}
            />
            <InputFieldComponent
              handleChange={handleChange}
              label={"Due Date"}
              name={"dueDate"}
              value={newTask.dueDate}
              required={required}
            />
            <InputFieldComponent
              handleChange={handleChange}
              label={"Priority"}
              name={"priority"}
              value={newTask.priority}
              required={required}
            />
            <SelectComponent
              name={"status"}
              label={"Status"}
              handleChange={handleChange}
              required={required}
            />
          </div>

          <div className="button_outer_div">
            <ButtonComponent name={"Cancel"} handleChange={cancel} />
            {props.name == "edit" ? (
              <ButtonComponent name={"Edit Changes"} handleChange={EditTask} />
            ) : (
              <ButtonComponent
                name={"Add New Task"}
                handleChange={addNewTask}
              />
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
