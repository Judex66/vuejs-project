<template>
   <v-container>
    photo
    <!-- <PhotoForm @addPhoto="addPhoto"/> -->
    <v-row>
      <ThePhoto
      v-for="photo in photo"
      :key="photo.id"
      :photo="photo"
      />
    </v-row>
   </v-container>
  </template>
  <script>
  import ThePhoto from '@/components/ThePhoto.vue';
  // import PhotoForm from '@/components/PhotoForm.vue';
import axios from 'axios';
 export default{
  components:{
    ThePhoto
  },
  data: () => ({
    photo: null
  }),
  mounted(){
    // this.$store.dispatch('fetchPhotos')
    this.fetchPhotos()
  },
  methods:{
    fetchPhotos(){
            axios.get('https://jsonplaceholder.typicode.com/photos?_limit=20')
            .then(response=>this.photo=response.data)
        }
  }
 }
  </script>
    <style></style>
  