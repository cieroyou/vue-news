<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script>
// import ListView from '../view/ListView'
import ListItem from '../components/ListItem'
import ListMixin from '../mixins/DataFetchingMixin.js';
export default{
    components : {
        ListItem
    },
    mixins: [ListMixin]
}    
</script>

<style scoped>

</style>