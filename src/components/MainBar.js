import React, { useState } from "react";
import "../style/MainBar.scss";
import Searchicon from "../assets/icon/search-normal.svg";
import Notificaicon from "../assets/icon/notification.svg";
import Menu from "../assets/icon/menu.svg";
import Userimg from "../assets/img/1.png";
import NotificationModal from "./NotificationModal";
import UserModal from "./UserModal";

const MainBar = () => {
  const [showNotifi, setShowNotifi] = useState();
  const [showUserModal, setShowUserModal] = useState();

  const handlerNoti = () => {
    if (!showNotifi) {
      setShowNotifi(true);
    }else{
      setShowNotifi(false)
    }
  };
  const handlerUserProfile = () => {
    if (!showUserModal) {
      setShowUserModal(true);
    }else{
      setShowUserModal(false)
    }
  };

  // const modalRef = useRef();

  const showSideBar = () => {

  }
  return (
    <div className="conatiner-mainbar">
      <div className="container-search-noti">
        <button className="btn-sidebar" onClick={showSideBar}>
          <img src={Menu} alt="" />
        </button>
        <div className="container-serach-bar">
          <div className="search-bar">
            <button type="submit" className="btn-search">
              <img src={Searchicon} alt="" />
            </button>
            <input
              type="search"
              placeholder="Search somethings here"
              className="fill-search-bar"
            />
          </div>
        </div>
        <div className="noti-profile">
          <button className="noti-icon" onClick={handlerNoti}>
            <img src={Notificaicon} alt="" />
          </button>
          <NotificationModal showNotifi1={showNotifi} setShownotifi1={setShowNotifi}/>
          <button className="user-profile" onClick={handlerUserProfile}>
            <img src={Userimg} alt="" className="user-img" />
          </button>
          <UserModal showUserModal={showUserModal} setShowUserModal={setShowUserModal}/>
        </div>
      </div>
      <div className="line"></div>
      <div className="user-greeting">
        <span className="wel-user">Hello Lymeng</span>
        <span className="greeting">Hope you have a great day, Do it now!!</span>
      </div>
    </div>
  );
};

export default MainBar;
