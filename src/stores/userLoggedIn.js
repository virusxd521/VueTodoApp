import { defineStore } from 'pinia'

export const useUserLoggedIn = defineStore('userLoggedIn', {
    state: () => {
        return {
            loggedIn : false
        }
    }, 
    actions :{
        settingLoggedIn(){
            this.loggedIn = true;
        },
        
        settingNotLoggedIn(){
            this.loggedIn = false;
        }

    }
})