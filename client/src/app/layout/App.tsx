import { Container, Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../Pages/Home';
import SkillBuilder from '../Pages/SkillBuilder';


function App() {

  return (
    <div>
      <Navbar/>
      <Container maxWidth='xl'>
      <Grid container>
        <Grid item xs={0} md={1} lg={1}>
          </Grid>
          <Grid item xs={12} md={10} lg={10}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/skillbuilder" element={<SkillBuilder/>}/>
            </Routes>
          </Grid>
        <Grid item xs={0} md={1} lg={1}>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}
export default observer(App);
