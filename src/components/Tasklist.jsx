import React, { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import TaskItem from "./Taskitem";

const TaskList = () => {
  const { task } = useContext(TaskContext);

  return (
    <div>
      {task.length > 0 ? (
        task.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <div className="no-task-message">
          <h2>🎉 No tasks added yet!</h2>
          <p>Start by adding your first task above ⬆️</p>
        </div>
      )}
    </div>
  );
};

export default TaskList;
