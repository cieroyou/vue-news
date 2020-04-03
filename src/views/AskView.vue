<template>
  <div>
    <div v-for="item in fetchedAsk">
       <a :href="item.url">{{ item.title }}</a>
        <small> {{ item.time_ago }} by {{ item.user }} </small>
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

</style>