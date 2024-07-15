import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputFieldComponent(props) {
  const style = {
    border: "1px solid white",
    borderRadius: "5px",
    backgroundColor: "white",
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)":
          props.label == "Task Description"
            ? { m: 1, width: "62ch" }
            : { m: 1, width: "30ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        error={props.required}
        style={style}
        id="outlined-basic"
        name={props.name}
        label={props.label}
        onChange={props.handleChange}
        variant="outlined"
        value={props.value}
        type={props.name == "progress" ? "number" : "text"}
        inputProps={props.name === "progress" ? { min: 0, max: 100 } : {}}
      />
    </Box>
  );
}
