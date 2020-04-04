<template>
  <div>
    <ul class="item-list">
            <!-- 포인트 영역 -->
            <li v-for="item in fetchedAsk" class="post">
                <div class="points">
                    {{item.points}}
                </div>    
            <!-- 기타 정보 영역 -->
            <div>
                <p class="item-title">
                    <router-link :to="`/item/${item.id}`">
                      {{ item.title }}
                    </router-link>
                </p>
                <small class="link-text">
                    {{ item.time_ago }}
                    by
                    <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
                </small>
            </div>
            <!-- //기타 정보 영역 -->
           
            </li>
        </ul>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data(){
    return{
    }
  },
  created(){
     this.$store.dispatch('FETCH_ASK');
  },
  computed: {
        ...mapGetters([
            'fetchedAsk'
        ])
    },
}
</script>



<style>
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