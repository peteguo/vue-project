<template>
  <div class="_container">
    <div class="_setting-options">
      <query>
        <template scope="scope">
          <el-form-item style="margin-bottom: 0;">
            <el-input v-model="scope.fields.name" name="name" placeholder="角色名称"></el-input>
          </el-form-item>
        </template>
      </query>
      <div class="_setting-options-right">
        <el-button @click.native="$emit('forward', 'roleAdd')" type="primary">新增</el-button>
      </div>
    </div>
    <div class="_table-container">
      <div class="_table-list">
        <el-table :data="dataList" stripe style="width: 100%" border>
          <el-table-column property="roleId" label="编号" width="130" align="center"></el-table-column>
          <el-table-column property="roleName" label="角色名称" min-width="120" align="center"></el-table-column>
          <el-table-column property="roleTypeStr" label="类型" min-width="130" align="center"></el-table-column>
          <!--<el-table-column property="sortIndex" label="排序" width="100" align="center"></el-table-column>-->
          <el-table-column property="statusCodeStr" label="状态" width="120" align="center"></el-table-column>
          <!--<el-table-column property="createdDtm" label="创建时间" width="180"></el-table-column>-->
          <el-table-column inline-template label="操作" width="230" align="center">
            <div>
              <el-button size="mini" type="success"   @click.native="$emit('forward', 'roleUser', row)">用户</el-button>
              <el-button size="mini" type="success"   @click.native="$emit('forward', 'roleDetail', row)">明细</el-button>
              <el-button size="mini" type="warning"      @click.native="$emit('forward', 'rolePermission', row)">权限</el-button>
              <el-button size="mini" type="warning"      @click.native="$emit('forward', 'roleModify', row)">编辑</el-button>
              <el-button size="mini" type="danger"    @click.native="deleteRole(row.roleId)" v-if="row.roleType==1">删除</el-button>
            </div>
          </el-table-column>
        </el-table>
        <!--<div class="_pagination">-->
          <!--<el-pagination-->
            <!--@size-change="handleSizeChange"-->
            <!--@current-change="handleCurrentChange"-->
            <!--:current-page="pageNo"-->
            <!--:page-sizes="[10, 20, 30, 50]"-->
            <!--:page-size="pageSize"-->
            <!--layout="total, sizes, prev, pager, next, jumper"-->
            <!--:total="total">-->
          <!--</el-pagination>-->
        <!--</div>-->
      </div>
    </div>
  </div>

</template>
<script>
  import query from "@/components/query"
  export default {
    name: "roleList",
    data() {
      return {
        visible: false,
        roleName: '',
        dataList:[]
      }
    },
    // 导入组件
    components: {
      query,
    },
    methods: {
      searchDataList() {

      }
    }
  }
</script>
<style lang="scss">
  ._setting-options {
    display: flex;
    justify-content: space-between;
  }
</style>
