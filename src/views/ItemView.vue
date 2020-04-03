<template>
  <div>
    <p>content : {{ itemInfo.content}}</p>
    <p>points : {{ itemInfo.points}}</p>
    <p>time : {{ itemInfo.time}}</p>
    <p>title : {{ itemInfo.title}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    itemInfo(){
      return this.$store.state.item
    }
  },
  created(){
    const itemid = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemid);
  }
}
</script>

<style>

</style>