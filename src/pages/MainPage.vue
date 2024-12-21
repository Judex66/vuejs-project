<template>
   <v-container fluid  
   class="d-flex flex-column justify-center align-center" 
   max-width="1800" >
main
<v-carousel v-model="model">
      <v-carousel-item
        v-for="(color) in colors"
        :key="color"
      >
        <v-sheet
          :color="color"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="text-h2">
              Тест контента
            </div>
            <div class="photo">
              
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
   </v-container>
  </template>
  <script>
  export default{
    data: () => ({
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
  }),
  }
  </script>
    <style></style>
  