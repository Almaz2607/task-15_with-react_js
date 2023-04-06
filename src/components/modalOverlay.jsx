import React from "react";
import "../styles/modalOverlay.css";

function ModalOverlay({ visible, setVisible, deleteSelectedTask }) {
  const rootClasses = ["modal-overlay", "modal-overlay_hidden"];

  if (visible) {
    rootClasses.pop();
  }

  const cancelClickHandler = () => {
    setVisible(false);
  };

  const deleteClickHandler = () => {
    deleteSelectedTask();
  };

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className="delete-modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="delete-modal__question">
          Вы действительно хотите удалить эту задачу?
        </h3>
        <div className="delete-modal__buttons">
          <button
            className="delete-modal__button delete-modal__cancel-button"
            onClick={cancelClickHandler}
          >
            Отмена
          </button>
          <button
            className="delete-modal__button delete-modal__confirm-button"
            onClick={deleteClickHandler}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalOverlay;
