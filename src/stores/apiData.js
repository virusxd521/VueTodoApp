import { defineStore } from 'pinia'

export const useApiDataStore = defineStore('apiData', {
  state: () => {
    return { 
        // authorazionToken: '',
        response : [],
        name: "Tasks",
        newTask: null
    }
  },
  actions: {
    settingData(response) {
    //   this.authorazionToken = authToken;
      this.response = response;
    },
    settingTheInput(taskName){
        this.newTask = taskName;
    },
  },
})
