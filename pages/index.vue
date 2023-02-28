<template>
    <div>
        기본 페이지 입니다
        <button @click="linkTo"> 다음 페이지로 넘김</button>
    </div>
</template>

<script setup>
// 로그인 되어 있으면 최초 화면 , 아니면 로그인 화면으로 넘김

const linkTo = () =>{

    console.log('링크 투 테스트') ; 

    useRouter().push('/home2');
            // router.back();
            // router.forward();
            // router.go();
            // router.push({ path: "/home" });
            // router.replace({ hash: "#bio" });
            // }
}


</script>
