<template>
  <div class="stock-list">
    <div class="title">股票搜索</div>
    <!-- <div> -->
    <div class="search-field">
      <el-form label-width="80px">
        <el-form-item label="股票代码">
          <el-col :span="6">
            <el-input placeholder="请输入要查询的股票代码" v-model="stockId"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getList">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="stock-content">
      <div class="stock-table">
        <el-table :data="stockList" border>
          <el-table-column
            prop="id"
            label="股票代码">
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期">
          </el-table-column>
          <el-table-column
            prop="buy_num"
            label="买入信号数量">
          </el-table-column>
          <el-table-column
            prop="sold_num"
            label="卖出信号数量">
          </el-table-column>
          <el-table-column
            prop="buy_goal"
            label="买入得分">
          </el-table-column>
          <el-table-column
            prop="zxst_num"
            label="ZXST数量">
          </el-table-column>
          <el-table-column
            prop="zxst_goal"
            label="ZXST得分">
          </el-table-column>
          <el-table-column
            prop="incident_num"
            label="事件数量">
          </el-table-column>
          <el-table-column
            prop="incident_goal"
            label="事件得分">
          </el-table-column>
        </el-table>
      </div>
      <div class="stock-line-chart">
        <div id="stockLine" ref="stockLine" style="width: 800px; height: 400px;">

        </div>
      </div>
      <div class="stock-table">
        <el-table :data="stockList" border>
          <el-table-column
            prop="id"
            label="股票所属行业">
          </el-table-column>
          <el-table-column
            prop="date"
            label="买入得分">
          </el-table-column>
          <el-table-column
            prop="buy_num"
            label="总买入信号">
          </el-table-column>
          <el-table-column
            prop="sold_num"
            label="总卖出信号">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      stockId: '',
      stockList: [
        {
          id: 1,
          date: '2018-08-31',
          buy_num: 100,
          sold_num: 200,
          buy_goal: 1000,
          sold_goal: 1200,
          zxst_num: 120,
          zxst_goal: 3000,
          incident_num: 20,
          incident_goal: 30
        }
      ],
      stockLineChart: null
    }
  },
  created () {
    this.getList()
  },
  mounted () {
    this.drawLineChart()
  },
  methods: {
    drawLineChart () {
      this.stockLineChart = this.$echarts.init(this.$refs.stockLine)
      let option = {
        title: {
          text: '买入得分折线图'
        },
        tooltip: {
          // 触发类型
          trigger: 'axis'
        },
        // 图例组件
        legend: {
          data: ['Line1', 'Line2']
        },
        grid: {
          left: '8%',
          right: '8%',
          bottom: '5%',
          // 是否包含刻度标签
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          // 坐标轴类型
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Line1',
            type: 'line',
            stack: 'buy',
            data: [4, 7, 12, 10, 13, 9, 8]
          },
          {
            name: 'Line2',
            type: 'line',
            stack: 'sold',
            data: [8, 7, 15, 4, 12, 10, 13]
          }
        ]
      }
      this.stockLineChart.setOption(option)
    },
    reset () {
      this.stockId = ''
      this.getList()
    },
    getList () {
      let params = {
        stock_id: this.stockId
      }
      console.log('get list')
      console.log(params)
      // this.drawLineChart()
    }
  }
}
</script>
<style lang="less">
.stock-list {
  padding: 0 20px;
  .search-field {

  }
  .stock-content {
    .stock-table {
      margin: 20px 0;
    }
    .stock-line-chart {
      margin: 20px 0;
    }
    // padding: 0 20px;
  }
}
</style>
