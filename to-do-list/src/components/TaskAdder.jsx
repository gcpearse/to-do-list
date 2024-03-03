import { useState } from "react";

const TaskAdder = ({ setTaskList }) => {

  let [taskId, setTaskId] = useState(1);
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

    if (validateInput()) {
      setTaskList((currentTasks) => {
        if (errorStyle !== "hidden-error") {
          setErrorStyle(() => {
            return errorStyle = "hidden-error";
          });
        }
        setTaskId((value) => {
          return value + 1;
        });
        return [...currentTasks, {
          id: taskId + 1,
          body: input
        }];
      });
    } else {
      if (errorStyle !== "displayed-error") {
        setErrorStyle(() => {
          return errorStyle = "displayed-error";
        });
      }
    }
    setInput("");
  };

  return (
    <div>
      <form
        id="task-input-form"
        onSubmit={handleSubmit}>
        <label htmlFor="task-input">
          Add a task?
        </label>
        <input
          type="text"
          placeholder="Enter a task..."
          id="task-input"
          value={input}
          onChange={updateInput} />
        <button id="task-input-button">Add!</button>
        <p id={errorStyle}>Oops! That isn't right...</p>
      </form>
    </div>
  );
};

export default TaskAdder;
