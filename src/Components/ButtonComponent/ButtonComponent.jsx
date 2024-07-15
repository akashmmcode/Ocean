import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./ButtonComponent.css";

export default function ButtonComponent(props) {
  const style = {
    backgroundColor: props.name != "Cancel" ? "black" : "white",
    color: props.name != "Cancel" ? "white" : "black",
  };
  return (
    <Stack spacing={2} direction="row" className="button">
      <Button style={style} variant="contained" onClick={props.handleChange}>
        {props.name}
      </Button>
    </Stack>
  );
}
