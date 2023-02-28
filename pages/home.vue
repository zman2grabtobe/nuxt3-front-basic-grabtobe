<template>
    안녕하세요 홈 입니다<br>
    <div>{{ aaa }}</div>
    <button @click="go"> GO GO GO </button>
</template>

<script setup>

const aaa = ref('111') ;

const go = () =>{

    aaa.value = '222' ;


}

</script>