<script>
import FooterMain from '@/components/FooterMain.vue';

export default{
    name : 'FooterContainer',
    components : {
        'FooterMain' : FooterMain
    }
}
</script>
<template>
    <v-row>
        <v-col    
            class="pa-0 ma-0 row-footer"
        >
        <FooterMain />
        </v-col>  
    </v-row>
</template>