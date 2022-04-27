import { Grid } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../Pages/Home';
import SkillBuilder from '../Pages/SkillBuilder';


function App() {

  return (
    <div>
      <Navbar/>
      <Grid container>
        <Grid item xs={0} md={1} lg={2}>
          </Grid>
          <Grid item xs={12} md={10} lg={8}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/skillbuilder" element={<SkillBuilder/>}/>
            </Routes>
          </Grid>
        <Grid item xs={0} md={1} lg={2}>
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
