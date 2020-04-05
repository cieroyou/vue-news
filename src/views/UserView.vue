<template>
  <div>
    <!-- <p>name: {{ userInfo.id }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <p>created: {{ userInfo.created }}</p> -->
    <user-profile :info = 'userInfo'>
      <div slot="username">{{ userInfo.id }}</div>
      <template slot="time">{{ userInfo.created }}</template>
      <div slot="karma">{{ userInfo.karma }}</div>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile'
export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo(){
      return this.$store.state.user
    }
  },
  created(){
    const username = this.$route.params.id;
    this.$store.dispatch('FETCH_USER',username);
  }
}
</script>

<style scoped>

</style>