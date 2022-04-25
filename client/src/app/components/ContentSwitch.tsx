import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function ContentSwitch() {

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
    </div>
    )
}