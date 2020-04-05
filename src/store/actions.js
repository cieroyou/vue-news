import { 
    fetchList,
    fetchUserInfo,
    fetchItemInfo } from '../api/index'

export default{
    //context.commit 
    // FETCH_NEWS({commit}){
    //     fetchNewsList()
    //     //response.data
    //     .then(({data}) => {
    //         commit('SET_NEWS', data)
    //         return data;
    //     })
    //     .catch(error => console.log(error));
    // },
    // FETCH_ASK({commit}){
    //     fetchAskList()
    //     .then(({data}) => {
    //         commit('SET_ASK', data)
    //         return data;
    //     })
    //     .catch(error => console.log(error));
    // },

    // FETCH_JOBS({commit}){
    //  fetchJobsList()
    //  .then(({data}) =>{ 
    //     commit('SET_JOBS', data)
    //     return data;
    //     })
    //  .catch(error => console.log(error));
    // },

      /**
     * FETCH_JOBS, FETCH_NEWS, FETCH_ASK 코드 재사용
     */
    FETCH_LIST({commit}, pageName){ //context.commit 
        fetchList(pageName)
        .then(({data}) =>{ //response.data
           commit('SET_LIST', data)
           return data;
           })
        .catch(error => console.log(error));
    },

    FETCH_USER({commit}, username){
        fetchUserInfo(username)
        .then(({data}) => commit('SET_USER', data))
        .catch(error => console.log(error));
    },

    FETCH_ITEM({commit}, itemid){
        fetchItemInfo(itemid)
        .then(({data}) => commit('SET_ITEM', data))
        .catch(error => console.log(error));
    },

  
}