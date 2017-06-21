import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Nav from 'components/nav-bar'
import Login from 'page/login/index'
import Main from 'page/main'
Vue.use(Router)
let route = [];
const modules = require.context('../page', true, /router\.js$/);
modules.keys().forEach(key => {
  route = route.concat(modules(key).default);
});
//console.log(JSON.stringify(routes))
export default new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'main',
      component: Main,
      redirect: '/mall',
      meta: {
        auth: true
      },
      children:route
    }
  ]
})
