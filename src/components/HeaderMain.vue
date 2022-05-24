<script>
import Logo from '@/assets/logo.svg';
import { useUserLoggedIn } from '@/stores/userLoggedIn';

export default {
        //   State
        setup(){
        const userLoggedIn = useUserLoggedIn();
        return {
          userLoggedIn
        }
      },


  name: 'HeaderMain',
  components: {
    'Logo' : Logo
  }
}

</script>
<template >
 <v-toolbar class="rounded-0  grey lighten-2" height="120" elevation="1">
   <Logo class="logo" />
   
   <p class="ml-auto" v-if="userLoggedIn.loggedIn">Hello User</p>
   <p v-else class="ml-auto">Anonymous</p>

 </v-toolbar>
</template>
