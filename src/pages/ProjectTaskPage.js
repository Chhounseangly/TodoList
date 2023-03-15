import React from "react";
import MainBar from "../components/MainBar";
import TaskTeamProject from "../components/TaskTeamProject";
import "../style/Allpage.scss";

const ProjectTaskPage = () => {
  return (
    <div className="container-rightside">
      <MainBar />
      <TaskTeamProject />
    </div>
  );
};

export default ProjectTaskPage;
