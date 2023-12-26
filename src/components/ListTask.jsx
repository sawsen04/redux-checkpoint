import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import { Button, Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/taskActions";
import "./style.css";
function ListTask() {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState({ description: "" });
  console.log(newTask);
  const [showDone, setshowDone] = useState(false);
  const [showUnDone, setshowUnDone] = useState(false);
  const tasks = useSelector((store) => store.tasks);
  return (
    <div className="list">
      <div>
        <Form className="form-add"
          onChange={(e) => {
            setNewTask({ ...newTask, [e.target.name]: e.target.value });
          }}
        >
          <Form.Field className="add-new-task">
            <input
              style={{
                backgroundColor: "#EDDACC",
              }}
              placeholder="Add new task..."
              name="description"
              value={newTask.description}
            />
          </Form.Field>
          <Button
            style={{
              borderRadius: "10",
              border: "5 white solid",
              backgroundColor: "#EDDACC",
            }}
            className="btn-add-task"
            type="submit"
            onClick={() => {
              dispatch(addTask(newTask));
              setNewTask({ description: "" });
            }}
          >
            {" "}
            <span> Add Task</span>
          </Button>
        </Form>
        <div className="tasks">
          {tasks
            .filter((task) =>
              showDone ? task.isdone : showUnDone ? !task.isdone : task
            )
            .map((task) => (
              <Task {...task} key={task.id} />
            ))}
        </div>
      </div>
      <Form>
        <Button
          style={{
            borderRadius: "10",
            border: "5 white solid",
            backgroundColor: "#EDDACC",
          }}
          onClick={() => {
            setshowDone(true);
            setshowUnDone(false);
          }}
        >
          Done Tasks
        </Button>
        <Button
          style={{
            borderRadius: "10",
            border: "5 white solid",
            backgroundColor: "#EDDACC",
          }}
          onClick={() => {
            setshowUnDone(true);
            setshowDone(false);
          }}
        >
          Undone Tasks
        </Button>
        <Button
          style={{
            borderRadius: "10",
            border: "5 white solid",
            backgroundColor: "#EDDACC",
          }}
          onClick={() => {
            setshowDone(false);
            setshowUnDone(false);
          }}
        >
          All
        </Button>
      </Form>
    </div>
  );
}

export default ListTask;
