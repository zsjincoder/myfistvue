<template>
  <div class="aside">
      <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
               text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
        <template v-for="item in items">
          <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i><span slot="title">{{item.title}}</span>
            </template>
            <el-menu-item v-for="(subitem,i) in item.subs " :key="i" :index="subitem.index">
              {{subitem.title}}
            </el-menu-item>
          </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
              <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
  </div>
</template>

<script>
    export default {
        name: "Aside",
      data() {
        return {
          collapse: false,
          items: [
            {
              icon: 'el-icon-setting',
              index: 'homepage',
              title: '系统首页'
            },
            {
              icon: 'el-icon-tickets',
              index: 'Main',
              title: '基础表格'
            },
            {
              icon: 'el-icon-date',
              index: '3',
              title: '表单相关',
              subs: [
                {
                  index: 'form',
                  title: '基本表单'
                },
                {
                  index: 'editor',
                  title: '富文本编辑器'
                },
                {
                  index: 'markdown',
                  title: 'markdown编辑器'
                },
                {
                  index: 'upload',
                  title: '文件上传'
                }
              ]
            },
            {
              icon: 'el-icon-error',
              index: '404',
              title: '404页面'
            }
          ]
        }
      },
      computed:{
        onRoutes(){
          return this.$route.path.replace('/','');
        }
      }

    }
</script>

<style scoped>
  .aside{
    background-color: #324157;
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom:0;
  }
  .sidebar-el-menu:not(.el-menu--collapse){
    width: 250px;
  }
  .sidebar > ul {
    height:100%;
  }
</style>
