<template>
  <div class="map-list">
    <div class="_breadcrumb">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/mall' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>地图列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="_setting-bar">
      <div class="_query-form-item">
        <el-form :inline="true">
          <el-form-item>
            <el-input :placeholder="所属单位" v-model="activityIdSearch"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input :placeholder="管理人" v-model="activityNameSearch"></el-input>
          </el-form-item>
          <el-form-item>
            <el-select v-model="isPageSearch" clearable placeholder="区域">
              <el-option
                v-for="item in isPageOptions"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button @click.native="searchDataList">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  //import loginBox from "./components/login-box"
  export default {
    name: "position",
    ///components: { loginBox }
  }
</script>

<style lang="scss">

</style>



