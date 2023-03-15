import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "../style/TeamProject.scss";
import More from "../assets/icon/more-verti.svg";

const group = [
  {
    name: "Project Practicum",
  },
  {
    name: "Young Boi",
  },
];

const TeamProject = () => {
  return group.map((projectitem) => {
    return <Groupitem item={projectitem}></Groupitem>;
  });
};

const Groupitem = (props) => {
  const [groupitem, setGroupitem] = useState("");
  const { name } = props.item;

  const aler = () => alert("Hello world");
  
  return (
    <div className="project-item">
      <Link to={"grouptask/"} className="project-link">
        <span>{name}</span>
        <button className="btn-more-vertical" onClick={aler}>
          <img src={More} className="more-vertical" />
        </button>
      </Link>
    </div>
  );
};

export default TeamProject;
