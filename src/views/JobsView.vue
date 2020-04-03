<template>
  <div>
    <div v-for="item in fetchedJobs">
      <a :href="item.url"> {{ item.title }}</a>
      <small>{{ item.domain }}</small>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
 data(){
        return{
        }
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