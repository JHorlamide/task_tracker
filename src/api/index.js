import axios from "axios";

const url = "http://localhost:8000/tasks";

export const fetchTask = () => {
  return axios.get(url);
};

export const getSingleTask = (id) => {
  return axios.get(`${url}/${id}`);
};

export const createTask =  (task, config) => {
  return axios.post(url, task, config);
}

export const updateTask = (id, newTask) => {
  return axios.patch(`${url}/${id}`, newTask);
}

export const deleteTask = (id) => {
  return axios.delete(`${url}/${id}`);
};
