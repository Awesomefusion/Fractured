import { makeAutoObservable, observable } from 'mobx';
import { makeObservable } from 'mobx';
import { Skill } from '../models/skill';
export default class SkillStore {

    skills: Skill[] = [];
    loading = false;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this)
    }

    loadSkills = async () => {
        this.loadingInitial = true;
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
}