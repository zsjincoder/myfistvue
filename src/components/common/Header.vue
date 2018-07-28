<template>
    <div class="header">
        <div class="meanleft">
            <i class="el-icon-menu"></i><span>后台管理系统</span>
        </div>
        <div class="meanright">
          <!--用户id 下拉-->
            <el-dropdown class="username" trigger="click">
                <span class="el-dropdown-link" style="color: #fff">
                  admin<i class="el-icon-caret-bottom"></i>
                </span>
              <el-dropdown-menu slot="dropdown">
                <a><el-dropdown-item>关于我</el-dropdown-item></a>
                <a><el-dropdown-item>项目介绍</el-dropdown-item></a>
                <el-dropdown-item divided  command="loginout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div class="userimg">
              <img src="../../../static/img/img.jpg" width="50px" height="50px">
            </div>
          <!--消息通知-->
            <div class="btn-bell">
              <el-tooltip effect="dark" placement="bottom">
                <i class="el-icon-bell"></i>
              </el-tooltip>
            </div>
          <!--全屏-->
            <div class="btn-fullscreen" >
              <el-tooltip effect="dark"  placement="bottom">
                <i class="el-icon-rank"></i>
              </el-tooltip>
            </div>

         </div>
    </div>
</template>

<script>
    export default {
        name: "head"
    }
</script>

<style scoped>
.header{
  height: 70px;
  width: 100%;
  background-color: #242F42;
}
.meanleft{
  color: #fff;
  line-height: 70px;
  font-size: 22px;
  float: left;
  padding-left:20px;
}
.meanleft span{
    margin-left: 20px;
}
.meanright {
  margin-right: 40px;
  float: right;
  line-height: 70px;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
}
.btn-fullscreen{
  float:right;
  padding-right: 15px;
}
.btn-bell{
  float:right;
  padding-right:15px;
}
.el-icon-rank{
  transform: rotate(45deg);
}
.userimg{
  float: right;
}
.userimg img{
  display: block;
  border-radius:50%;
  width: 40px;
  height: 40px;
  margin-top: 15px;
  padding-right:15px;
}
.username{
  float: right;

}
</style>
