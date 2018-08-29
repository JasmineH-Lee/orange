<template>
    <div>
      <h4>测试页面</h4>
      <el-button>Button</el-button>
      <div>
        <div id="test" style="width: 600px; height: 800px;"></div>
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
  },
  methods: {
    drawGraph() {
      this.chart = ECharts.init(document.getElementById('main'))
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
          data: [4,7,12,30]
        }]
      }
    }
  }
}
</script>
