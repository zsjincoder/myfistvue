<template>
<div>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-row>
        <el-col>
          <el-card shadow="hover" class="mgb20">
            <div class="user-info">
              <img src="static/img/img.jpg" class="user-avator" alt="头像">
              <div class="user-info-cont">
                <div class="user-info-name">admin</div>
                <div class="">超级管理员</div>
              </div>
            </div>
            <div class="user-info-list">上次登录时间：<span>2018-06-12</span></div>
            <div class="user-info-list">上次登录地点：<span>重庆</span></div>
          </el-card>
          <el-card shodow="hover">
            <div slot="header" class="clearfix">
                <span>语言详情</span>
            </div>
            Vue
            <el-progress :percentage="57" color="#42b983"></el-progress>
            Javascript
            <el-progress :percentage="30" color="#f1e05a"></el-progress>
            CSS
            <el-progress :percentage="11" color="#ccc"></el-progress>
            HTML
            <el-progress :percentage="1" color="#f56C6C"></el-progress>
          </el-card>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="16">
      <el-row :gutter="20" class="mgb20">
        <el-col :span="8">
          <el-card shodow="hover" :body-style="{padding:'0px'}">
            <div class="grid-content grid-con-1">
              <i class="el-icon-view grid-con-icon"></i>
              <div class="grid-cont-right">
                <div class="grid-cont-num">1000</div>
                <div>用户访问量</div>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shodow="hover" :body-style="{padding:'0px'}">
            <div class="grid-content grid-con-2">
              <i class="el-icon-message grid-con-icon"></i>
              <div class="grid-cont-right">
                <div class="grid-cont-num">1000</div>
                <div>系统消息</div>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shodow="hover" :body-style="{padding:'0px'}">
            <div class="grid-content grid-con-3">
              <i class="el-icon-goods grid-con-icon"></i>
              <div class="grid-cont-right">
                <div class="grid-cont-num">1000</div>
                <div>数量</div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-card shadow="hover" :body-style={height:'304px'}>
        <div slot="header" class="clearfix">

        </div>
      </el-card>
    </el-col>
  </el-row>

</div>
</template>

<script>
    export default {
        name: "Homepage"
    }
</script>

<style >
  .grid-content{
    display: flex;
    align-items: center;
    height: 100px;
  }
  .grid-con-icon{
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
  }
  .grid-cont-num{
    font-size: 30px;
    font-weight: bold;
  }
  .grid-cont-right{
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #999;
  }
.user-info{
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}
  .user-avator{
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  .user-info-cont{
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
  }
  .user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}
  .user-info-list{
    font-size: 14px;
    color: #999;
    line-height: 25px;
  }
  .user-info-list span {
    margin-left: 70px;
  }
  .mgb20 {
     margin-bottom: 20px;
   }
  .grid-con-1 .grid-con-icon{
    background: #2D8CF0;
  }
  .grid-con-2 .grid-con-icon{
    background: #64D572;
  }
  .grid-con-3 .grid-con-icon{
    background: #F25E43;
  }
  .grid-con-1 .grid-cont-num{
   color: #2D8CF0;
  }
  .grid-con-2 .grid-cont-num{
    color: #64D572;
  }
  .grid-con-3 .grid-cont-num{
    color: #F25E43;
  }
</style>
