import Vuex from 'vuex'
import Vue from 'vue'

import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)

/**
 * 상태관리도구
 */
export const store = new Vuex.Store({
    state:{
        news: [],
        ask: [],
        jobs: [],
        user: {}
    },
    getters:{
        fetchedNews(state){
            return state.news;
        },
        fetchedJobs(state){
            return state.jobs;
        },
        fetchedAsk(state){
            return state.ask;
        }
    },
    mutations,
    actions
});


