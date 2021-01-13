<template>
  <div class="container">
    <div class="quit">
      <nut-row class="quit-one">
        <nut-col :span="8">
          <div class="flex-content">
            <nut-button type="red" shape="circle" small class="quit-button">
              返回
            </nut-button>
          </div>
        </nut-col>
        <nut-col :span="8">
          <div class="flex-content flex-content-light manage">模式选择</div>
        </nut-col>
        <nut-col :span="8">
          <div class="flex-content flex-content-refresh"></div>
        </nut-col>
      </nut-row>
    </div>

    <div class="model-one">
      <nut-row type="flex" gutter="10" align="center">
        <nut-col :span="6">
          <div class="flex-content flex-content-height"></div>
        </nut-col>
        <nut-col :span="12">
          <div class="flex-content flex-content-light">
            <p class="tmp">当前温度: -16.8℃</p>
          </div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-height"></div>
        </nut-col>
      </nut-row>

      
    </div>

    <div class="delete">
      <div class="one">工作状态: <span>空闲</span></div>
      <div class="two">当前报警状态: <span>无</span></div>
      <div class="three">制冷启动延时: <span>无</span></div>
      <div class="four">压力保护: <span>无</span></div>
    </div>
    <p class="p"></p>

    <div class="parameter">
      <div class="one">
        <p></p>
        <div>设定数值参数</div>
      </div>

      <div class="two">
        <div>
          <p>当前工作模式 : <span>模式二</span></p>
        </div>
        <div class="hand"><button>切换模式一</button></div>
      </div>

      <p class="p"></p>

      <div class="three">
        <nut-row>
          <nut-col :span="12" class="three-one">
            <div class="flex-content"><span>设定温度 (℃):</span></div>
          </nut-col>
          <nut-col :span="12" class="three-two">
            <div class="flex-content flex-content-light">
                <span>上限</span>
            <i>-14.5</i>
            </div>
          </nut-col>
        </nut-row>
      </div>

        <p class="p"></p>

      <div class="four">
          <div class="four-one">
                <span>下限</span>
            <i>-14.5</i>
            </div>
      </div>

      <p class="p"></p>

      <div class="three">
          <div class="three">
        <nut-row>
          <nut-col :span="12" class="three-one">
            <div class="flex-content"><span>除霜周期 (h):</span></div>
          </nut-col>
          <nut-col :span="12" class="three-two">
            <div class="flex-content flex-content-light">
            <i>3</i>
            </div>
          </nut-col>
        </nut-row>
      </div>

      </div>

       <p class="p"></p>

      <div class="three">
          <div class="three">
        <nut-row>
          <nut-col :span="12" class="three-one">
            <div class="flex-content"><span>超温报警范围 (℃)</span></div>
          </nut-col>
          <nut-col :span="12" class="three-two">
            <div class="flex-content flex-content-light">
            <i>3</i>
            </div>
          </nut-col>
        </nut-row>
      </div>

      </div>

       <p class="p"></p>

      <div class="three">
          <div class="three">
        <nut-row>
          <nut-col :span="12" class="three-one">
            <div class="flex-content"><span>报警时间 (min)</span></div>
          </nut-col>
          <nut-col :span="12" class="three-two">
            <div class="flex-content flex-content-light">
            <i>3</i>
            </div>
          </nut-col>
        </nut-row>
      </div>

      </div>

       <p class="p"></p>

      <div class="three">
          <div class="three">
        <nut-row>
          <nut-col :span="12" class="three-one">
            <div class="flex-content"><span>温度修正 (℃)</span></div>
          </nut-col>
          <nut-col :span="12" class="three-two">
            <div class="flex-content flex-content-light">
            <i>3</i>
            </div>
          </nut-col>
        </nut-row>
      </div>

      </div>

       <p class="p"></p>

      <div class="five">
          <nut-row>
    <nut-col :span="6">
        <div class="flex-content">三相电压:</div>
    </nut-col>
    <nut-col :span="6" class="five-child">
        <div class="flex-content flex-content-light">A <span>372V</span></div>
    </nut-col>
    <nut-col :span="6" class="five-child">
        <div class="flex-content">B <span>372V</span></div>
        </nut-col>
    <nut-col :span="6" class="five-child">
        <div class="flex-content flex-content-light">C <span>372V</span></div>
    </nut-col>
          </nut-row>
      </div>

      <p class="p"></p>

      <div class="five">
          <nut-row>
    <nut-col :span="6">
        <div class="flex-content">三相电流:</div>
    </nut-col>
    <nut-col :span="6" class="five-child">
        <div class="flex-content flex-content-light">A <span>25.8A</span></div>
    </nut-col>
    <nut-col :span="6" class="five-child">
        <div class="flex-content">B <span>36.4A</span></div>
        </nut-col>
    <nut-col :span="6" class="five-child">
        <div class="flex-content flex-content-light">C <span>24.9A</span></div>
    </nut-col>
          </nut-row>
      </div>

<p class="p"></p>

    <div class="six">
             <nut-row>
    <nut-col :span="8">
        <div class="flex-content">压缩机压力值:</div>
    </nut-col>
    <nut-col :span="8" class="six-child">
        <div class="flex-content flex-content-light">高压 <span>1.5 MPa</span></div>
    </nut-col>
    <nut-col :span="8" class="six-child">
        <div class="flex-content six-child-child">低压 <span>0.5 MPa</span></div>
    </nut-col>
             </nut-row>
    </div>
    <p class="p"></p>
    
          <div class="three">
        <nut-row>
          <nut-col :span="12" class="three-one">
            <div class="flex-content"><span>温度 :</span></div>
          </nut-col>
          <nut-col :span="12" class="three-two">
            <div class="flex-content flex-content-light">
            <span class="three-two-child">60% RH</span>
            </div>
          </nut-col>
        </nut-row>
      </div>

 <p class="p"></p>
    
          <div class="three">
        <nut-row>
          <nut-col :span="12" class="three-one">
            <div class="flex-content"><span>环境温度 :</span></div>
          </nut-col>
          <nut-col :span="12" class="three-two">
            <div class="flex-content flex-content-light">
            <span class="span">41 ℃</span>
            </div>
          </nut-col>
        </nut-row>
      </div>
    <p class="p"></p>
    </div>
    <button type="button" class="button">保存</button>
    <div class="bg">
      
    </div>
    <div class="change">
      <p>密码</p>
      <input type="text" name="" id="" placeholder="请输入模式一密码"> 
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
.parameter {
  width: 347px;
  height: 503px;
  margin: 0px 15px 53px 13px;
}

.parameter .p {
  content: '';
  height: 1px;
  width: 347px;
  background: #dedede;
  margin-top 8px
}


.parameter .one {
  height: 24px;
  line-height: 24px;
  display: flex;
  margin-bottom: 8px;
}

.parameter .one p {
  content: '';
  height: 24px;
  width: 6px;
  background: #4398fc;
}

.parameter .one div {
  width: 96px;
  height: 22px;
  line-height: 22px;
  font-size: 16px;
  color: #000;
  margin-left: 4px;
  font-weight: 600;
}

.parameter .two {
  width: 347px;
  height: 24px;
  margin-bottom: 8px;
}

.parameter .two p { 
  display block
  width 154px
  font-size: 15px;
  float: left;
}

.parameter .two span {
  color: #68acfd;
}

.parameter .two .hand button {
  float: right;
  width: 88px;
  height: 24px;
  line-height: 24px;
  color: #ffffff;
  background: #4398fc;
  text-align: center;
  border-radius: 4px;
}
.three{
    height 24px
    width 347px
    line-height 24px
}
.three .three-two div{
    float right
    display flex
}
.three .three-two div i{
    display block
    width 88px
    height 24px
    line-height 24px
    border 1px solid #000
    color #161616
    border-radius 4px
    margin-left 16px
    text-align center
    font-size 12px
}
.three .three-two .three-two-child{
    color #68acfd;
    margin-right 14px
}
.three .three-two div .span{
    color #68acfd;
    margin-right 20px
}
.four{
    width 347px
    height 24px
    line-height 24px
}
.four .four-one{
    float right
    display flex
}
.four .four-one i{
    display block
    width 88px
    height 24px
    line-height 24px
    border 1px solid #000
    color #161616
    border-radius 4px
    margin-left 16px
    text-align center
    font-size 12px
}
.five-child{
    text-align center
}
.five-child span{
    color #68acfd;
}
.six-child{
    text-align center
}
.six-child-child{
    margin-right 10px
}
.six-child span{
    color #68acfd;
}
.bg{
  position: absolute;
  width: 375px;
  height: 961px;
  left: 0;
  top: 64px;
  background-color: rgba(0,0,0, 0.25);
}
.change{
  width 230px
  height 132px
  background #ffffff
  position absolute
  top 284px
  right 72px
  border 1px solid rgba(0,0,0, 0.25);
  border-radius 4px
}
.change p{
  font-size 18px
  font-weight 600
  width 36px
  height 25px
  margin 14px auto 8px
}
.change input{
  display block
  width 198px
  height 26px
  margin 0px auto
  font-size 14px
  text-align center
  border 1px solid #4a4a4a
  border-radius 2px
}
.change .button-one{
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
.change .button-two{
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








.container {
  width: 375px;
  height: 947px;
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
  font-weight: 600px;
  border-radius: 5px;
  border: 1px solid #4399fd;
  width: 80px;
  height: 24px;
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

.model-one {
  width: 375px;
  height: 98px;
  background: url('../image/beijing@2x.png');
  background-size: cover;
  position: relative;
  margin-bottom: 14px;
}

.flex-content-light .tmp {
  text-align: center;
  display: block;
  width: 165px;
  height: 28px;
  line-height: 26px;
  background: #ffffff;
  border-radius: 30px;
  border: 1px solid #ffffff;
  margin-top: 35px;
  color: #68acfd;
  font-size: 16px;
  font-weight: 600;
}

.cold {
  text-align: center;
  display: block;
  width: 102px;
  height: 28px;
  line-height: 26px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #ffffff;
  margin-top: 13px;
  margin-left: 14px;
  color: #68acfd;
  font-size: 16px;
  box-shadow: 0px 0px 20px #68acfd;
}

.frost {
  text-align: center;
  display: block;
  width: 102px;
  height: 28px;
  line-height: 26px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #ffffff;
  margin-top: 13px;
  margin-left: 20px;
  color: #68acfd;
  font-size: 16px;
  box-shadow: 0px 0px 20px #68acfd;
}

.auto {
  text-align: center;
  display: block;
  width: 102px;
  height: 28px;
  line-height: 26px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #ffffff;
  margin-top: 13px;
  margin-left: 20px;
  color: #68acfd;
  font-size: 16px;
  box-shadow: 0px 0px 20px #68acfd;
}

.delete {
  height: 88px;
  width: 347px;
  margin-left: 13px;
  margin-bottom: 8px;
}

.delete .one {
  width: 102px;
  height: 22px;
  font-size: 15px;
  color: #858585;
}

.delete .one span {
  color: #e23333;
}

.delete .two {
  width: 114px;
  height: 22px;
  font-size: 15px;
  color: #858585;
}

.delete .two span {
  color: #e23333;
}

.delete .three {
  width: 114px;
  height: 22px;
  font-size: 15px;
  color: #858585;
}

.delete .three span {
  color: #e23333;
}

.delete .four {
  width: 114px;
  height: 22px;
  font-size: 15px;
  color: #858585;
}

.delete .four span {
  color: #e23333;
}

.five .hand button {
  float: right;
  width: 88px;
  height: 24px;
  line-height: 24px;
  color: #ffffff;
  background: #4398fc;
  text-align: center;
  border-radius: 4px;
}

.p {
  content: '';
  height: 4px;
  width: 348px;
  display: block;
  background: #d8d8d8;
  margin: 0px auto 8px;
}

.button {
  background: #4399fd;
  width: 325px;
  height: 48px;
  line-height: 48px;
  border-radius: 4px;
  margin-right: 25px;
  margin-left: 25px;
  position: relative;
  color: #ffffff;
  font-size: 18px;
  font-family: NSimSun;
  font-weight: bold;
}
</style>
