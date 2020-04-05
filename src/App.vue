<template>
  <div id="app">
    <tool-bar></tool-bar>
    <spinner :loading = "loadingStatus"></spinner>
    <transition name="page">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
import ToolBar from './components/ToolBar'
import Spinner from './components/Spinner'
import bus from './utils/bus.js'
export default {
  name: 'App',
  components: {
    ToolBar,
    Spinner
  },
  data(){
    return{
      loadingStatus: false
    }
  },
  methods:{
    startSpinner(){
      console.log('startSpinner()');
      this.loadingStatus = true;
    },
    endSpinner(){
      console.log('endSpinner()');
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner)
    bus.$on('end:spinner', this.endSpinner)
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover{
  color: #42b883;
}
a.router-link-active{
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
} 
</style>
