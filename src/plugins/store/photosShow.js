import axios from "axios"

export default{
    state: {
        photos: [],
        currentPhoto:{},
        dialogVisible:false
      },
    mutations:{
        setPhotos(state,payload){
            state.photos=payload
        },
        showDialog(state){
            state.dialogVisible=true
      
        },
        hideDialog(state){
        state.dialogVisible=false
   
        },
        setCurrentPhoto(state,payload){
        state.currentPhoto=payload
     
        },
        addPhoto(state, payload){
            state.photos.push(payload)
        }
    },
    getters:{
        getAllPhotos(state){
            return state.photos
        },
        getCurrectPhoto:(state)=>state.currentPhoto,
        getDialogVisible:(state)=>state.dialogVisible,
        
    },
    actions:{
        fetchPhotos(content){
            axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
            .then(response=>content.commit('setPhotos', response.data))
        }
    },
}