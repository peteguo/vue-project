<style lang="scss" scoped>
  #slidebar{
    box-sizing:border-box;
    border:1px solid #ddd;
    border-radius:5px;
    background-color: #fff;
    box-shadow:0 0 1px #ccc;
    min-width:200px;
  }
  .el-submenu {
    width: 100%;
    /*text-align: center;*/
  }
</style>
<template>
  <div id="slidebar">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true" theme="dark" mode="horizontal">
          <el-submenu :index="index+''" v-for="(items,index) in navList">
            <template slot="title"><i :class="items.icon" style="margin-right: 10px;"></i>{{items.title}}</template>
              <el-menu-item :index="index + index2 + ''"  v-for="(val,index2) in items.navs" :route="{path:val.router}">{{val.title}}</el-menu-item>
            <!--<el-submenu index="1-4">-->
              <!--<template slot="title">选项4</template>-->
              <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
            <!--</el-submenu>-->
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
  <!--<div id="slidebar">-->
    <!--<el-row class="tac">-->
      <!--<el-col :span="24">-->
        <!--<el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">-->
          <!--<el-submenu :index="index+''" v-for="(items,index) in navList">-->
            <!--<template slot="title"><i :class="items.icon" style="margin-right: 10px;"></i>{{items.title}}</template>-->
            <!--<router-link v-for="(val,index2) in items.navs" :to="val.router"><el-menu-item index="index+'' + index2 + ''">{{val.title}}</el-menu-item></router-link>-->
            <!--&lt;!&ndash;<el-submenu index="1-4">&ndash;&gt;-->
            <!--&lt;!&ndash;<template slot="title">选项4</template>&ndash;&gt;-->
            <!--&lt;!&ndash;<el-menu-item index="1-4-1">选项1</el-menu-item>&ndash;&gt;-->
            <!--&lt;!&ndash;</el-submenu>&ndash;&gt;-->
          <!--</el-submenu>-->
        <!--</el-menu>-->
      <!--</el-col>-->
    <!--</el-row>-->
  <!--</div>-->
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
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
