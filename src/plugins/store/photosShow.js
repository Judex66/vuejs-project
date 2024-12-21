import axios from "axios"

export default{
    state: {
        photos: []
      },
    mutations:{
        setPhotos(state,payloads){
            state.photos=payloads
        }
    },
    getters:{
        getAllPhotos(state){
            return state.photos
        }
    },
    actions:{
        fetchPhotos(content){
            axios.get('https://jsonplaceholder.typicode.com/photos?_limit=20')
            .then(response=>content.commit('setPhotos', response.data))
        }
    },
}