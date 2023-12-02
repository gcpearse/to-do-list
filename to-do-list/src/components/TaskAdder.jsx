import { useState } from "react";

const TaskAdder = ({ setTaskList }) => {

  const [input, setInput] = useState("");
  let [errorStyle, setErrorStyle] = useState("hidden-error");

  const updateInput = (event) => {
    setInput(event.target.value);
  };

  const validateInput = () => {
    return input.length > 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTaskList((currentTasks) => {
      if (validateInput()) {
        if (errorStyle !== "hidden-error") {
          setErrorStyle(() => {
            return errorStyle = "hidden-error";
          });
        }
        return [...currentTasks, {
          id: currentTasks.length + 1,
          body: input
        }];
      } else {
        if (errorStyle !== "displayed-error") {
          setErrorStyle(() => {
            return errorStyle = "displayed-error";
          });
        }
        return [...currentTasks];
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-input">
          Add task?
          <input
            type="text"
            placeholder="Enter a task..."
            id="task-input"
            onChange={updateInput} />
        </label>
        <button>Add task!</button>
      </form>
      <p id={errorStyle}>Field cannot be empty!</p>
    </div>
  );
};

export default TaskAdder;
