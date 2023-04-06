import { useState } from "react";
import CreateTask from "./components/createTask";
import ModalOverlay from "./components/modalOverlay";
import TasksList from "./components/tasksList";
import "./styles/App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1138465078061",
      completed: false,
      text: "Посмотреть новый урок по JavaScript",
    },
    {
      id: "1138465078062",
      completed: false,
      text: "Выполнить тест после урока",
    },
    {
      id: "1138465078063",
      completed: false,
      text: "Выполнить ДЗ после урока",
    },
  ]);

  const [modal, setModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [taskId, setTaskId] = useState(null);
  const [dark, setDark] = useState(false);

  const body = document.body.style;

  if (dark) {
    body.backgroundColor = "#24292F";
  } else {
    body.backgroundColor = "initial";
  }

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTaskWithId = () => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setModal(false);
  };

  window.addEventListener("keydown", (event) => {
    const { code } = event;
    if (code === "Tab") {
      event.preventDefault();
      setDark(!dark);
    }
  });

  return (
    <div id="tasks">
      <div className="tasks__wrapper">
        <CreateTask
          create={createTask}
          tasks={tasks}
          error={errorMessage}
          setError={setErrorMessage}
          dark={dark}
        />
        <TasksList
          tasks={tasks}
          title={"Список задач"}
          setVisible={setModal}
          setTaskId={setTaskId}
          setError={setErrorMessage}
          dark={dark}
        />
        <ModalOverlay
          visible={modal}
          setVisible={setModal}
          deleteSelectedTask={deleteTaskWithId}
        />
      </div>
    </div>
  );
}

export default App;
