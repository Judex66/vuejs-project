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
        }
    },
    getters:{
        getAllPhotos(state){
            return state.photos
        },
        getDialogVisible:(state)=>state.dialogVisible,

        getCurrectPhoto:(state)=>{state.currentPhoto
            
        }
        
    },
    actions:{
        fetchPhotos(content){
            axios.get('https://jsonplaceholder.typicode.com/photos?_limit=20')
            .then(response=>content.commit('setPhotos', response.data))
        }
    },
}