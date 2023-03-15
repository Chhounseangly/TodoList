import React, { useState } from "react";
import "../style/Completed.scss";
import { completedtodo } from "../Data/completedtodos";

const Completed = () => {
  return (
    <div className="main-completed">
      <header className="completed-bar">
        <span>Completed ToDos</span>
      </header>
      <div className="line-completed"></div>
      <header className="container-header-mytask">
        <table className="header-list-mytask">
          <tr>
            <td className="header-mytask-title">Name</td>
            <td className="header-mytask-other">Due Date</td>
            <td className="header-mytask-other">Priority</td>
            <td className="header-mytask-other">Status</td>
          </tr>
        </table>
      </header>
      <div className="mytask-container">
        <div>
          {completedtodo.map((indiviTask) => {
            return <IndividualTask mytask={indiviTask} />;
          })}
        </div>
      </div>
    </div>
  );
};

const IndividualTask = (props) => {
  const [viewTask, setViewTask] = useState();
  const { title, dueDate } = props.mytask;

  const handlerViewTask = () => {
    setViewTask(true);
  };

  return (
    <div className="container-listTodo-mytask">
      <table className="listTodo-mytask">
        <tr>
          <td className="header-mytask-title">
            <button className="btn-taskTodo" onClick={handlerViewTask}>
              {title}
            </button>
            {/* <ViewTask viewTask={viewTask} closeView={setViewTask} /> */}
          </td>
          <td className="header-mytask-other">{dueDate}</td>
          <td className="header-mytask-other">Medium</td>
          <td className="header-mytask-other">
            <select className="select-option-mytask">
              <option>To do</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Completed;
