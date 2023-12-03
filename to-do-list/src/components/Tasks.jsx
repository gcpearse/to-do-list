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

  return (
    <>
      <div id="to-do-list">
        <h3 id="list-header">My List</h3>
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
