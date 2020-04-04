<template>
    <div>
        <ul class="news-list">
            <!-- 포인트 영역 -->
            <li v-for="news in fetchedNews" class="post">
                <div class="points">
                    {{news.points}}
                </div>    
            <!-- 기타 정보 영역 -->
            <div>
                <p class="news-title">
                    <a :href="news.url">{{ news.title }}</a>
                </p>
                <small class="link-text">
                    by
                    <router-link :to="`/user/${news.user}`" class="link-text">{{ news.user }}</router-link>
                </small>
            </div>
            <!-- //기타 정보 영역 -->
           
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
    border-bottom: 1px solid #eee;
}
.points{
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.news-title{
    margin: 0;
}
.link-text{
    color: #828282;
}
</style>