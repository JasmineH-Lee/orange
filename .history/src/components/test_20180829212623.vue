<template>
    <div>
      <h4>测试页面</h4>
      <el-button @click="sweetalert">Button</el-button>
      <div id="test" ref="test" style="width: 600px; height: 800px;"></div>
      <font-awesome-icon icon="coffee" />
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
  },
  mounted () {
    this.drawGraph()
  },
  methods: {
    drawGraph () {
      let dom = this.$refs.test
      console.log(dom)
      this.chart = this.$echarts.init(this.$refs.test)
      var option = {
        title: {
          text: 'ECharts 测试'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: this.opinion
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [4,7,12,10]
        }]
      }
      this.chart.setOption(option)
    },
    sweetalert () {
      this.$swal({
  type: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
  footer: '<a href>Why do I have this issue?</a>'
})
    }
  }
}
</script>
