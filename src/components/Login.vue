<template>
  <div class="container">
    <div class="login">
      <h2>登录</h2>
    </div>
    <p></p>
    <div class="accont">
      <span class="accont-one">账号</span>
      <input type="" name="" value="" class="accont-two" placeholder="请输入手机号码">
    </div>
    <div class="password">
      <span class="password-one">密码</span>
      <input type="" name="" value="" class="password-two" placeholder="请输入密码">
    </div>
    <button type="button">登录</button>
    <div class="prompt">
        <div class="prompt-one">
            <a href="#">忘记密码？</a>
        </div>
        <div class="prompt-two">
            <a href="#" class="one">暂无账号？</a>
            <a href="#" class="two">去注册</a>
        </div>
        
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
.login {
  padding-top: 64px;
}

.login h2 {
  display: block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: rgba(51, 51, 51, 1);
  font-size: 18px;
  box-shadow: inset 0px 7px 10px #f6f6f6;
}

p {
  content: '';
  height: 1px;
  background: #dcdcdc;
}

.accont {
  height: 44px;
  background: #fafafa;
  margin-top: 83px;
  position: relative;
  margin-right: 25px;
  margin-left: 25px;
}

.accont .accont-one {
  position: absolute;
  top: 11px;
  left: 20px;
  color: #363636;
}

.accont .accont-two {
  position: absolute;
  top: 13px;
  left: 85px;
  font-size: 16px;
  background: #fafafa;
}

.password {
  margin-top: 17px;
  height: 44px;
  background: #fafafa;
  position: relative;
  margin-right: 25px;
  margin-left: 25px;
}

.password .password-one {
  position: absolute;
  top: 11px;
  left: 20px;
  color: #363636;
}

.password .password-two {
  position: absolute;
  top: 13px;
  left: 85px;
  font-size: 16px;
  background: #fafafa;
}
button{
    background #4399fd
    width 325px
    height 48px
    line-height 48px
    border-radius 4px
    margin-right: 25px;
    margin-left: 25px;
    margin-top 116px
    position relative
    color #ffffff
    font-size 18px
}
.prompt{
    width 325px
    margin-right: 25px;
    margin-left: 25px;
    margin-top 9px
}
.prompt .prompt-one{
    float left
}
.prompt .prompt-one a{
    color #84bcfe
    font-weight 600
    font-size 14px
}
.prompt .prompt-two{
    float right
}
.prompt .prompt-two .one{
    color rgba(51,51,51,1)
    font-size 14px
}
.prompt .prompt-two .two{
    color #84bcfe
    font-weight 600
    font-size 14px
}
</style>
