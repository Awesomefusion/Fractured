import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
