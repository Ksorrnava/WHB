import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        mainList: []
    },
    mutations: {
        setList(state, value) {
            state.mainList = value;
        },
    },
    actions: {},
    modules: {}
})
