<template>
   <v-container fluid >
    photo
     <PhotoForm @addPhoto="addPhoto"/>
    <v-row>
      <ThePhoto
      v-for="photo in photos"
      :key="photo.id"
      :photo="photo"
      @openPopup="openPopup"
      />
   
    </v-row>
    <PopupShow :photo="currentpopup" v-model="popupVisible"/>
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
    photos: [],
    currentpopup:{},
    popupVisible:false
  }),
  mounted(){
   // this.$store.dispatch('fetchPhotos')
     this.fetchPhotos()
  },
  methods:{
    fetchPhotos(){
            this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=50')
            .then(response=>this.photos=response.data)
        },
        addPhoto(photo){
this.photos.push(photo)
        },
        openPopup(photo){
          
this.currentpopup=photo
this.popupVisible=true
        }
  }
 }
  </script>
    <style></style>
  