<script>
import FormMain from  '@/components/FormMain.vue';

export default {
    name : 'FormContainer',
    components : {
        'FormMain' : FormMain
    }
}

</script>
<template>
    <v-row
    class="form-todo mx-auto"
    >
      <v-col    
        class="pa-0 ma-0"
      >
      <FormMain />
      </v-col>      
    </v-row>
</template>