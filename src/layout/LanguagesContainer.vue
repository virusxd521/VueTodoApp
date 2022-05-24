<script>
import LanguagesContent from '@/components/LanguagesContent.vue';

export default {
  name : 'LanguagesContainer',
  components: {
    'LanguagesContent' : LanguagesContent
  }   
}

</script>
<template>
    <v-row      
    class="row-language mx-auto"
    >
      <v-col class="pa-0 ma-0">
        <LanguagesContent />
      </v-col>
    </v-row>
</template>

