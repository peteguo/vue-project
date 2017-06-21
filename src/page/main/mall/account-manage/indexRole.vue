<template>
  <div class="shop_custom_classify">
    <!-- 面包屑 -->
    <div class="_breadcrumb">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/mall' }">账户管理</el-breadcrumb-item>
        <el-breadcrumb-item>角色管理</el-breadcrumb-item>
        <el-breadcrumb-item v-if="currentComponent === 'roleAdd'">新增角色</el-breadcrumb-item>
        <el-breadcrumb-item v-if="currentComponent === 'roleModify'">角色修改</el-breadcrumb-item>
        <el-breadcrumb-item v-if="currentComponent === 'roleDetail'">角色明细</el-breadcrumb-item>
        <el-breadcrumb-item v-if="currentComponent === 'rolePermission'">角色权限</el-breadcrumb-item>
        <el-breadcrumb-item v-if="currentComponent === 'roleUser'">角色用户</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- <transition name="fade" mode="out-in" appear> -->
    <!-- <keep-alive> -->
    <component :is="currentComponent" :obj="obj" @forward="forward" @reback="reback"></component>
    <!-- </keep-alive> -->
    <!-- </transition> -->
  </div>
</template>
<script>
  import roleList from "./role-manage/index"
  export default {
    name: 'mall_role',
    components: { roleList },
    data() {
      return {
        loading:false,//遮罩层
        currentComponent: '',
        obj: {}
      }
    },
    methods: {
      forward(comp, data) {
        this.currentComponent = comp
        this.obj = data || {};
      },
      reback(comp, data) {
        this.currentComponent = comp
        this.obj = data || {}
      },

    },
    created() {
      this.currentComponent= 'roleList';
    }
  }
</script>
