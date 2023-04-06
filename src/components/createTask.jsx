import React, { useState } from "react";
import "../styles/createTask.css";
import { addClass } from "../utils";

function CreateTask({ create, tasks, error, setError, dark }) {
  const [text, setText] = useState("");

  const handleAddNewTask = (event) => {
    event.preventDefault();

    const newTask = {
      id: Date.now().toString(),
      text,
    };

    const inputValue = newTask.text.trim();
    const isExistingTaskName = tasks.some((task) => task.text === inputValue);

    if (!inputValue) {
      setError("Название задачи не должно быть пустым");
      setText("");
      return;
    } else if (isExistingTaskName) {
      setError("Задача с таким названием уже существует");
      setText("");
      return;
    }

    if (error) setError("");

    create(newTask);
    setText("");
  };

  return (
    <form className="create-task-block">
      <input
        name="taskName"
        className="create-task-block__input default-text-input"
        type="text"
        placeholder="Создайте новую задачу"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        type="submit"
        className={`create-task-block__button ${addClass(
          dark,
          "create-task-block__button_dark"
        )}`}
        onClick={handleAddNewTask}
      >
        Создать
      </button>
      <span className="error-message-block">{error}</span>
    </form>
  );
}

export default CreateTask;
