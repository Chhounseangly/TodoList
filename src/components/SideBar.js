import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/img/Logo.png";
import "../style/SideBar.scss";
import Taskicon from "../assets/icon/task-square.svg";
import Completesicon from "../assets/icon/tick-square.svg";
import Add from "../assets/icon/add.svg";
import AddNewProject from "./AddNewProject";
import TeamProject from "./TeamProject";

const SideBar = ({showSideBar}) => {
  const [addNewProject, setAddNewProject] = useState(false);

  return (
    <>
      <nav className="navbar-menu">
        <div>
          <Link to="/" className="logo-doitnow" title="DO IT NOW">
            <img src={Logo} alt="" width="78px" className="img-logo" />
            <h2>DO IT NOW</h2>
          </Link>
        </div>
        <div className="nav-menu-item">
          <ul>
            <li>
              <NavLink
                to="/"
                title="My task"
                style={({ isActive }) =>
                  isActive
                    ? {
                        backgroundColor: "#12d4af",
                      }
                    : {
                        backgroundColor: "",
                      }
                }
              >
                <img src={Taskicon} alt="" className="bar-icon" />
                {/* <icon>
                  <FontAwesomeIcon icon={faHouse}/>
                </icon> */}
                <span className="item-name">My ToDos</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/completed"
                title="Completed"
                style={({ isActive }) =>
                  isActive
                    ? {
                        backgroundColor: "#12d4af",
                      }
                    : {
                        backgroundColor: "",
                      }
                }
              >
                <img src={Completesicon} alt="" className="bar-icon" />
                <span className="item-name">Completed</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="group-bar">
          <h3>Projects</h3>
          <div className="container-gr-item">
            <TeamProject />
          </div>
        </div>
        <button className="new-group" onClick={() => setAddNewProject(true)}>
          <img src={Add} alt="" />
        </button>
        <AddNewProject trigger={addNewProject} setTrigger={setAddNewProject} />
      </nav>
      <Outlet />
    </>
  );
};

export default SideBar;
