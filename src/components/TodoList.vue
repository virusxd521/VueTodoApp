<script>
import { useApiDataStore } from '@/stores/apiData';
import { useEditTitleOfTodo } from '@/stores/editTitleOfTodo';
import {deleteTask, createTask, fetchingTodoList, edditTask} from '@/utils/ApiFunctions.js';


export default {
    
    //   State
    setup(){
        const apiStore = useApiDataStore();
        const editTitleOfTodo = useEditTitleOfTodo()
        return {
            apiStore,
            editTitleOfTodo
        }
    },

    computed: {
      completedTasks(){
        return this.apiStore.response.filter(item => item.completed).length
        
      },
      progress(){
        return this.completedTasks / this.apiStore.response.length * 100
        
      },
      remainingTasks(){
        // return this.tasks.length - this.completedTasks
        return ""
      },
    },
    // Actions
    methods: {
      // displaying the list of the
      fetchingTodoList : fetchingTodoList,
      deleteTask: deleteTask,
      createTask: createTask,
      edditTask: edditTask

    },
    mounted(){
        fetchingTodoList();
    },
  }
</script>

<!-- View -->
<template>
  <v-container class="todo-list mt-16 rounded-lg mb-16 deep-purple lighten-3"
  elevation="0"
  >
    <v-text-field
      v-model="apiStore.newTask"
      label="What are you working on?"
      solo
      @keydown.enter="createTask"
    >
      <template v-slot:append>
        <v-fade-transition >
          <v-icon
            v-if="apiStore.newTask"
            @click="createTask"
          >
            mdi-plus-circle
          </v-icon>
        </v-fade-transition>
      </template>
    </v-text-field>

    <h2 class="text-h4 white--text pl-4">
      {{apiStore.name}}:&nbsp;
      <v-fade-transition leave-absolute>
        <span :key="`tasks-${apiStore.response.length}`">
          {{ apiStore.response.length }}
        </span>
      </v-fade-transition>
    </h2>

    <v-divider class="mt-4"></v-divider>

    <v-row
      class="my-1"
      align="center"
      
    >
      <strong class="mx-4 white--text text--darken-2">
        Remaining: {{ remainingTasks }}
      </strong>

      <v-divider vertical></v-divider>

      <strong class="mx-4 white--text text--darken-2">
        Completed: {{ completedTasks }}
      </strong>

      <v-spacer></v-spacer>

      <v-progress-circular
        :value="progress"
        class="mr-2"
      ></v-progress-circular>
    </v-row>

    <v-divider class="mb-4"></v-divider>

    <v-card v-if="apiStore.response.length > 0">
      <v-slide-y-transition
        class="py-0"
        group
        tag="v-list"
      >
        <template v-for="(task, i) in apiStore.response">
          <v-divider
            v-if="i !== 0"
            :key="`${i}-divider`"
          ></v-divider>

          <v-list-item :key="`${i}-${task.text}`">
            <v-list-item-action>
              <v-checkbox
                v-model="task.completed"
                :color="task.completed && 'grey' || 'primary'"
              >
              </v-checkbox>   
            </v-list-item-action>
            <div class="pt-2 pb-2">
                <div
                    :class="task.completed && 'grey--text' || 'black--text'"
                    class="ml-4 d-block"
                    v-text="`ID: ${task.id}`"
                ></div>
                <div
                    :class="task.completed && 'grey--text' || 'black--text'"
                    class="ml-4 d-block"
                    v-text="`Title: ${task.text}`"
                >
                </div>
                <div class="d-flex" v-if="editTitleOfTodo.edditing">
                    <v-text-field
                        class="pl-4 pt-2"
                        dense
                        @change="editTitleOfTodo.settingTitle($event)"
                    ></v-text-field>
                    <v-icon
                    @click="edditTask(task.id)"
                    class="ml-8 pa-4 ma-0 indigo lighten-5 rounded-lg"
                    >
                        mdi-check
                    </v-icon>
                </div>
            </div>

            <v-spacer></v-spacer>

            <v-icon
            @click="editTitleOfTodo.settingEdditing"
            class="mr-2"
            >
                mdi-pencil
              </v-icon>
              <v-icon
              @click="deleteTask(apiStore.response[i].id)"
              >
                mdi-cancel
              </v-icon>

            <v-scroll-x-transition>
              <v-icon
                v-if="task.completed"
                color="success"
              >
                mdi-check
              </v-icon>
            </v-scroll-x-transition>
          </v-list-item>
        </template>
      </v-slide-y-transition>
    </v-card>
  </v-container>
</template>