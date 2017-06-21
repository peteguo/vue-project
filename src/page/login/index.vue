<template>
  <div class="_login-pages">
    <header class="_login-header">
      <div class="login_header_two">
        <div class="login_hedder_logo"></div>
        <label></label>
      </div>
    </header>
    <section class="_login-body">
      <div class="_login-container"><router-view></router-view></div>
      <loginBox></loginBox>
    </section>
    <footer class="_login-footer">
      <div class="_login-container">
        <div>©2015-2017 深圳一体数科科技有限公司</div> 
        <div><a href="http://www.miibeian.gov.cn" target="_blank">粤ICP备15102042号-5</a></div>
        <div><img src="/static/images/ghs.png"><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502000157" target="_blank" style="margin-left: 0;"> 粤公网安备 44030502000157号</a></div>
      </div>
    </footer>
  </div>
</template>

<script>
  import loginBox from "./components/login-box"
  export default {
    name: "login-page",
    components: { loginBox }
  }
</script>

<style lang="scss">
  ._login-pages {
    background:url(/static/images/BG_login.jpg) no-repeat #502103;background-size:100%;
  }
  .login_header_two {
    width: 100%;
    height: 70px;
    background: rgba(80,33,3,0.5);
  }
  .login_hedder_logo {
    width: 150px;
    height: 70px;
    float: left;
    margin-left: 15px;
    background: url(/static/images/logo.png) no-repeat;
  }
  ._login-header {
  ._login-container {
    display: flex;
    align-items: center;
    height: 70px;
  }
  }
  ._login-footer {
  ._login-container {
    height: 50px;
    text-align: center;
    padding: 15px;
  > div {
      display: inline-block;
      margin-right: 20px;
      color: #999999;
    }
  }
  }
  ._login-body {
    min-height: calc(100vh - 70px - 50px);
  // for IE
     ._login-container {
       flex-direction: column;
     }
  }
  ._login-container {
    width: 1024px;
    margin: 0 auto;
  }
</style>



