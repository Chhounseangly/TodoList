import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SideBar from "./components/SideBar";
import Error from "./components/Error";
import CompletedPage from "./pages/CompletedPage";
import MyTaskPage from "./pages/MyTaskPage";
import ProjectTaskPage from "./pages/ProjectTaskPage";
import Add from "./components/Add";
import Edit from "./components/Edit";

function App() {

  return (
    <div className="container">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/create" element={<Add />}></Route>
        <Route path="/" element={<SideBar />}>
          <Route index element={<MyTaskPage />} />
          <Route path="/completed" element={<CompletedPage />} />
          <Route path="/grouptask" element={<ProjectTaskPage />} />
          <Route path="*" element={<Error />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
