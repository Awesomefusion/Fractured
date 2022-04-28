import { makeAutoObservable, observable } from 'mobx';
import { makeObservable } from 'mobx';
export default class SkillStore {

    constructor() {
        makeAutoObservable(this)
    }
}