<template>
    <div>
      <h4>测试页面</h4>
      <el-button>Button</el-button>
      <div>

      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      chart: null,
      opinion: ['gfs', 'grd', 'ljh', 'wrn'],
      opinionData: [
        {
          value: 26,
          name: 'wo'
        },
        {
          value: 34,
          name: 'wo4'
        },
        {
          value: 20,
          name: 'wo6'
        },
        {
          value: 40,
          name: 'woio'
        }
      ]
    }
  }
}
</script>
