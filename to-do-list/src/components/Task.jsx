import { useState } from "react";

const Task = ({ task, setTaskList }) => {

  let [isClicked, setIsClicked] = useState(false);
  let buttonStyle = "";
  if (isClicked) buttonStyle = "clicked-button";

  const handleClick = () => {
    setIsClicked((bool) => {
      return !bool;
    });
  };

  const deleteTask = () => {
    setTaskList((currentTasks) => {
      const tasks = [...currentTasks];
      return tasks.filter((item) => {
        return item.id !== task.id;
      });
    });
  };

  return <li className="task">
    <p id="task-body">{task.body}</p>
    <button className="add-button" id={buttonStyle} onClick={handleClick}>✔</button>
    <button className="delete-button" onClick={deleteTask}>X</button>
  </li>;
};

export default Task;
