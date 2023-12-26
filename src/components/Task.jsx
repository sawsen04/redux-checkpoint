import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import {
  addDone,
  removeDone,
  editTask,
  removeTask,
} from "../redux/actions/taskActions";
import "./style.css";
function Task({ description, id, isdone }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [editedTask, setEditedTask] = useState();

  const handleEdit = () => {
    setShow(!show);
  };

  const handleSave = () => {
    setShow(!show);
    dispatch(editTask({ id, editedTask }));
  };

  const handleRemove = () => {
    dispatch(removeTask(id));
  };
  return (
    <div>
      {show ? (
        <Form
          onChange={(e) => {
            setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
          }}
        >
          <Form.Field>
            <input placeholder="task..." name="description" />
          </Form.Field>
          <Button
            type="submit"
            onClick={() => {
              handleSave();
            }}
          >
            Save
          </Button>
          <Button
            type="submit"
            onClick={() => {
              setShow(false);
            }}
          >
            Cancel
          </Button>
        </Form>
      ) : (
        <div className="btns">
          
          <span style={{ textDecoration: isdone ? "line-through" : "none" }}>
            {isdone ? (
              <Button
                onClick={() => {
                  dispatch(removeDone(id));
                }}
                color="green"
                content="done"
                icon="smile"
              />
            ) : (
              <Button
                onClick={() => {
                  dispatch(addDone(id));
                }}
                color="yellow"
                content="undone"
                icon="frown"
              />
              
            )}
          {description}
            <Button
              color="grey"
              content="edit"
              icon="edit"
              onClick={() => {
                handleEdit();
              }}
            />
            <Button
              color="red"
              icon="trash alternate"
              onClick={() => {
                handleRemove();
              }}
            />
          </span>
        </div>
      )}
    </div>
  );
}

export default Task;
