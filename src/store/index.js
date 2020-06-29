import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        mainList: [],
        priceList: [],
        sizeList: []
    },
    mutations: {
        setList(state, value) {
            state.mainList = value;
        },
        setPriceList(state, value) {
            state.priceList = value;
        },
        setSizeList(state, value) {
            state.sizeList = value;
        },
    },
    actions: {},
    modules: {}
})
