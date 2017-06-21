<!-- 页头组件 -->
<style lang="scss">
  #header{
    color:#fff;
  }
  .logo{
    display:block;
    width:50px;
    height:100%;
    float: left;
    margin-left:10px;
  }
  .logo>img{
    display:block;
    width:auto;
    height:100%;
  }
  .progress{
    position:absolute;
    height:4px;
    width:100%;
    bottom:-4px;
    margin-bottom:0;
  }
  .right-panel{
    float:right;
    margin-right:10px;
    line-height: 60px;
    height: 60px;
    .user-name{
      margin-right: 50px;
    }
    .full-name {
      margin-right: 400px;
    }
  }
  .user-dropdown{
    cursor:pointer;
  }
  .el-dropdown-link {
    color:#f1f1f1;
  }
  .debug-info{
    margin-left:100px;
    color:#f00;
  }
  .system-name {
    display: block;
    float: left;
    margin-left: 130px;
    font-size: 22px;
    margin-top: 12px;
    height: 100%;
    color: #ffffff;
  }
</style>

<template>
  <div id="header">
    <a class="logo" href="http://www.onedt.cn">
      <img src="/static/images/logo.png">
    </a>
    <span class="system-name">垃圾转运管理系统</span>
    <!--<span v-if="apiHost" class="debug-info">当前为接口调试模式，接口地址：{{apiHost}}</span>-->
    <div class="right-panel">
      <span class="user-name">{{login.username}}</span>
      <span class="full-name">{{login.full_name}}</span>
      <!--<el-dropdown class="user-dropdown" @command="handleUserCommand">-->
        <!--<span class="el-dropdown-link">-->
          <!--<i class="el-icon-time el-icon&#45;&#45;left"></i>-->
          <!--{{userInfo.nickName || userInfo.userName}}-->
        <!--</span>-->
        <!--<el-dropdown-menu slot="dropdown">-->
          <!--<el-dropdown-item command="viewinfo">账户信息</el-dropdown-item>-->
          <!--<el-dropdown-item command="changepwd">修改密码</el-dropdown-item>-->
          <!--<el-dropdown-item command="loginout" divided>退出系统</el-dropdown-item>-->
          <!--<el-dropdown-item v-if="allowDebug" command="debug" divided>接口调试</el-dropdown-item>-->
        <!--</el-dropdown-menu>-->
      <!--</el-dropdown>-->
    </div>
    <!--<page-loading :status="$store.state.pageLoadingStatus"></page-loading>-->
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: "main",
    components: {
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters([
        'login',
      ])
    },
    created(){
    console.log(JSON.stringify(this.login))
    },
  }
</script>
