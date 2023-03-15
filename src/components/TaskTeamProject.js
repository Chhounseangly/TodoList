import React, { useState } from "react";
// import styled from "styled-components";
import "../style/TaskTeamProject.scss";
import CompletedTeam from "./CompletedTeam";
import TodoListTeam from "./TodoListTeam";

// const Tab = styled.button`
//   // padding: 10px 30px;
//   // cursor: pointer;
//   // opacity: 0.6;
//   // background: white;
//   // border: 0;
//   // outline: 0;
//   // border-bottom: 2px solid transparent;
//   // transition: ease border-bottom 250ms;
//   ${({ active }) =>
//     active &&
//     `
//     border-bottom: 2px solid black;
//     opacity: 1;
//   `}
// `

const TaskTeamProject = () => {
  const [showTodoList, setShowTodoList] = useState(true);
  const [showCompletedTeam, setShowCompletedTeam] = useState();
  // const [active, setActive] = useState();

  const handlerShowTodo = () => {
    setShowTodoList(true);
    setShowCompletedTeam(false);
  };

  const handlerShowCompletedTeam = () => {
    setShowCompletedTeam(true);
    setShowTodoList(false);
  };

  return (
    <div className="gr-task-container">
      <div className="task-container">
        <div className="container-header-gr-todo">
          <header className="header-group-task">
            <button className="btn-task-header" onClick={handlerShowTodo}>
              ToDo List
            </button>
            <button
              className="btn-task-header"
              onClick={handlerShowCompletedTeam}
            >
              Completed
            </button>
          </header>
          <button className="btn-add-newTodo">+ New Todo</button>
        </div>
        <div className="line-task"></div>
        <div className="container-all-group-task">
          <header className="container-header-gr-task">
            <table className="header-gr-task">
              <tr>
                <td className="header-grouptask-name">Name</td>
                <td className="header-grouptask-other">Assignee</td>
                <td className="header-grouptask-other">Due Date</td>
                <td className="header-grouptask-other">Priority</td>
                <td className="header-grouptask-other">Status</td>
              </tr>
            </table>
          </header>
          <TodoListTeam showTodoListTeam={showTodoList} />
          <CompletedTeam showCompleteTeam={showCompletedTeam} />
        </div>
      </div>

      <div className="gr-member-container">
        <div className="team-project-name">
          <span>Project Practicum</span>
        </div>
        <div className="conatiner-members">
          <div className="user-project-member">
            <img src="" alt="" />
            <span>Lymeng</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskTeamProject;
