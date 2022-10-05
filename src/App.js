import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Routes, Route, Link} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Illustrated from "./components/Illustrated";
import Users from "./components/Users";

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Background/>}/>
          <Route path="/illustrated-book" element={<Illustrated/>} />
          <Route path="/favorites" element={<div>즐겨찾기</div>}/>
        </Routes>
        
      </>
  );
}

export default App;
