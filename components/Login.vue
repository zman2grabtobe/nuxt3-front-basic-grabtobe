<template>
    <div class="login">
        <div class="textLogin">로그인</div>
        <div class="usrid">    아이디  <br><input v-model = "usrState.usrId"   /> </div>
        <div class="usrpass">패스워드  <br><input v-model = "usrState.usrPass" /> </div>

        <div class="loginbtn"><button @click="login"> 로그인 GO </button></div>

        <div>{{ usrState.text }}</div>
        <div> dt :  {{ usrState.text2 }}</div>
        <div> </div>
    </div>
</template>
  
<script setup>

  const name  = ref('손지만') ;
  const count = ref(0) ; 

  const usrState = reactive({
    usrId : 'zman2' ,
    usrPass : '9999' ,
    text : '' , 
    text2 : '' , 
  })

  const  login = async () =>{

    console.log( 'ref name == > ' , name )
    console.log( 'ref name == > ' , name.value )
    console.log(" userid   ===> " , usrState.usrId ) ;
    console.log(" userPass ===> " , usrState.usrPass ) ;

    // const url = 'http://localhost:5000/user/login?id=zman2&pass=9999' ;
    const url = '/api/user/login' ;

    const { data : dt, pending, error, refresh } = await useFetch( url ,
        {   method: 'get' , 
            query: { id : usrState.usrId, pass: usrState.usrPass } ,
        }
    )

    console.log(" data value ===> " , JSON.stringify(unref(dt.value)) )  ;
    
    usrState.text2 = JSON.stringify(dt.value.token.accessToken)


    // usrState.text = data.value.token ;

    if(dt.value){

        usrState.text = '로그인 되었습니다.'

    }else{

        usrState.text = '암호가 다릅니다.'

    }
    

    console.log(" fatch data === > " , JSON.stringify(dt.value) ) ; 
  

  }

  // function
//   const increment = () => { count.value++ } ;

//   const increment2 = () => { state.retCnt++ } ;

  // computed
//   const com1 = computed(()=>{
//     return name.value + ' 입니다' ;

//   })


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
  height  : 50vh;
  width   : 50vw;
  margin  : 0px ;
  padding : 0px ; 
  background-color: #e2e2e2;
  align-items: center;
  text-align: center;
  border: 1px solid rgb(54, 54, 54);
  border-radius: 20px;
}

.textLogin {
    padding-top    : 30px ; 
    padding-bottom : 30px ; 
    font-size:xx-large ;
}

.usrid {
    padding-top    : 20px ; 
    padding-bottom : 20px ; 

}

.loginbtn {
    padding-top    : 20px ; 
    padding-bottom : 20px ; 
}

</style>
  