<template>
  <div class="container">
    <div class="quit">
      <nut-row class="quit-one">
        <nut-col :span="8">
          <div class="flex-content">
            <nut-button type="red" shape="circle" small class="quit-button">
              退出
            </nut-button>
          </div>
        </nut-col>
        <nut-col :span="8">
          <div class="flex-content flex-content-light manage">设备列表页</div>
        </nut-col>
        <nut-col :span="8">
          <div class="flex-content flex-content-refresh">
            <nut-button type="red" shape="circle" small class="refresh">
              刷新
            </nut-button>
          </div>
        </nut-col>
      </nut-row>
    </div>
    <p class="first"></p>
    <nut-row>
      <nut-col :span="8" class="left">
        <div class="flex-content">
          <span class="iconfont iconfont-color">&#xe60f;</span>
          <h6>HT0002535</h6>
          <span>浑南设备1号</span>
        </div>
      </nut-col>
      <nut-col :span="13" class="middle">
        <div class="flex-content flex-content-light">
          <p>当前维度: <i>35</i>℃</p>
          <span>设备在线</span>
        </div>
      </nut-col>
      <nut-col :span="3" class="right">
        <div class="flex-content">
          <span class="iconfont">&#xe620;</span>
        </div>
      </nut-col>
    </nut-row>
    <p class="p"></p>
    <nut-row>
      <nut-col :span="8" class="left">
        <div class="flex-content">
          <span class="iconfont iconfont-color-two">&#xe609;</span>
          <h6 class="second">HT0002535</h6>
          <span>浑南设备1号</span>
        </div>
      </nut-col>
      <nut-col :span="13" class="middle">
        <div class="flex-content flex-content-light">
          <p class="middle-first">当前维度: <i>无</i></p>
          <span class="middle-second">设备未在线</span>
        </div>
      </nut-col>
      <nut-col :span="3" class="right">
        <div class="flex-content">
          <span class="iconfont">&#xe620;</span>
        </div>
      </nut-col>
    </nut-row>
    <p class="p"></p>
    <nut-row>
      <nut-col :span="8" class="left">
        <div class="flex-content">
          <span class="iconfont iconfont-color-two">&#xe609;</span>
          <h6>HT0002535</h6>
          <span>浑南设备1号</span>
        </div>
      </nut-col>
      <nut-col :span="13" class="middle">
        <div class="flex-content flex-content-light">
          <p class="middle-first">当前维度: <i>无</i></p>
          <span class="middle-second">设备未在线</span>
        </div>
      </nut-col>
      <nut-col :span="3" class="right">
        <div class="flex-content">
          <span class="iconfont">&#xe620;</span>
        </div>
      </nut-col>
    </nut-row>
    <p class="p"></p>
    <button type="button" class="button">添加设备</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>

<style lang="stylus" scoped>
.left {
  height: 60px;
  position: relative;
}

.left .iconfont-color {
  color: #6dd400;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 10px;
  left: 14px;
}

.left .iconfont-color-two {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 10px;
  left: 14px;
  color #999999
}

.left h6 {
  font-size: 14px;
  height: 20px;
  font-family: songti;
  position: absolute;
  top: 8px;
  left: 38px;
}

.left span {
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  font-family: songti;
  position: absolute;
  top: 32px;
  left: 38px;
  margin-bottom: 8px;
  color: #606060;
  font-weight: 600;
}

.middle {
  height: 60px;
  position: relative;
}

.middle p {
  color: #686868;
  position: absolute;
  top: 8px;
  right: 0;
}

.middle .middle-first {
  color: #686868;
  position: absolute;
  top: 8px;
  right: 18.765PX;
}
.middle .middle-first i{
  color #000000
}

.middle i {
  color: #4399fd;
}

.middle span {
  color: #92df41;
  font-size: 12px;
  position: absolute;
  top: 33px;
  right: 0;
  height: 17px;
  line-height: 17px;
}
.middle .middle-second{
  color: #a6a6a6;
  font-size: 12px;
  position: absolute;
  top: 33px;
  right: 0;
  height: 17px;
  line-height: 17px;
} 

.right {
  height: 60px;
  position: relative;
}

.right span {
  position: absolute;
  top: 20px;
  right: 12px;
  color: #000;
  font-weight: 600;
  font-size: 21px;
}

.container {
  width: 375px;
  height: 667px;
  position: absolute;
  top: 0;
}

.quit {
  padding-top: 64px;
}

.quit .quit-one {
  box-shadow: inset 0px 7px 10px #f6f6f6;
  padding: 8px 14px;
  line-height: 30px;
}

.quit-button {
  color: #84bcfe;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid #4399fd;
  width: 80px;
  height: 24px;
}

.flex-content-refresh {
  padding-top: 3px;
}

.refresh {
  color: #84bcfe;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid #4399fd;
  width: 80px;
  height: 24px;
  float: right;
}

.manage {
  width: 90px;
  height: 25px;
  text-align: center;
  margin: 0px;
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
}

.p {
  content: '';
  height: 1px;
  background: #dcdcdc;
}

.first {
  content: '';
  height: 1px;
  background: #dcdcdc;
  margin-bottom: 16px;
}
.button{
    background #4399fd
    width 325px
    height 48px
    line-height 48px
    border-radius 4px
    margin-right: 25px;
    margin-left: 25px;
    position relative
    color #ffffff
    font-size 18px
    font-family NSimSun
    font-weight bold
    margin-top 301px
}
</style>
