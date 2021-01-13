<template>
  <div class="container">
    <div class="forget">
      <nut-row class="forget-one">
        <nut-col :span="8">
          <div class="flex-content">
            <nut-button type="red" shape="circle" small class="return">
              返回
            </nut-button>
          </div>
        </nut-col>
        <nut-col :span="8">
          <div class="flex-content flex-content-light">忘记密码</div>
        </nut-col>
        <nut-col :span="8">
          <div class="flex-content"></div>
        </nut-col>
      </nut-row>
    </div>
    <p></p>
    <div class="phone">
      <span class="phone-one"
        ><img src="@/image/shoujihaoma_icon@2x.png" alt=""
      /></span>
      <input
        type=""
        name=""
        value=""
        class="phone-two"
        placeholder="请输入手机号码"
      />
      
    </div>
    <div class="phone">
      <span class="phone-one"
        ><img src="@/image/yanzhengma_icon@2x.png" alt=""
      /></span>
      <input
        type=""
        name=""
        value=""
        class="phone-two"
        placeholder="请输入验证码"
      />
      <nut-button 
    type="light"
   class="code">
    59秒
  </nut-button>
    </div>
    <div class="phone">
      <span class="phone-one"
        ><img src="@/image/mima_icon@2x.png" alt=""
      /></span>
      <input
        type=""
        name=""
        value=""
        class="phone-two"
        placeholder="请设置新密码"
      />
    </div>
    <div class="phone">
      <span class="phone-one"
        ><img src="@/image/mimaqueren_icon@2x.png" alt=""
      /></span>
      <input
        type=""
        name=""
        value=""
        class="phone-two"
        placeholder="请再次输入密码"
      />
    </div>
    <button type="button" class="button">确认</button>
    <div class="phone-one-first">
      <img src="@/image/gantanhao_icon@2x.png" alt="" />
      <span>手机号不能为空</span>
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
.forget {
  padding-top: 64px;
}

.forget-one {
  box-shadow: inset 0px 7px 10px #f6f6f6;
  padding-top: 9px;
  padding-left: 14px;
}

.return {
  color: #84bcfe;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid #4399fd;
  width: 80px;
  height: 24px;
}

.flex-content-light {
  text-align: center;
  font-weight: 550;
  font-size: 18px;
  color: rgba(51, 51, 51, 1);
  height: 25px;
  line-height: 25px;
}

p {
  content: '';
  height: 1px;
  background: #dcdcdc;
  margin-top: 9px;
}

.phone {
  margin-top: 18px;
  height: 44px;
  background: #fafafa;
  position: relative;
  margin-right: 25px;
  margin-left: 25px;
}
.code{
    width 84px
    height 28px
    line-height 28px
    color: #84bcfe;
    font-weight: 600;
    border-radius: 5px;
    border: 1px solid #4399fd;
    font-size 12px
    padding 0px
    position absolute
    top 10px
    right 12px
}

.phone-one-first {
  display: inline-block;
  width: 162px;
  height: 22px;
  line-height: 22px;
  border: 1px solid #dcdcdc;
  position: absolute;
  top: 97px;
  left: 106px;
  background: #ffffff;
}

.phone-one-first img {
  display: block;
  width: 15px;
  height: 15px;
  position: absolute;
  left: 38px;
  top: 3px;
}

.phone-one-first span {
  color: #e43a3a;
  font-size: 12px;
  position: absolute;
  display: block;
  height: 13px;
  line-height: 13px;
  top: 4px;
  left: 61px;
  font-weight: 600;
}

.phone .phone-one img {
  width: 35px;
  height: 36px;
  position: absolute;
  top: 4px;
  left: 16px;
}

.phone .phone-two {
  position: absolute;
  top: 13px;
  left: 80px;
  font-size: 16px;
  background: #fafafa;
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
  margin-top: 26px;
}
</style>
