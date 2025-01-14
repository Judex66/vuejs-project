
<template>
    <v-dialog
    v-model="$store.getters.getDialogVisible"
    max-width="600"
    @click:outside="$store.commit('hideDialog')"
    >
    <v-card>
    <v-card-title>
{{ fullTitle }}
    </v-card-title>
    <v-card-text>
        <v-img 
        :src="$store.getters.getCurrectPhoto.url"/>
    </v-card-text>
</v-card>
    </v-dialog>
</template>
<script>
export default{
    computed:{
        fullTitle(){
            return `Тест полного названия - ${this.$store.getters.getCurrectPhoto.title}` 
        }
    }
}
</script>
<style></style>