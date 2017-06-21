// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/store'
import ElementUI from 'element-ui'
//import appConfig from '../config'

Vue.config.productionTip = false
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {

  //let loginVal = localStorage.getItem('login');
  //if(to.path !== '/login' && !store.getters.loginFlag && !loginVal) {
  //  next({path:'/login',query:{ referrer: to.fullPath} });
  //  return;
  //}else {
  //  return next();
  //}

  console.log(to)
  console.log(to)
  //let loginVal = localStorage.getItem('login');
  if(to.path !== '/login' && !store.getters.loginFlag && !store.getters.login) {
    next({path:'/login',query:{ referrer: to.fullPath} });
    return;
  }else {
    return next();
  }
  window.scrollTo(0,0);
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

