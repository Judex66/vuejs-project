<template>
   <v-container>
    photo
     <PhotoForm @addPhoto="addPhoto"/>
    <v-row>
      <ThePhoto
      v-for="photo in photos"
      :key="photo.id"
      :photo="photo"
      />
   
    </v-row>
   </v-container>
  </template>
  <script>
  import ThePhoto from '@/components/ThePhoto.vue';
   import PhotoForm from '@/components/PhotoForm.vue';
 //import axios from 'axios';
 export default{
  components:{
    ThePhoto, PhotoForm
  },
  data: () => ({
    photos: []
  }),
  mounted(){
   // this.$store.dispatch('fetchPhotos')
     this.fetchPhotos()
  },
  methods:{
    fetchPhotos(){
            this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=20')
            .then(response=>this.photos=response.data)
        },
        addPhoto(photo){
this.photos.push(photo)
        }
  }
 }
  </script>
    <style></style>
  