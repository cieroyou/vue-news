<template>
  <div>
        <ul class="item-list">
            <!-- 포인트 영역 -->
            <li v-for="item in listItems" class="post">
                <div class="points">
                    <!-- news.points 가 null 인 경우에는 0으로 할당 -->
                    {{item.points || 0}} 
                </div>    
            <!-- 기타 정보 영역 -->
            <div>
                <!-- 아이템 타이틀 : 페이지별 분기 처리 필요 -->
                <p class="item-title">
                    <!-- 도메인이 있는 경우에는 a 태그 사용 아닌 경우에는 router 이동 -->
                    <template v-if="item.domain">
                        <a :href="item.url">
                            {{ item.title }}
                        </a>
                    </template>
                    <template v-else>
                        <router-link :to="`/item/${item.id}`">
                            {{ item.title }}
                        </router-link>
                    </template>

                </p>
                <small class="link-text">
                    {{ item.time_ago }}
                    by
                    <router-link v-if="item.user"
                        :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
                    <a :href="item.url" v-else>
                        {{ item.domain }}
                    </a>
                </small>
            </div>
            <!-- //기타 정보 영역 -->
           
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created(){
        // 페이지 AskView, JobsView, NewsView에 공통적으로 들어갈 컴포넌트
        // 해당 페이지에 따라 요청 api를 다르게 해줘야 함(방법 2가지)
        // # 1. using route path
        // console.log(this.$route.path === '/news')
        // # 2. using route name
        const routeName = this.$route.name;
        let actionName;
        if (routeName === 'news'){
            actionName = 'FETCH_NEWS';
        }else if (routeName === 'ask'){
            actionName = 'FETCH_ASK';
        }else if (routeName === 'jobs'){
            actionName = 'FETCH_JOBS';
        }
       this.$store.dispatch(actionName);
    },
    computed: {
        // 페이지별로 create()에서 호출하는 api가 다르므로 각기 다른 결과(list)값을 가져옴
        listItems() {
            const routeName = this.$route.name;
            let value;
            if (routeName === 'news'){
                 value = this.$store.state.news;
            }else if (routeName === 'ask'){
                value = this.$store.state.ask;
            }else if (routeName === 'jobs'){
                value = this.$store.state.jobs;
            }
            return value;
        }
    }

}
</script>

<style scoped>
.item-list{
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
.item-title{
    margin: 0;
}
.link-text{
    color: #828282;
}
</style>