<i18n>
{
  "En": {
    "switch": "Switching Languages",
    "place": "The place where you can choose youe language",
    "usingSelect": "Using the select option bellow you can choose which language this card will use"
  },
  "Cz": {
    "switch": "Přepínání jazyků",
    "place": "Místo, kde si můžete vybrat svůj jazyk",
    "usingSelect": "Pomocí níže uvedené možnosti výběru můžete zvolit jazyk, který bude tato karta používat"
  }
}
</i18n>

<script>
export default{
  data () {
    this.$i18n.locale = 'En';
    return { locale: 'En', languages: ['En', 'Cz'] }
  },
  watch: {
    locale (val) {
        console.log(val);
      this.$i18n.locale = val
    }
  }
}
</script>
 <!-- {{ $t("message.hello") }} -->
    <!-- <h1>Switching Languages</h1>
    <p>In this page we will change the language of this text</p> -->
<template>
  <v-card
    class="mx-auto pt-6 mt-16"
    height="400"
    width="1000"
  >

    <v-card-actions class="pb-13">
        <div>
            <v-select
                v-model="locale"
                :items="languages"
                menu-props="auto"
                label="En"
                hide-details
                prepend-icon="mdi-flag"
                single-line
                color="purple"
            ></v-select>
        </div>
    </v-card-actions>



    <v-card-subtitle class="pb-0">
        <h1>{{ $t('switch') }}</h1>
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ $t('place') }}</div>
      <div>{{ $t('usingSelect') }}</div>
    </v-card-text>

  </v-card>
</template>