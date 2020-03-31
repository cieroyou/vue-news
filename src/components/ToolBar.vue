<template>
    <div class="header">
        <router-link to="/ask">Ask</router-link> |
        <router-link to="/jobs">Jobs</router-link> |
        <router-link to="/news">News</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    color: white;
    display: flex;
    background-color: #42b883;
    padding: 8px;
}
.header .router-link-exact-active
{
    /* 헤더안의 링크가 클릭이 되어질 때 active 상태가 됨 */
    /* active상태일 때 글씨 색상 바꿔주기 */
    /* 개발자 도구의 router-link 태그를 확인하면 현재 선택되어진 페이지의 링크의 class에 router-link-exact-active router-link-active이 추가된걸 볼 수 있음 */
    color: #35495e;
}
.header a{
    /* 활성화되지 않은 링크들은 흰색으로 */
    color: white;
}    
</style>