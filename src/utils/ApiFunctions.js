import axios from 'axios';
import { useApiDataStore } from '@/stores/apiData';
import { useEditTitleOfTodo } from '@/stores/editTitleOfTodo';
import { bearer } from '@/utils/BearerToken.js';

// using the store
const apiStore = useApiDataStore();
const edditTodoStore = useEditTitleOfTodo();


const myHeaders = {
    "X-TenantID" : "danieltest",
    "Authorization" : bearer.token
}

export const fetchingTodoList = async () => {
    const response = await axios.get('https://prodapi.juno.one/todolist', {
        headers : myHeaders
    });
    console.log(response.data);
    apiStore.settingData(response.data);          
}

export const deleteTask = async item =>{
            const response = await axios.delete(`https://prodapi.juno.one/todolist/${item}`, {
            headers : myHeaders
        })
        console.log(response);
        fetchingTodoList(); 
}

export const createTask = async () =>{
        apiStore.settingTheInput(apiStore.newTask);
        const response = await axios.post('https://prodapi.juno.one/todolist',   
        {
            "text": apiStore.newTask,
            "completed": false
        },{
            headers : myHeaders
        })
        console.log(response);
        fetchingTodoList();
        apiStore.settingTheInput(null)
}

export const edditTask = async id => {
    const response = await axios.put(`https://prodapi.juno.one/todolist/${id}`,
    {
        "text" : edditTodoStore.title 
    },
    {
        headers : myHeaders
    })
    // fetchingTodoList();
    console.log(response);
    edditTodoStore.settingEdditing();
    fetchingTodoList();

}