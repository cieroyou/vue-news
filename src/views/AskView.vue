<template>
  <div>
    <div v-for="item in fetchedAsk">
      <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
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