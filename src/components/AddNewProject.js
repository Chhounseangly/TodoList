import React, { useRef, useState } from "react";
import { todoproject } from "../Data/todoproject";
import "../style/AddNewProject.scss";

const AddNewProject = ({trigger, setTrigger}) => {
  const [projectName, setprojectName] = useState();
  const modalRef = useRef();

  const handlerChange = (e) => {
    setprojectName(e)
  };

  // const closeModal = (e) => {
  //   if(modalRef.current === e.target){
  //     props.sho
  //   }
  // }
  const closeModalAddProject = (e) =>{
    if(modalRef.current === e.target){
      setTrigger(false)
    }
  }

  const handlerAddNew = () => alert('Hello Kon Papa');

  return trigger ? (
    <div className="modal-create-gr" ref={modalRef} onClick={closeModalAddProject}>
      <div className="modal-container">
        <div className="main-modal">
          <h2>New Project</h2>
          <form action="">
            <label htmlFor="">Project Name</label>
            <input
              type="text"
              name="projectname"
              id=""
              value={projectName}
              onChange={handlerChange}
            />
          </form>
          <div className="btn-container-modal">
            <button onClick={() => setTrigger(false)}>Cancel</button>
            <button type="submit" onClick={handlerAddNew}>
              Add Project
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default AddNewProject;
