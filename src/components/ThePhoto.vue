<template>
 <v-col cols="4">
<v-card>
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
    }
}
</script>
<style></style>