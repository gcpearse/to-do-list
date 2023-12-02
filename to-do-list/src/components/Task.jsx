import { useState } from "react";

const Task = ({ task, setTaskList }) => {

  let [isClicked, setIsClicked] = useState(false);
  let buttonStyle = "unclicked-button";
  if (isClicked) buttonStyle = "clicked-button";

  const handleClick = () => {
    setIsClicked((bool) => {
      return !bool;
    });
  };

  const deleteEntry = () => {
    setTaskList((currentTasks) => {
      const tasks = [...currentTasks];
      return tasks.filter((item) => {
        return item.id !== task.id;
      });
    });
  };

  return <li>
    <p>{task.body}</p>
    <button id={buttonStyle} onClick={handleClick}>✔</button>
    <button id="delete-button" onClick={deleteEntry}>X</button>
  </li>;
};

export default Task;
