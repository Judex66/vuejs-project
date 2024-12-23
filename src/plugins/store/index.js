import Vue from 'vue';
import Vuex from 'vuex';
import photosShow from './photosShow';
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        photosShow
    },
    plugins: [createPersistedState()]
})