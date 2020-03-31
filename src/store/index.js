import Vuex from 'vuex'
import Vue from 'vue'
import { fetchNewsList } from '../api/index'

Vue.use(Vuex)

/**
 * 상태관리도구
 */
export const store = new Vuex.Store({
    state:{
        news:[

        ]
    },
    mutations:{
        SET_NEWS(state, news) {
            state.news = news;
        }
    },
    actions: {
       FETCH_NEWS(context){
           fetchNewsList()
           .then(response => context.commit('SET_NEWS', response.data))
           .catch(error => console.log(error));
           
       }
    }
});


