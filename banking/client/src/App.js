import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import {Navigation} from "@mui/icons-material";
function App() {
  return (
      <>

        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Registration/>} />
          </Routes>

        </div></>






  );
}

export default App;
