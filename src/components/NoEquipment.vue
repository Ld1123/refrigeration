<template>
  <div class="container">
    <div class="quit">
      <nut-row class="quit-one">
        <nut-col :span="8">
          <div class="flex-content">
            <nut-button type="red" shape="circle" small class="quit-button"> 退出 </nut-button>
          </div>
        </nut-col>
        <nut-col :span="8">
          <div class="flex-content flex-content-light manage">设备列表页</div>
        </nut-col>
        <nut-col :span="8">
          <div class="flex-content flex-content-refresh">
            <nut-button type="red" shape="circle" small class="refresh"> 刷新 </nut-button>
          </div>
        </nut-col>
      </nut-row>
    </div>
    <p></p>
    <div class="no-manage">
        <span>暂无设备</span>
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
    font-weight 600
    border-radius 5px
    border 1px solid #4399fd
    width 80px
    height 24px
}
.flex-content-refresh{
    padding-top 3px
}
.refresh{
    color #84bcfe
    font-weight 600
    border-radius 5px
    border 1px solid #4399fd
    width 80px
    height 24px
    float right 
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
.no-manage{
    padding 204px 21px 226px 133px
    background #fafafa
    margin 24px 25px
    color #b3b3b3
    font-size 16px
    font-weight 600
    font-family NSimSun
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
