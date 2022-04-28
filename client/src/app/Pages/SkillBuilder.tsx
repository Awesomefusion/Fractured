import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import SkillContainer from '../components/SkillContainer';
import { Skill } from '../models/skill';
import { useStore } from '../stores/store';

function SkillBuilder() {

    const {skillStore} = useStore(); 
    const chosenSkills = Array.apply(null, Array(8));
    const [skillList, setSkills] = useState<Skill[]>([]);

    return (
        <div>  
            <Grid container alignItems="center" justifyContent="center">
                {chosenSkills.map(( )=> (
                    <SkillContainer></SkillContainer>
                ))}
            </Grid>
        </div>
    );
}

export default observer(SkillBuilder);