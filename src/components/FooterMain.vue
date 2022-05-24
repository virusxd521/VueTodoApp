<script>

export default {
    name : 'FooterMain'
}
</script>

<template>
    <v-footer
    padless
    class="footer deep-purple accent-6"
    
  >
    <v-row
      justify="center"
      no-gutters
      padless
    >
      <v-col
        class="py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
    
</template>