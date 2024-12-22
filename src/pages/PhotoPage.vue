<template>
   <v-container>
    photo
     <PhotoForm/>
    <v-row>
      <ThePhoto
      v-for="photo in $store.getters.getAllPhotos"
      :key="photo.id"
      :photo="photo"
      />
    </v-row>
    <PopupShow/>
   </v-container>
  </template>
  <script>
  import ThePhoto from '@/components/ThePhoto.vue';
   import PhotoForm from '@/components/PhotoForm.vue';
import PopupShow from '@/components/PopupShow.vue';
 //import axios from 'axios';
 export default{
  components:{
    ThePhoto, PhotoForm, PopupShow
  },
  data: () => ({
    photos: []
  }),
  mounted(){
    this.$store.dispatch('fetchPhotos')

  },
  methods:{

//         addPhoto(photo){
// this.photos.push(photo)
//         },
//         openPopup(photo){
          
// this.currentPhoto=photo
// this.dialogVisible=true
//         }
  }
 }
  </script>
    <style></style>
  