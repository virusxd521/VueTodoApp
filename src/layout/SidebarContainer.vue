<script>
import SidebarMain from '@/components/SidebarMain.vue';

export default{
    name: 'SidebarContainer',
    components: {
        'SidebarMain': SidebarMain
    }
}

</script>

<template>
    <v-row
    xl="12"
    class="row-sidebar"
    >
      <v-col    
        class="pa-0"
      >
        <SidebarMain />
      </v-col>      
    </v-row>
</template>