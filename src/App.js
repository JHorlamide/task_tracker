import { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

/* Custom Component */
import {
  fetchTask,
  deletetask,
  createTask,
  getSingleTask,
  updateTask,
} from "./actions/posts";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import AddTask from "./components/AddTask/AddTask";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About_app";

function App() {
  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  /* Fetch All Tasks */
  useEffect(() => {
    const getTasks = async () => {
      const allTasks = await fetchTask();

      setTasks(allTasks);
    };

    getTasks();
  }, []);

  /* Create Task */
  const addTask = async (newTask) => {
    const { data } = await createTask(newTask);

    return setTasks([...tasks, data]);
  };

  /* Delete Task */
  const deleteTask = async (id) => {
    deletetask(id);

    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  /* update Task */
  const onToggle = async (id) => {
    const { data: taskToToggle } = await getSingleTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const { data: value } = await updateTask(id, updatedTask);

    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: value.reminder } : task;
      })
    );
  };

  const toggleTask = () => {
    setShowTask(!showTask);
  };

  return (
    <Router>
      <div className="container">
        <Header
          title="Task Tracker"
          toggleTask={toggleTask}
          showAdd={showTask}
        />
        <Route
          exact
          path="/"
          render={() => {
            return (
              <Fragment>
                {showTask && <AddTask addTask={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    deleteTask={deleteTask}
                    onToggle={onToggle}
                    addTask={addTask}
                  />
                ) : (
                  <div>You do not have any task </div>
                )}
              </Fragment>
            );
          }}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
