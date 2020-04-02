<template>
  <div>
    <div v-for="item in fetchedJobs">{{ item.title }}</div>
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