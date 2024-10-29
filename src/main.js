import './assets/common.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App);
app.use(router).mount('#app');
app.config.globalProperties.$axios = axios;  //전역변수로 설정 컴포넌트에서 this.$axios 호출할 수 있음
app.config.globalProperties.$serverUrl = '//localhost:5000' //api server
// 앱의 JavaScript 키 입력
// window.Kakao.init("53f0ef595fe3e0828d8ceae732483360");