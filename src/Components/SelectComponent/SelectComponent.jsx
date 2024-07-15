import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useThemeProps } from "@mui/material";

const status_list = [
  {
    value: "Todo",
    label: "Todo",
  },
  {
    value: "In-progress",
    label: "In-progress",
  },
  {
    value: "Completed",
    label: "Completed",
  },
  {
    value: "Halted",
    label: "Halted",
  },
];

export default function SelectComponent(props) {
  console.log(props, "{{{{");

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "30ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label={props.label}
          defaultValue="Todo"
          helperText=""
          onChange={props.handleChange}
          name={props.name}
        >
          {status_list.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
