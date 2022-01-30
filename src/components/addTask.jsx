import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { useState } from "react";
import { TextField } from "@mui/material";
import CardBody from "./body";
import '../style/addTask.css';

const t1 = [{
    title: "web programming",
    desc: "learn react",
    status: "In-Progress",
}
];

const NewTask = (props) => {
    const adding = () => {
        let task = {
            title: taskTitle,
            desc: taskDesc,
            status: "To-Do",
            statusId: 1
        };
        createTask((previousTasks) => {
            return [...previousTasks, task];
        });
        setToShow(false);
    }
    const [toShow, setToShow] = useState(false);
    const [tasks, createTask] = useState(t1);
    const canceling = () => setToShow(false);
    const showing = () => setToShow(true);
    const [taskTitle, createTitle] = useState("");
    const [taskDesc, createDescrip] = useState("");
    return ( 
        <>
    <div className="container" style={
        {backgroundColor: "darkgray"}}>
        <div className="row d-inline">
            <div className="col p-4" style={
                {margin: "10px 0 0 420px", fontSize: "40px", fontFamily:"sans-serif", color:"white"}}>
                TASK LIST
            </div>
            <div className="text-center">
                <button className="btn btn-dark" onClick={showing}>Adding task</button>
                <Modal
      show={toShow}
      onHide={canceling}
      backdrop="static"
      keyboard={false}
        >
          <Modal.Header >
            <Modal.Title>Adding task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <TextField variant={"outlined"} label={"task title"} className={"w-200"} value={taskTitle} onChange={(e) => createTitle(e.target.value)}/>
          <TextField variant={"outlined"} label={"task description"} className={"w-100 mt-5"} multiline={true} value={taskDesc} onChange={(e) => createDescrip(e.target.value)}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="sc" onClick={canceling}>back</Button>
            <Button onClick={adding} variant="fi">Add task</Button>
          </Modal.Footer>
        </Modal>
                    </div>
                </div>
                <div className="row m-2">
                    {tasks.map((task,i) => {
                        return(
                            <div className="w-100 pb-4">
                            <CardBody key={i} taskTitle={task.title} description={task.desc} taskStatus={task.status} statusId={task.statusId}/>
                            </div>

                        )
                    })}
                </div>
            </div>
        </>
     );
};

export default NewTask;