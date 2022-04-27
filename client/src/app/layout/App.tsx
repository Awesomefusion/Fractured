import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../Pages/Home';
import SkillBuilder from '../Pages/SkillBuilder';


function App() {

  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/skillbuilder" element={<SkillBuilder/>}/>
        </Routes>
    </div>
  );
}
export default App;
