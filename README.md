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
9. ref : https://www.sitepoint.com/vs-code-extensions-javascript-developers/


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