import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        mainList: [],
        priceList: []
    },
    mutations: {
        setList(state, value) {
            state.mainList = value;
        },
        setPriceList(state, value) {
            state.priceList = value;
        },
    },
    actions: {},
    modules: {}
})
