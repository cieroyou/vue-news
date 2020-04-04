<template>
  <div>
    <ul class="item-list">
            <!-- 포인트 영역 -->
            <li v-for="item in fetchedJobs" class="post">
                <div class="points">
                    {{item.points}}
                </div>    
            <!-- 기타 정보 영역 -->
            <div>
                <p class="item-title">
                    <a :href="item.url"> {{ item.title }}</a>
                </p>
                <small class="link-text">
                    {{ item.time_ago }}
                    by
                    {{ item.domain }}
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
      this.$store.dispatch('FETCH_JOBS');
    },
    computed: {
        ...mapGetters([
            'fetchedJobs'
        ])
    },

}    

</script>

<style>

</style>