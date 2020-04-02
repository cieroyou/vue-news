<template>
  <div>
    <div v-for="item in fetchedAsk">{{ item.title }}</div>
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