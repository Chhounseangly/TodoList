import React, { useRef } from "react";
import UserEdit from "../assets/icon/user-edit.svg"
import Setting from "../assets/icon/setting.svg"
import Logout from "../assets/icon/logout.svg"
import "../style/UserModal.scss"
import { useNavigate } from "react-router-dom";

const UserModal = ({showUserModal, setShowUserModal}) => {
  const navigator = useNavigate();
  const userModalRef = useRef();

  const closeUserModal = (e) => {
    if(userModalRef.current === e.target){
      setShowUserModal(false)
    }
  }

  return (
    showUserModal && (
      <div className="container-user-modal" ref={userModalRef} onClick={closeUserModal}>
        <div className="user-modal">
          <div>
            <button className="btn-user">
                <img src={UserEdit} alt="" />
                <span>My Profile</span>
            </button>
          </div>
          <div className="line-user-modal"></div>
          <div>
            <button className="btn-user">
              <img src={Setting} alt="" />
              <span>My Setting</span>
            </button>
          </div>
          <div className="line-user-modal"></div>
          <div>
            <button className="btn-user" onClick={() => navigator("/signin")}>
              <img src={Logout} alt=""/>
              <span>Log out</span>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default UserModal;
