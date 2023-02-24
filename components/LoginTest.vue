<template>
  <div>
    <h1 >Home</h1>

    <div>{{usrText}}</div>
    <div>pending : {{usrLoading}}</div>
    <div v-if="usrError.value"> error   : {{usrError}}</div><br><br>

    <div> User Store Info : {{ userStore.user.usrId }}</div><br><br>

    <!-- <div> myData Info : {{ myData }}</div> -->

    <button @click="login()">Login</button>
    <!-- <button @click="login2()">Login2</button> -->

  </div>
</template>
  
<script setup>
 import { useUserStore } from '~~/stores/users' ;

const userStore  = useUserStore() ;


const usrText    = ref('') ; 
const usrLoading = ref('') ; 
const usrError   = ref('') ; 

// const loginGo = ref('') ;

// const url22 = computed(() => {
//  console.log('   usrww 1111  ====  > ' ,  loginGo.value  )
// return   `${loginGo.value}`});

// console.log('url22 ----->  ' , url22 )

// const {data : myData } = await fetchApi( url22 ,     {  method: 'get' , 
//             query: { id : 'zman2', pass: '9999' } , 
//         })


const login2 = async () => {
  loginGo.value = '/api/user/login`';
};


const login = async () =>{

    const url = '/api/user/login' ;

    const result = await fetchApi( url ,
        {   method: 'get' , 
            query: { id : 'zman2', pass: '9999' } , 
        }
    )

    console.log(' result ===> ' , result.data ) ;

    usrText.value    =  result.data.value.token.accessToken ;
    // usrText.value    =  result.data ;
    usrLoading.value =  result.pending ;
    usrError.value   =  result.error ;


    console.log(' usrText.value 1 ===> ' , usrText.value.token ) ;
    console.log(' usrText.value 2 ===> ' , result.data.value.token.accessToken ) ;

    userStore.save({ 
      usrId : 'zman2', 
      usrNm : '손지만', 
      accessToken : result.data.value.token.accessToken , 
      refreshToken :  result.data.value.token.refreshToken })

    // JSON.stringify(result.data.value.token)

    // return data  , pending , error , refresh ; 

  }

  
</script>

<style scoped>

</style>
  