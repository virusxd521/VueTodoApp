import { defineStore } from 'pinia'

export const useEditTitleOfTodo = defineStore('editTitleOfTodo', {
    state: () => {
        return {
            edditing : false,
            title: ""
        }
    }, 
    actions : {
        settingEdditing(){
            this.edditing = !this.edditing;
            console.log(this.edditing)
        },
        settingTitle(event){
            this.title = event;
        },
    }
})
