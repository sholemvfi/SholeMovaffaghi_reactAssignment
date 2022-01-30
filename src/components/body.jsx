import { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";

let todo = {
  options: [{ value: "In-Progress" }, { value: "To-Do" }],
};
let blocked = {
  options: [{ value: "To-Do" }, { value: "Blocked" }],
};
let inQA = {
  options: [{ value: "Done" }, { value: "To-Do" }],
};
let inProgress = {
  options: [{ value: "InQA" }, { value: "Blocked" }, { value: "In-Progress" }],
};
let done = {
  options: [{ value: "Deployed" }, { value: "Done" }],
};


const CardBody = ({ taskTitle, description, taskStatus}) => {
  const [statuses, setStatus] = useState(todo);
  const [b, settingB] = useState(taskStatus);
  const changeMode = (event) => {
    settingB(event.target.value);
    statusChange(event.target.value);
  };

  const statusChange = (val) => {
    switch (val) {
      case "To-Do":
        setStatus(todo);
        break;
      case "In-Progress":
        setStatus(inProgress);
        break;
      case "InQA":
        setStatus(inQA);
        break;
      case "Blocked":
        setStatus(blocked);
        break;
      case "Done":
        setStatus(done);
        break;
    }
  };
  return (
      <>
        <div className="card"
             style={{border:"1px solid gray", boxShadow:"5px 7px 10px gray"}}>
          <div className="card-body">
            <h3 className="card-title"
                style={{color:"gray", fontFamily:"sans-serif", marginLeft:"10px"}}>{taskTitle}</h3>
            <p className="card-text"
               style={{fontSize:"20px", marginLeft:"10px"}}>{description}</p>
            <div className="d-flex justify-content-around">
              <FormControl fullWidth className="w-50" style={{color:"lightgray"}}>
                <Select
                    value={b}
                    inputProps={{ "aria-label": "Without label" }}
                    defaultValue={taskStatus}
                    onChange={changeMode}
                    variant="filled"
                    autoWidth={true}
                    className="mw-100"
                >
                  {statuses.options.map((item) => {
                    return <MenuItem value={item.value} className="w-100"
                    >{item.value}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </>
  );
};

export default CardBody;
