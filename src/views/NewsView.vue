<template>
    <div>
        <ul class="news-list">
            <li v-for="news in fetchedNews" class="post">
            <a :href="news.url">{{ news.title }}</a>
            <small> 
                {{ news.time_ago }} by 
                <router-link :to="`/user/${news.user}`">{{ news.user }}</router-link>
            </small>
            </li>
        </ul>
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
.news-list{
    margin: 0;
    padding: 0;
}

.post{
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid;
}
</style>