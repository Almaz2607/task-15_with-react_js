import React from "react";
import "../styles/tasksList.css";
import TaskItem from "./TaskItem";
import { addClass } from "../utils";

function TasksList({ tasks, title, setVisible, setTaskId, setError, dark }) {
  return (
    <div className="tasks-list">
      <h2 className={`tasks-title ${addClass(dark, "tasks-title_dark")}`}>
        {title}
      </h2>
      {tasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          setVisible={setVisible}
          setTaskId={setTaskId}
          setError={setError}
          dark={dark}
        />
      ))}
    </div>
  );
}

export default TasksList;
