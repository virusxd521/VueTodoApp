<script>
  export default {
    name: 'SidebarMain',
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-account', link: '/' },
          { title: 'Todo', icon: 'mdi-gavel', link: '/todo' },
          { title: 'Language Switch', icon: 'mdi-pencil', link: '/languages' },
        ],
         permanent: true

      }
    }
  }
</script>

<template>
  <v-card
    class="mx-auto "
    height="100vh"
    elevation="0"
    dark
  >
    <v-navigation-drawer
      class="overflow-hidden rounded-0 grey darken-3"
      width="100%"
      height="100%"
      :permanent="permanent"

    >
    <v-list>    
            <v-list-item
              v-for="item in items"
              :key="item.title"

            >
            
              <v-list-item-icon>
                <v-icon>{{ item.icon }}
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>
                <router-link class="white--text" :to="item.link">{{ item.title }}</router-link>
                </v-list-item-title>
              </v-list-item-content>
              
            </v-list-item>
            
        
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

