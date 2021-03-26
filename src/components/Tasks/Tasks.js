import { Fragment } from "react";

/* Child Component */
import Task from "./Task/Task";

const Tasks = ({ tasks, deleteTask, onToggle }) => {
  return (
    <Fragment>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            onToggle={onToggle}
          />
        );
      })}
    </Fragment>
  );
};

export default Tasks;
