import { useState } from "react";

const Task = ({ task, setTaskList }) => {

  const [isClicked, setIsClicked] = useState(false);

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

  return (
    <li className="task">
      <p id="task-body">{task.body}</p>
      <div id="task-btns-wrapper">
        <button
          className={!isClicked ? (
            "add-button"
          ) : (
            "add-button clicked-button"
          )}
          onClick={handleClick}>
          ✔
        </button>
        <button
          className="delete-button"
          onClick={deleteTask}>
          X
        </button>
      </div>
    </li>
  );
};

export default Task;
