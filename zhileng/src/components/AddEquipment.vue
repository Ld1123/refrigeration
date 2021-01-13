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
          <div class="flex-content flex-content-light manage">添加设备</div>
        </nut-col>
        <nut-col :span="8">
          <div class="flex-content flex-content-refresh">
          </div>
        </nut-col>
      </nut-row>
    </div>
    <p></p>
    <div class="only">
    <input type="" name="" value="" placeholder="请输入唯一设备号" class="only-one">
    </div>
    <div class="name">
       <input type="" name="" value="" placeholder="请设置设备名称" class="name-one">
    </div>
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
p {
  content: '';
  height: 1px;
  background: #dcdcdc;
}
.only{
    margin 24px 25px 17px
    background #fafafa
    padding 0px 134px 0px 20px
    border-radius 5px
}
.only-one{
    background #fafafa
    font-size 16px
    width 300px
    height 44px
}
.name{
    margin 0px 25px 24px
    background #fafafa
    padding 0px 134px 0px 20px
    border-radius 5px
}
.name-one{
    background #fafafa
    font-size 16px
    width 300px
    height 44px
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
}
</style>
