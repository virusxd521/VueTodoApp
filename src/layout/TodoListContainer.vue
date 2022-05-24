<script>
import TodoList from  '@/components/TodoList.vue';
export default {
    name : 'TodoListContainer',
    components : {
        'TodoList' : TodoList
    }
}

</script>
<template>
    <v-row
    class="row-todo mx-auto"
    >
      <v-col    
        class="pa-0 ma-0"
      >
      <TodoList />
      </v-col>      
    </v-row>
</template>