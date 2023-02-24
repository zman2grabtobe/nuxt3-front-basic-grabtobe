<template>
  <div>
    <h1 >Home</h1>

    <div>{{usrText}}</div>
    <div>pending : {{usrLoading}}</div>
    <div v-if="usrError.value"> error   : {{usrError}}</div>

    <div> User Store Info : {{ userStore.user }}</div>

    <button @click="login()">Login</button>

  </div>
</template>
  
<script setup>
 import { useUserStore } from '~~/stores/users' ;

const userStore  = useUserStore() ;


const usrText    = ref('') ; 
const usrLoading = ref('') ; 
const usrError   = ref('') ; 

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
  