import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        searchterm: "",
        focusedimageid: {}
    },
    actions: {
        changeSearchTerm({commit}, id){
            commit('CHANGE_SEARCH_TERM', id)
        },
        changeFocusedImage({commit}, id){
            console.log('vuex store - ACTION - changeFocusedImage id is: ' + id)
            commit('CHANGE_FOCUSED_IMAGE', id)
        }
    },
    mutations: {
        CHANGE_SEARCH_TERM(state, id){
            state.searchterm = id;
        },
        CHANGE_FOCUSED_IMAGE(state, id){
            state.focusedimageid = id;
        }
    }
})