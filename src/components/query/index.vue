<!-- 查询组件 -->
<style scoped>
  .btns-wrap{
    margin-left: 50px;
  }
</style>

<template>

    <el-form ref="form" :model="formData" style="display: flex;align-items: center;">
      <slot :fields="formData">(查询条件)</slot>
      <div class="btns-wrap">
        <el-button @click.native="doQuery">查询</el-button>
        <el-button @click="doReset">重置</el-button>
      </div>
    </el-form>

</template>

<script>
  const initFormData = {}; // 存储初始数据

  export default {
    props: ['title'],

    data() {
      return {
        formData: {}
      };
    },

    mounted() {
      this.attach();
      Object.keys(this.$route.query).forEach(key => {
        if (typeof this.formData[key] !== 'undefined') {
        const num = parseFloat(this.$route.query[key]);
        this.formData[key] = isNaN(num) ? this.$route.query[key] : num;
      }
    });
    },

    methods: {
      attach() {
        this.$refs['form'].$el.querySelectorAll('[name]').forEach(field => {
          let fieldName = field.getAttribute('name');
        if (field.className.indexOf('checkbox') > -1) {
          this.$set(this.formData, fieldName, []);
          initFormData[fieldName] = [];
        } else {
          this.$set(this.formData, fieldName, null);
          initFormData[fieldName] = null;
        }
      });
        // this.$forceUpdate();
      },
      doQuery() {
        let query = {};
        Object.keys(this.formData).forEach( key=> {
          if (!!this.formData[key] || this.formData[key] === 0) {
          query[key] = this.formData[key];
          if (query[key] instanceof Date) {
            query[key] = fecha.format(query[key], 'YYYY-MM-DD HH:mm:ss');
          }
        }
      });
        this.$router.push({ query });
      },
      doReset() {
        // this.$refs['form'].resetFields();
        Object.assign(this.formData, initFormData);
      }
    }
  };
</script>
