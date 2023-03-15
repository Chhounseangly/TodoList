import React from "react";
import "../style/AddNewTask.scss";

const AddNewTask = ({ showAddNewTodoModal, setShowAddNewTodoModal }) => {

  const closeAddNewTodo = () => {
    setShowAddNewTodoModal(false)
  }
};

export default AddNewTask;
