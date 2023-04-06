import React from "react";
import "../styles/taskItem.css";
import { addClass } from "../utils";

function TaskItem({ task, setVisible, setTaskId, setError, dark }) {
  const handleDeleteTask = (e) => {
    setError("");
    const idTargetTask = e.target.dataset.deleteTaskId;
    setTaskId(idTargetTask);
    setVisible(true);
  };

  return (
    <div className="task-item" data-task-id={task.id}>
      <div className="task-item__main-container">
        <div className="task-item__main-content">
          <form className="checkbox-form">
            <input
              className="checkbox-form__checkbox"
              type="checkbox"
              id={task.id}
            />
            <label htmlFor={task.id}></label>
          </form>
          <span
            className={`task-item__text ${addClass(
              dark,
              "task-item__text_dark"
            )}`}
          >
            {task.text}
          </span>
        </div>
        <button
          className={`task-item__delete-button ${addClass(
            dark,
            "task-item__delete-button_dark"
          )} default-button delete-button`}
          data-delete-task-id={task.id}
          onClick={handleDeleteTask}
        >
          Удалить
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
