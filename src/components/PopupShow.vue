
<template>
    <v-dialog
    v-model="popupVisible"
    max-width="600"
    >
    <v-card>
    <v-card-title>
{{ fullTitle }}
    </v-card-title>
    <v-card-text>
        <v-img
        :src="photo.url"/>
    </v-card-text>
</v-card>
    </v-dialog>
</template>
<script>
export default{
    props:{
        photo:{
            type: Object,
            required:true
        },
        value:{
            type:Boolean,
            default:false
        }
    },
    create(){
        this.popupVisible=this.value
    },
    data:()=>({
        popupVisible:false
    }),
    watch:{
        value(newValue){
            this.popupVisible=newValue
            console.log(newValue)
        },
        popupVisible(newValue){
            this.$emit('input', newValue)
        }
    },
    computed:{
        fullTitle(){
            return `Тест полного названия - ${this.photo.title}` 
        }
    }
}
</script>
<style></style>