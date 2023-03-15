import React, { useState } from "react";
import "../style/MyToDo.scss";
import Profile from "../assets/img/1.png";
import ViewTask from "./ViewTask";
import { mytodo } from "../Data/mytodo";
import AddNewTask from "./AddNewTask";
import Home from "./Home";

const MyToDo = () => {
  const [showAddNewTodo, setShowAddNewTodo] = useState();

  const handleShowAddNewTodo = () => {
    setShowAddNewTodo(true);
  };
  return (
    <div className="mytask-info">
      <div className="container-mytask-header">
        <header className="mytask-header">
          <img src={Profile} alt="" className="mytask-user" />
          <span>My ToDo List</span>
        </header>
      </div>
      <div><Home/></div>
    </div>
  );
};

export default MyToDo;
