<template>
  <div>
    <list-item></list-item>
  </div>
  <!-- <div>
    <ul class="item-list">
            <li v-for="item in fetchedAsk" class="post">
                <div class="points">
                    {{item.points}}
                </div>    
            <div>
                <p class="item-title">
                    <router-link :to="`/item/${item.id}`">
                      {{ item.title }}
                    </router-link>
                </p>
                <small class="link-text">
                    {{ item.time_ago }}
                    by
                    <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
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



<style scoped>

</style>