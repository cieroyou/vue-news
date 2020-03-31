import Vuex from 'vuex'
import Vue from 'vue'
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index'

Vue.use(Vuex)

/**
 * 상태관리도구
 */
export const store = new Vuex.Store({
    state:{
        news: [],
        ask: [],
        jobs: []
    },
    getters:{
        fetchedNews(state){
            return state.news;
        }
    },
    mutations:{
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        }
    },
    actions: {
       //context.commit 
       FETCH_NEWS({commit}){
           fetchNewsList()
           //response.data
           .then(({data}) => commit('SET_NEWS', data))
           .catch(error => console.log(error));
       },
       FETCH_ASK({commit}){
           fetchAskList()
           .then(({data}) => commit('SET_ASK', data))
           .catch(error => console.log(error));
       },

       FETCH_JOBS({commit}){
        fetchJobsList()
        .then(({data}) => commit('SET_JOBS', data))
        .catch(error => console.log(error));
    }

    }
});


