
/**
 * 数据状态仓库
 */
import Vue from 'vue'
import Vuex from 'vuex'
import MutationState from './mutations/mutation-state'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '', //当前登录用户名
    login:{

    },
    loginUser: {
      menus:[],
      selectedList:[]
    }, //当前登录用户对象
    loginFlag: false, //用户登录标识 true:已登录 false:未登录
    selectedList: [], //用户开通运营商或店铺列表
    sidebarMenu: [],
    cloudShowUrl: '',//http://yun2.luckshow.cn,http://192.168.1.227/pot/show/
    loginType: 1, //用户登录模式 1:运营商用户登录 2:店铺用户登录 默认运营商用户登录
    globalVue: new Vue(), //全局事件定义
    queryParams:{},//用于临时存储每个界面查询参数值
    shopData:[],//电商下店铺数据
    openSystemAll:false //用户是否同时开通了店铺和电商系统 默认为false
  },
  //private 不公开
  mutations: MutationState,
  //通过 dispatch 进行 set
  actions: actions,
  //获取
  getters: {
    userObj: (state) => state.loginUser,
    userName: (state) => state.userName,
    login: (state) => state.login = JSON.parse(localStorage.getItem('login')),
    loginFlag: (state) => state.loginFlag,
    supplierID: (state) => state.loginUser.supplierID,
    selectedName: (state) => state.loginUser.selectedName,
    shopID: (state) => state.loginUser.shopID,
    selectedList: (state) => state.loginUser.selectedList,
    cloudShowUrl: (state) => state.cloudShowUrl,
    loginType: (state) => state.loginType,
    ev: (state) => state.globalVue,
    queryParams:(state)=>state.queryParams,
    shopData:(state)=>state.shopData,
    openSystemAll:(state)=>state.openSystemAll
  }
});
