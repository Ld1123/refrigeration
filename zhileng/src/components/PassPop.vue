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
     <div class="bg">
      
    </div>
    <div class="delete">
      <p>密码</p>
      <input type="text" name="" id="" placeholder="请输入模式密码"> 
      <div><button class="button-one">取消</button></div>
      <i><button class="button-two">确定</button></i>
    </div>
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
.bg{
  position: absolute;
  width: 375px;
  height: 603px;
  left: 0;
  top: 64px;
  background-color: rgba(0,0,0, 0.25);
}
.delete{
  width 230px
  height 132px
  background #ffffff
  position absolute
  top 282px
  right 72px
  border 1px solid rgba(0,0,0, 0.25);
  border-radius 4px
}
.delete p{
  font-size 18px
  font-weight 600
  width 36px
  height 25px
  margin 14px auto 8px
}
.delete input{
  display block
  width 198px
  height 26px
  margin 0px auto
  font-size 16px
  border 1px solid #4a4a4a
  border-radius 2px
  text-align center
}
.delete .button-one{
  width 68px
  height 26px
  line-height 24px
  text-align center
  border 2px solid #bababa
  color #4a4a4a
  position absolute
  bottom 17px
  left 23px
}
.delete .button-two{
  display block
  width 68px
  height 26px
  line-height 24px
  text-align center
  border 2px solid #4398fc
  background #4398fc
  position absolute
  bottom 17px
  right 23px
  color #ffffff
}
</style>
