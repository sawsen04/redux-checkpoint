export const addTask = (task) => {
  return {
    type: "ADD_TASK",
    payload: task,
  };
};

export const addDone = (payload) => {
  return {
    type: "ADD_DONE",
    payload,
  };
};

export const removeDone = (payload) => {
  return {
    type: "REMOVE_DONE",
    payload,
  };
};

export const editTask = (payload) => {
  return {
    type: "EDIT_TASK",
    payload,
  };
};

export const removeTask = (payload) => {
  return {
    type: "REMOVE_TASK",
    payload,
  };
};
