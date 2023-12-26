//import { tasks } from "../../tasks";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  tasks: [], //tasks,
};

const taskReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            description: action.payload.description,
            id: uuidv4(),
            isdone: false,
          },
        ],
      };
    case "ADD_DONE":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isdone: true } : task
        ),
      };
    case "REMOVE_DONE":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isdone: false} : task
        ),
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.editedTask.description }
            : task
        ),
      };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload && task),
      };
    default:
      return state;
  }
};

export default taskReducer;
