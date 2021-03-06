# vue-news

### 사용하면 좋은 플러그인
1. Vetur   
   사용법 : vue.js 에서 ```vue``` 를 입력하고 탭을 누르면 구조 자동 완성
2. Auto Close Tag
3. TSLint
4. ESLint
5. Meterial Icon Them
6. Night Owl
7. Live Server
8. CodeMetrics
9. Import Cost
10. Auto Import
11. ref : https://www.sitepoint.com/vs-code-extensions-javascript-developers/


### 참조
1. API 주소 : https://api.hnpwa.com/v0/news/1.json
   
### Tips
1. 라우터 기본 폴더 이름 작명 : routes 로 한다. Meterial Icon Theme 플러그인이 routes 이름으로 된 폴더를 인식한다.
2. src/views 폴더
   + 페이징의미를 가진 vue 파일만 포함시킨다.
   + 비지니스로직```(해당하는 vue 에서는 데이터를 서버에서 요청(fetch) 해서 데이터를 뿌리는 작업)```은 하지 않는다.
3. src/api 폴더
   + src/api/index.js 에 api를 집약적으로 정리한다.
   + Meterial Icon Theme 이 src/api 이름의 폴더를 인식한다.


### 라이프사이클 실무활용
1. 데이터를 가져오는 라이프사이클 훅은 created()나 beforemounted() 에서 수행한다.
2. created()는 컴포넌트가 생성되자마자 실행되는 함수다


### import 하는 방법
```javascript
import Vue from 'vue';

// #방법1
//bus.js
export const bus = new Vue();
//App.js
import { bus } from './bus.js';


// #방법2
//bus.js
export default new Vue();
//App.js
import bus from './bus.js';

```

### HOC
NewsView, AskView, JobsView 에 공통되는 컴포넌트 로직을 HOC를 사용하여 코드 재사용
+ 공통되는 component logic   
  데이터를 fetch하고 받은 데이터를 뿌려준다는 것이 동일 함   
  ```javascript 
   // 공통되는 로직 코드
   components : {
      ListItem
   },
   created() {
      bus.$emit('start:spinner')
      setTimeout(()=>{
         this.$store.dispatch('FETCH_NEWS')
         .then(() => {
            console.log('fetchedNewsData');
            bus.$emit('end:spinner')
         })
         .catch((error)=> console.log(error));
      },3000)
   }
  ```
1. view/CreateListView.js 에 공통되는 로직 코드 정의
2. 라우터에서 정의된 NewsView, AskView, JobsView 컴포넌트를 CreateListView 로 변
3. HOC 로 생산된 중간컴포넌트 view/ListView.vue 생성
   + ListView.vue 에 components/ListItem.vue 를 컴포넌트로 추가
4. view/CreateListView의 render 정의
