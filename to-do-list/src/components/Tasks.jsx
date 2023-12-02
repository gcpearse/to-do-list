import { useState } from "react";
import Task from "./Task";
import TaskAdder from "./TaskAdder";

const Tasks = () => {

  const [taskList, setTaskList] = useState([
    {
      id: 1,
      body: "Example task 1"
    },
    {
      id: 2,
      body: "Example 2"
    },
    {
      id: 3,
      body: "Example task 3"
    }
  ]);

  return (
    <>
      <div id="to-do-list">
        <h3>My List</h3>
        <ol id='task-list'>
          {taskList.map((task) => {
            return <Task key={task.id} task={task} setTaskList={setTaskList} />;
          })}
        </ol>
      </div>
      <TaskAdder setTaskList={setTaskList} />
    </>
  );
};

export default Tasks;
