import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Image from 'material-ui-image'

function App() {
  const [skills, setActivites] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/skills').then(response => {
      setActivites(response.data);
    })
  }, [])


  return (
    <div>
      <ul>
        {skills.map((skill: any) =>(
          <li key={skill.Id}>
            {skill.title}
            <img src={skill.image}/>
          </li>
        ))}
      </ul>
      <CssBaseline/>
    </div>
  );
}

export default App;
