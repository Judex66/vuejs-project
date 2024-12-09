import Vue from 'vue';
import Vuex from 'vuex';
import photosShow from './photosShow';

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        photosShow
    }
})