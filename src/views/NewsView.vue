<template>
    <div>
        <div v-for="news in fetchedNews">
            <a :href="news.url">{{ news.title }}</a>
            <small> 
                {{ news.time_ago }} by 
                <router-link :to="`/user/${news.user}`">{{ news.user }}</router-link>
                
            </small>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default{
    computed: {
        // #1
        // news(){
        //     return this.$state.news;
        // }

        //#2
        // ...mapState({
        //     news: state => state.news
        // })

        //#3
        // ...mapGetters({
        //     fetchedNews: 'fetchedNews'
        // })

        //#4   
        ...mapGetters([
            'fetchedNews'
        ])
    },
    data(){
        return{
        }
    },
    created(){
       this.$store.dispatch('FETCH_NEWS');
    }

}    
</script>

<style>

</style>