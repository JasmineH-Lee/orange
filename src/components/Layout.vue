<template>
  <div class="wrap">
    <header class="head">
      <!-- <div> -->
        <!-- <h2>StockProject</h2> -->
        <span class="logo">StockProject</span>
        <div class="sidebar-icon">
          <div class="sidebar-hidde-icon" @click="expand"><font-awesome-icon icon="bars" /></div>
        </div>
        <div class="nav-container">
          <div class="nav">
            <div class="nav-item" v-for="(menu, index) in menuList" :key="index">
              <div @click="routeTo(menu)">{{menu.name}}</div>
            </div>
          </div>
        </div>
        <div class="operate-container">
          <div class="operate-list">
            <div class="operate-item">
              <router-link to="/login">登录</router-link>
            </div>
          </div>
        </div>
      <!-- </div> -->
    </header>
    <div class="container">
      <div class="side-bar-max" v-show="sidebar === true">
        <div class="side-bar-list" v-if="currentMenu === '股票搜索'">
          <div class="side-bar-item">
            <router-link to="/stock/search">
              <font-awesome-icon icon="dollar-sign" />
              <span class="">股票搜索</span>
            </router-link>
          </div>
        </div>
        <div class="side-bar-list" v-if="currentMenu === '实时监控'">
          <div class="side-bar-item">
            <router-link to="/stock/search">
              <font-awesome-icon icon="dollar-sign" />
              <span class="">中国地图</span>
            </router-link>
          </div>
          <div class="side-bar-item">
            <router-link to="/stock/search">
              <font-awesome-icon icon="dollar-sign" />
              <span class="">板块监控</span>
            </router-link>
          </div>
          <div class="side-bar-item">
            <router-link to="/stock/search">
              <font-awesome-icon icon="dollar-sign" />
              <span class="">推荐买入股票</span>
            </router-link>
          </div>
          <div class="side-bar-item">
            <router-link to="/stock/search">
              <font-awesome-icon icon="dollar-sign" />
              <span class="">舆情监控</span>
            </router-link>
          </div>
        </div>
        <div class="side-bar-list" v-if="currentMenu === '股票管理'">
          <div class="side-bar-item">
            <router-link to="/stock/search">
              <font-awesome-icon icon="dollar-sign" />
              <span class="">提醒管理</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="side-bar-min" v-show="sidebar === false">
        <div></div>
      </div>
      <div class="main">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sidebar: true,
      currentMenu: '股票搜索',
      subMenuList: [
        {
          name: '股票搜索',
          icon: 'dollar-sign'
        }
      ],
      menuList: [
        {
          id: 0,
          name: '股票搜索',
          router: '/stock/search'
        },
        {
          id: 1,
          name: '实时监控',
          router: '/monitor/map'
        },
        {
          id: 2,
          name: '股票管理',
          router: '/manage/alarm'
        }
      ]
    }
  },
  methods: {
    expand () {
      console.log('展开/收缩')
      this.sidebar = !this.sidebar
    },
    routeTo (menu) {
      this.currentMenu = menu.name
      let router = menu.router
      this.$router.push({path: router})
      console.log('router')
    }
  }
}
</script>
<style lang="less" scoped>
@headerHeight: 60px;
@minWidth: 1200px;
@maxWidth: 1400px;
@sideBarMinWidth: 80px;
@sideBarMaxWidth: 200px;

.wrap {
  min-width: @minWidth;
  max-width: @maxWidth;
}

.head {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: @headerHeight;
  .logo {
    font-size: 24px;
    font-weight: 600;
    line-height: @headerHeight;
  }
  .sidebar-icon {
    padding: 0 20px;
    // background: #ccc;
    .sidebar-hidde-icon {
      line-height: @headerHeight;
    }
  }
  .nav-container {
    flex-grow: 2;
    // padding: 0 15px;
    .nav {
      display: flex;
      flex-flow: row nowrap;
      .nav-item {
        line-height: @headerHeight;
        padding: 0px 20px;
        cursor: pointer;
        // a {
        //   line-height: @headerHeight;
        //   font-size: 16px;
        // }
      }
    }
  }
  .operate-container {
    padding-right: 20px;
    .operate-list {
      display: flex;
      flex-flow: row nowrap;
      .operate-item {
        a {
          line-height: @headerHeight;
        }
      }
    }
  }
}
.container {
  display: flex;
  .side-bar-max {
    width: @sideBarMaxWidth;
    border: 1px solid #ccc;
    .side-bar-list {
      padding: 0 10px;
      .side-bar-item {
        margin: 10px 0;
        line-height: 20px;
        font-size: 14px;
      }
    }
  }
  .side-bar-min {
    width: @sideBarMinWidth;
    border: 1px solid #ccc;
  }
  .main {
    min-width: @minWidth - @sideBarMaxWidth;
    max-width: @maxWidth - @sideBarMinWidth;
    flex-grow: 1;
    // width: 100% - @sideBarWidth;
    border: 1px solid #333;
  }
}
</style>
