import { useState } from "react";
import Task from "./Task";
import TaskAdder from "./TaskAdder";

const Tasks = () => {

  const [taskList, setTaskList] = useState([
    {
      id: 1,
      body: "Create my list..."
    }
  ]);

  const handleClick = () => {
    setTaskList([]);
  };

  return (
    <>
      <div>
        <h3>My List</h3>
        <ol>
          {taskList.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                setTaskList={setTaskList} />
            );
          })}
        </ol>
      </div>
      <button
        id="delete-list-button"
        onClick={handleClick}>
        Delete list
      </button>
      <TaskAdder setTaskList={setTaskList} />
    </>
  );
};

export default Tasks;
