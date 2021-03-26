import * as api from "../api/index";

export const fetchTask = async () => {
  try {
    const { data } = await api.fetchTask();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const createTask = async (task) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const data = await api.createTask(task, config);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getSingleTask = async (id) => {
  try {
    const data = await api.getSingleTask(id);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const updateTask = async (id, task) => {
  try {
    const data = await api.updateTask(id, task);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const deletetask = async (id) => {
  try {
    return await api.deleteTask(id);
  } catch (error) {
    console.error(error.message);
  }
};
