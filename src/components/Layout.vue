<template>
  <div class="wrap">
    <div class="header-wrapper">
      <header class="head">
        <div class="head-container">
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
        </div>
      </header>
    </div>
    <div class="container-wrapper">
      <div class="container">
        <div class="content">
          <div class="side-bar">
            <div class="side-bar-max" v-show="sidebar === true">
              <div class="side-bar-list" v-if="currentMenu === '股票搜索'">
                <div class="side-bar-item">
                  <router-link to="/stock/search">
                    <font-awesome-icon :icon="'dollar-sign'" />
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
          </div>
          <div class="main">
            <div class="main-warpper">
              <router-view/>
            </div>
          </div>
        </div>
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
@headerBgColor: #ccc;

html, body {
  margin: 0;
}

.wrap {
  overflow: hidden;
  // width: 100%;
}

.header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  .head {
    position: relative;
    top: 0;
    left: 0;
    height: @headerHeight;
    background: @headerBgColor;
    .head-container {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      width: 1200px;
      margin: 0 auto;
      .logo {
        font-size: 24px;
        font-weight: 600;
        line-height: @headerHeight;
      }
      .sidebar-icon {
        padding: 0 20px;
        .sidebar-hidde-icon {
          line-height: @headerHeight;
        }
      }
      .nav-container {
        flex-grow: 2;
        .nav {
          display: flex;
          flex-flow: row nowrap;
          .nav-item {
            line-height: @headerHeight;
            padding: 0px 20px;
            cursor: pointer;
          }
        }
      }
      .operate-container {
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
  }
}
.container-wrapper {
  padding: 0;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  .container {
    height: calc(100% - @headerHeight);
    margin-top: @headerHeight;
    overflow: hidden;
    .content {
      width: 1200px;
      margin: 0 auto;
      height: 100%;
      overflow: hidden;
      .side-bar {
        position: fixed;
        top: 0;
        bottom: 0;
        margin-top: @headerHeight;
        overflow: hidden;
        .side-bar-max {
          width: @sideBarMaxWidth;
          // border: 1px solid #ccc;
          height: 100%;
          overflow: scroll;
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
      }
      .main {
        padding-left: @sideBarMaxWidth;
        overflow: scroll;
        .main-warpper {
          border: 1px solid #ccc;
          padding: 20px;
        }
      }
    }
  }
}
</style>
