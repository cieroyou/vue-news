<template>
  <div>
    <list-item></list-item>
  </div>
  <!-- <div>
    <ul class="item-list">
            <li v-for="item in fetchedJobs" class="post">
                <div class="points">
                    {{item.points}}
                </div>    
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
            </li>
        </ul>
  </div> -->
</template>

<script>
import ListItem from '../components/ListItem'
export default{
    components : {
        ListItem
    }
} 
</script>

<style>

</style>