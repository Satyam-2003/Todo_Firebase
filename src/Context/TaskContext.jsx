import React, { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([]);

  const addTask = (name, priority, type) => {
    const newTask = {
      id: Date.now(),
      name,
      priority,
      type,
    };
    setTask((prev) => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTask((prev) => prev.filter((task) => task.id !== id));
  };

  const editTask = (id, updatedName, updatedPriority, type) => {
    setTask((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, name: updatedName, priority: updatedPriority, type }
          : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ task, addTask, deleteTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};
