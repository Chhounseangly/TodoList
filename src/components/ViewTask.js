import React, { useRef } from 'react'
import "../style/ViewTask.scss"

const ViewTask = ({viewTask, closeView, setViewTask}) => {

  const modalRef = useRef();

  const closeModal = (event) => {
    if(modalRef.current === event.target){
      setViewTask(false)
    }
  }

  const closeViewModal = () => {
    closeView(false)
  }

  return (
    viewTask && (
    <div className='container-view-task-modal' ref={modalRef} onClick={closeModal}>
      <div className="view-task-container">
        <div className='view-task'>
          hello
        </div>
        <button onClick={closeViewModal}>Close</button>
      </div>
    </div>
    )
  )
}

export default ViewTask
