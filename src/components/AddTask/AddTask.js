import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [createTask, setCreateTask] = useState({
    text: "",
    day: "",
    reminder: false,
  });

  const { text, day, reminder } = createTask;

  const handleChange = (e) => {
    return setCreateTask({
      ...createTask,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '' || day === '' || reminder === '') {
      alert('Please complete task details');
      return;
    } else {
      addTask(createTask);
    }

    setCreateTask({
      text: '',
      day: '',
      reminder: '',
    });
  };

  const handleReminder = (e) => {
    return setCreateTask({
      ...createTask,
      [e.target.name]: e.currentTarget.checked,
    });
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      {/* Task */}
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          name="text"
          value={text}
          onChange={handleChange}
        />
      </div>

      {/* Day & Time */}
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          name="day"
          value={day}
          onChange={handleChange}
        />
      </div>

      {/* Reminder */}
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          name="reminder"
          value={reminder}
          onChange={handleReminder}
        />
      </div>

      <input type="submit" value="Save task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
