import React, { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("medium");
  const [taskType, setTaskType] = useState("indoor");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !priority || !taskType) return;

    // Send all the values to context
    addTask(name, priority, taskType);

    // Clear fields after submission
    setName("");
    setPriority("medium");
    setTaskType("indoor");
  };

  return (
    <form className="task-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <div className="radio-group">
        <input
          type="radio"
          id="indoor"
          name="taskType"
          value="indoor"
          checked={taskType === "indoor"}
          onChange={(e) => setTaskType(e.target.value)}
        />
        <label htmlFor="indoor">Indoor</label>

        <input
          type="radio"
          id="outdoor"
          name="taskType"
          value="outdoor"
          checked={taskType === "outdoor"}
          onChange={(e) => setTaskType(e.target.value)}
        />
        <label htmlFor="outdoor">Outdoor</label>
      </div>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
