<template>
<div class="container">
    <div class="quit">
      <nut-row class="quit-one">
        <nut-col :span="8">
          <div class="flex-content">
            <nut-button type="red" shape="circle" small class="quit-button"> 返回 </nut-button>
          </div>
        </nut-col>
        <nut-col :span="8">
          <div class="flex-content flex-content-light manage">模式选择</div>
        </nut-col>
        <nut-col :span="8">
          <div class="flex-content flex-content-refresh">
          </div>
        </nut-col>
      </nut-row>
    </div>
    <p class="p"></p>
     <nut-row>
      <nut-col :span="8" class="left">
        <div class="flex-content">
          <span>模式一</span>
        </div>
      </nut-col>
      <nut-col :span="13" class="middle">
        <div class="flex-content flex-content-light">
          
        </div>
      </nut-col>
      <nut-col :span="3" class="right">
        <div class="flex-content">
          <span class="iconfont"><a href="#">&#xe620;</a></span>
        </div>
      </nut-col>
    </nut-row>
    <p class="first"></p>
    <nut-row>
      <nut-col :span="8" class="left">
        <div class="flex-content">
          <span>模式二</span>
        </div>
      </nut-col>
      <nut-col :span="13" class="middle">
        <div class="flex-content flex-content-light">
          
        </div>
      </nut-col>
      <nut-col :span="3" class="right">
        <div class="flex-content">
          <span class="iconfont"><a href="#">&#xe620;</a></span>
        </div>
      </nut-col>
    </nut-row>
    <p class="first"></p>
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
  line-height 30px
}
.quit-button{
    color #84bcfe
    font-weight 600px
    border-radius 5px
    border 1px solid #4399fd
    width 80px
    height 24px
}
.manage{
    width 90px
    height 25px
    text-align center
    margin 0px
    font-size 18px
    font-weight 600
    margin-left 10px
}
.p {
  content: '';
  height: 1px;
  background: #dcdcdc;
  margin-bottom 16px
}


.left {
  height: 60px;
  position: relative;
}
.left span{
    width 42px
    height 20px
    font-size 14px
    font-weight 600
    position absolute
    left 28px
    top 21px
}
.middle {
  height: 60px;
}

.right {
  height: 60px;
  position: relative;
}

.right span a{
  position: absolute;
  top: 20px;
  right: 12px;
  color: #000;
  font-weight: 600;
  font-size: 21px;
}
.first {
  content: '';
  height: 1px;
  background: #dcdcdc;
}
</style>
