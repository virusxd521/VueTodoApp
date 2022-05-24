<script>
import HeaderMain from '@/components/HeaderMain.vue'

export default {
  name : 'HeaderContainer',
  components: {
    'HeaderMain' : HeaderMain
  }   
}

</script>

<template>
    <v-row      
    class="row-header"
    no-gutters

    >
      <v-col class="pa-0 ma-0 column-header"  no-gutters>
        <HeaderMain />
      </v-col>
    </v-row>
</template>

