import { 
    fetchNewsList, 
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchItemInfo } from '../api/index'

export default{
    //context.commit 
    FETCH_NEWS({commit}){
        fetchNewsList()
        //response.data
        .then(({data}) => {
            commit('SET_NEWS', data)
            return data;
        })
        .catch(error => console.log(error));
    },
    FETCH_ASK({commit}){
        fetchAskList()
        .then(({data}) => {
            commit('SET_ASK', data)
            return data;
        })
        .catch(error => console.log(error));
    },

    FETCH_JOBS({commit}){
     fetchJobsList()
     .then(({data}) =>{ 
        commit('SET_JOBS', data)
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
    }
}