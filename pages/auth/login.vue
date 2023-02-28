<template>

    <div class="login">
      <img class='mooltong_logo' src="~/assets/images/mooltong.png">
      <el-card>
            <div class="login-hello">로그인 하세요</div>
            <el-input class="login-userId" v-model="userId" placeholder="아이디를 입력하세요" :prefix-icon="User"  size="large" />
            <el-input class="login-userPw" v-model="userPw" placeholder="비밀번호를 입력하세요" type="password" :prefix-icon="Lock"  size="large"/>

            <el-divider class="login-divider" border-style="dashed" />
            
            <el-button
              class="login-button"
              type="primary"
              size="large">로그인 하기</el-button>

            <el-button
              class="sign-button"
              type="success"
              size="large">지금 시작 하세요</el-button>
            
          <a class="forgot-password" href="https://oxfordinformatics.com/">암호가 생각나지 않으세요?</a>
      </el-card>
      <img class='grab_logo' src="~/assets/images/grab-logo.png">
      <!-- <el-image style="width: 100px; height: 100px" src='~/assets/images/grab-logo.png' fit="contain" /> -->
      <!-- <div class='grab_logo_area'>
      <img class='grab_logo' src="~/assets/images/grab-logo.png"> -->
      <!-- </div> -->
    
  </div>
  



</template>

<script setup>
import { User, Lock } from '@element-plus/icons-vue'

definePageMeta({
  layout: "login",
});

const userId = ref('') ;
const userPw = ref('') ;

const login = () =>{

   console.log('로그인 go');

}

</script>

<style scoped>


.login {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top : 100px ;
}

.login-hello {
  display: flex;
  justify-content: center;
  font-size : 19px ;
  font-style: oblique;
}

.login .el-card {
  width:420px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
}

.login-userId {
  width: 100%;
  margin-top: 20px;

}

.login-userPw {
  width: 100%;
  margin-top: 10px;

}

.login-button {
  width: 100%;
  margin-top: 0px;
  margin-left: 0px;
}

.sign-button {
  width: 100%;
  margin-top: 10px;
  margin-left: 0px;
}

.forgot-password {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.login-divider {

  margin-top: 30px;

}

.grab_logo {
  width : 160px ;
  /* height : 200px ; */
  margin-top: 50px;
}

.mooltong_logo {
  width : 220px ;
  /* height : 200px ; */
  margin-top: 50px;
  margin-bottom: 50px;
}

.grab_logo_area {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top : 100px ;

}


</style>