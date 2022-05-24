<script>
// @ is an alias to /src
import HeaderContainer from '@/layout/HeaderContainer.vue';
import TodoListContainer from '@/layout/TodoListContainer.vue';
import FooterContainer from '@/layout/FooterContainer.vue';
import SidebarContainer from '@/layout/SidebarContainer.vue';
import { useUserLoggedIn } from '@/stores/userLoggedIn';



export default {
      //   State
      setup(){
        const userLoggedIn = useUserLoggedIn();
        return {
          userLoggedIn
        }
      },

  name: 'TodoView',
  components: {
    HeaderContainer,
    FooterContainer,
    TodoListContainer,
    SidebarContainer
  },

  methods: {
    checkingStorage(){
      if (localStorage.length > 0){
        this.userLoggedIn.settingLoggedIn()
      } else {
        this.userLoggedIn.settingNotLoggedIn()
      }
    }, 

  },
  mounted(){
    this.checkingStorage();
  }
}
</script>

<template>
  <v-app>
    <v-container
    class="grid-container ma-0"
    fluid      
    >
      <v-row>
        <v-col cols="2">
          <SidebarContainer />
        </v-col>
        <v-col cols="10" >
          <v-row>
            <v-col cols="12" class="ma-0 pa-0 grey lighten-2" >
              <HeaderContainer />
            </v-col>
            <v-col cols="12" class="grey lighten-2">
              <TodoListContainer />  
              <FooterContainer />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>


<style lang="scss">
@import "@/styles/main.scss";
</style>

