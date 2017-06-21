<!-- 侧边栏组件 -->
<style lang="scss" scoped>
  #slidebar{
    box-sizing:border-box;
    border:1px solid #ddd;
    border-radius:5px;
    background-color: #fff;
    box-shadow:0 0 1px #ccc;
    min-width:200px;
  }
  .panel-group .panel{
    margin-top:0;
    border-radius:0;
    border:none;
    box-shadow:none;
  }
  .panel-heading{
    padding:0;
  }
  .panel-heading, .nav a{
    background-color:transparent;
  }
  .panel-heading a[aria-expanded="true"] .arrow::before{
    content: "\e114";
  }
  .panel-title{
    font-size:14px;
    overflow:hidden;
  }
  .panel-title>a{
    display: block;
    height:40px;
    line-height:40px;
    text-decoration: none;
    padding:0 20px;
    color:#678098;
  }
  .panel-title>a:hover, .panel-title>a.active, .nav a:hover, .nav a.active{
    background-color:rgb(242,246,249);
    color:#5b9bd1;
  }
  .icon{
    margin-right:6px;
    font-size:16px;
  }
  .arrow{
    float:right;
    margin-top:12px;
    font-size:12px;
  }
  .switch-count{
    display:none;
  }
</style>

<template>
  <div id="slidebar">
    <div class="panel-group" id="accordion">
      <div v-for="(childList, childIndex) in navList" class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a data-toggle="collapse" data-parent="#accordion"
               :href="childIndex | collapseId(true)"
               :class="{'active': childList.in || childList.defaultIn}"
               :aria-expanded="childList.in || childList.defaultIn">
              <span :class="['icon', 'glyphicon', childList.icon]"></span>
              {{childList.title}}
              <span :class="['arrow', 'glyphicon', 'glyphicon-chevron-left']"></span>
            </a>
          </h4>
        </div>
        <div :id="childIndex | collapseId"
             :class="['panel-collapse', 'collapse', {'in': childList.in || childList.defaultIn}]">
          <div class="panel-body">
            <ul class="nav nav-pills nav-stacked">
              <li v-for="item in childList.navs"><a :href="item.router | route" :class="{active:item.active}" @click="switchPage">{{item.title}}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <span class="switch-count">{{switchCount}}</span>
  </div>
</template>

<script>
  import navListConfig from './nav.config';

  export default {

    computed: {
      navList() {
        return navListConfig || [];
//      if (this.logined) {
//        return navListConfig || [];
//      } else {
//        return [];
//      }
      }
    },
    methods: {

      switchPage: function(e){
        // 点击当前链接时，触发刷新动作
        if (e.currentTarget.href.indexOf(this.$route.fullPath) > -1) {
          let query = Object.assign({}, this.$route.query, {t: +new Date});
          this.$router.replace({ query });
        }
        //this.pagePreload();
      },
      // 通过匹配路由设置命中样式
      hitRoute: function(){
        let patt = /^(\/.+?\/.+?)\/.*$/;
        let hited = false;
        this.navList.forEach(item => {
          item.in = false; // 清除上一次父级展开状态
        (item.navs || []).forEach(nav => {
          nav.active = false; // 清除上一次命中状态
        if (nav.router === '/') { // 首页单独处理
          if (location.hash === '#/') {
            hited = true;
            nav.active = true; // 命中路由
            item.in = true; // 父级展开
          }
        } else if (location.hash.indexOf(nav.router.replace(patt, '$1')) > -1) {
          hited = true;
          nav.active = true; // 命中路由
          item.in = true; // 父级展开
        }
      });
      });
        if (hited) this.navList.some(item => {
          if (item.defaultIn) {
          delete item.defaultIn;
          return true;
        }
      });
        this.switchCount ++;
      }
    },

    created(){
      this.$router.afterEach(router => {
        setTimeout(this.hitRoute, 150);
    });
    },
    data(){
      return {
        switchCount: 1
      };
    },
    filters: {
      collapseId: function(value, well){
        let id = 'collapse' + value;
        return well ? '#' + id : id;
      },
      route: function(value){
        return '#' + value;
      }
    }
  };
</script>
