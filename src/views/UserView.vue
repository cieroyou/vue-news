<template>
  <div>User</div>
</template>

<script>
export default {
  created(){
    const username = this.$route.params.id;
    this.$store.dispatch('FETCH_USER',username);
  }
}
</script>

<style>

</style>