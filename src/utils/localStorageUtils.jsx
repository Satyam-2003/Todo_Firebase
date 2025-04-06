export const saveTasks = (email, tasks) => {
  localStorage.setItem(`tasks_${email}`, JSON.stringify(tasks));
};

export const getTasks = (email) => {
  const data = localStorage.getItem(`tasks_${email}`);
  return data ? JSON.parse(data) : [];
};
