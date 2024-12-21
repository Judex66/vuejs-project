<template>
 <v-col class="d-flex flex-lg-row
 justify-center">
<v-card @click="openPopup"  max-width="600">
    <v-card-title>
{{ photo.title }}
    </v-card-title>
    <v-card-text>
        <v-img
        :src="photo.url"/>
    </v-card-text>
</v-card>
 </v-col>
</template>

<script>
export default{
    props:{
        photo:{
            type: Object,
            required:true
        }
    },
    methods:{
        openPopup(){
            this.$emit('openPopup',this.photo)
        }
    }
}
</script>
<style></style>