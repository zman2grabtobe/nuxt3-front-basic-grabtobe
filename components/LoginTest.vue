<template>
  <div>
    <h1 >Home</h1>

    <div>{{usrText}}</div>
    <div>pending : {{usrLoading}}</div>
    <div v-if="usrError.value"> error   : {{usrError}}</div>

    <button @click="login()">Login</button>

  </div>
</template>
  
<script setup>

const usrText    = ref('') ; 
const usrLoading = ref('') ; 
const usrError   = ref('') ; 

const login = async () =>{

    const url = '/api/user/login' ;

    const result = await useFetch( url ,
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

    // JSON.stringify(result.data.value.token)

    // return data  , pending , error , refresh ; 

  }

  
</script>

<style scoped>

</style>
  