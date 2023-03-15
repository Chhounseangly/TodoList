import React, { useRef } from "react";
import '../style/NotificationModal.scss'

const NotificationModal = ({ children, showNotifi1, setShownotifi1 }) => {

  const notifiRef = useRef();

  const closeNotifiModal = (e) => {
    if(e.target === notifiRef.current){
      setShownotifi1(false)
    }
  }

  return (
    showNotifi1 && (
      <div className="container-noti-modal" ref={notifiRef} onClick={closeNotifiModal}>
        <div className="notifi-bar">
          <p>Notification</p>
          <div className="line-notifi"></div>
          <div className="container-all-notifi">
            <p>Do ya task</p>
            <p>Do ya task</p>
            <p>Do ya task</p>
            <p>Do ya task</p>
          </div>
        </div>
      </div>
    )
  );
};

export default NotificationModal;
