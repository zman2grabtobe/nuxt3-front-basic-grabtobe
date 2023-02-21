<template>
    <div class="login">

        <div>{{ name }}</div>
        <div>{{ count }}</div>
        <div><button @click="increment"> UP </button></div>


        <div>
           RET CNT 입니다 :  {{  state.retCnt  }} <br>
           RET NAME 입니다 : {{ state.retName }} <br>
           <input v-model="state.retName">
           <button @click="increment2"> RET UP </button>
        </div>


        <div><input v-model="name"></div>
        <div>{{ com1 }}</div>

    </div>
</template>
  
  <script setup>

  const name = ref('손지만') ;
  const count = ref(0) ;

  const state = reactive({
    retCnt : 0 , 
    retName : '카운터'
  })

  // function
  const increment = () => { count.value++ } ;

  const increment2 = () => { state.retCnt++ } ;

  // computed
  const com1 = computed(()=>{
    return name.value + ' 입니다' ;

  })





//   export default {
//     name: "login",
//     data() {
//       return {
//         validCredentials: {
//           username: "lightscope",
//           password: "lightscope"
//         },
//         model: {
//           username: "",
//           password: ""
//         },
//         loading: false,
//         rules: {
//           username: [
//             {
//               required: true,
//               message: "Username is required",
//               trigger: "blur"
//             },
//             {
//               min: 4,
//               message: "Username length should be at least 5 characters",
//               trigger: "blur"
//             }
//           ],
//           password: [
//             { required: true, message: "Password is required", trigger: "blur" },
//             {
//               min: 5,
//               message: "Password length should be at least 5 characters",
//               trigger: "blur"
//             }
//           ]
//         }
//       };
//     },
//     methods: {
//       simulateLogin() {
//         return new Promise(resolve => {
//           setTimeout(resolve, 800);
//         });
//       },
//       async login() {
//         let valid = await this.$refs.form.validate();
//         if (!valid) {
//           return;
//         }
//         this.loading = true;
//         await this.simulateLogin();
//         this.loading = false;
//         if (
//           this.model.username === this.validCredentials.username &&
//           this.model.password === this.validCredentials.password
//         ) {
//           this.$message.success("Login successfull");
//         } else {
//           this.$message.error("Username or password is invalid");
//         }
//       }
//     }
//   };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .login {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .login-button {
    width: 100%;
    margin-top: 40px;
  }
  .login-form {
    width: 290px;
  }
  .forgot-password {
    margin-top: 10px;
  }
  </style>
  <style lang="scss">
  $teal: rgb(0, 124, 137);
  .el-button--primary {
    background: $teal;
    border-color: $teal;
  
    &:hover,
    &.active,
    &:focus {
      background: lighten($teal, 7);
      border-color: lighten($teal, 7);
    }
  }
  .login .el-input__inner:hover {
    border-color: $teal;
  }
  .login .el-input__prefix {
    background: rgb(238, 237, 234);
    left: 0;
    height: calc(100% - 2px);
    left: 1px;
    top: 1px;
    border-radius: 3px;
    .el-input__icon {
      width: 30px;
    }
  }
  .login .el-input input {
    padding-left: 35px;
  }
  .login .el-card {
    padding-top: 0;
    padding-bottom: 30px;
  }
  h2 {
    font-family: "Open Sans";
    letter-spacing: 1px;
    font-family: Roboto, sans-serif;
    padding-bottom: 20px;
  }
  a {
    color: $teal;
    text-decoration: none;
    &:hover,
    &:active,
    &:focus {
      color: lighten($teal, 7);
    }
  }
  .login .el-card {
    width: 340px;
    display: flex;
    justify-content: center;
  }
  </style>