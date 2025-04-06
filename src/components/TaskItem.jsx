import React, { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";

const TaskItem = ({ task }) => {
  const { deleteTask, editTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const [newPriority, setNewPriority] = useState(task.priority);
  const [newType, setNewType] = useState(task.type);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, newName, newPriority, newType);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <>
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
          <select
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value)}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <select
            value={newType}
            onChange={(e) => setNewType(e.target.value)} // ✅ Step 2
          >
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
          </select>
        </>
      ) : (
        <>
          <div className="task-name">{task.name}</div>
          <span className="priority-badge">{task.priority}</span>
          <span className="task-type">({task.type})</span>
        </>
      )}
      <button className="edit" onClick={handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button className="delete" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
