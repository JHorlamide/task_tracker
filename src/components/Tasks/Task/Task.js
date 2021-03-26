import { FaTimes } from "react-icons/fa";

const Task = ({ task, deleteTask, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: icon.color, cursor: icon.cursor }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

const icon = {
  color: "red",
  cursor: "pointer",
};

export default Task;
