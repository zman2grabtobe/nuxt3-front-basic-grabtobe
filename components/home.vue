<template>
    
<div class="container">
            <div class='main_class'>


            </div>

            <div class='button_class'>
                <button @click="changeData"> 데이터 변경 </button>
                <button @click="insertData"> 데이터 등록 </button>
            </div>

            <div>
                최종값은 : {{ computedChangeData }}  입니다 
            </div>

</div>

<div>

    <p> {{dataArray.name}}</p> <br>
                <p> {{dataArray.age}}</p> <br>
                <p> {{dataArray.address}}</p> <br>
            

                <p v-for="(item, index) in dataArray.fam" :key="index" > {{ index + ' - ' }} {{ item.name  }} </p>

</div>

    



</template>

<script setup >

let dataArray = reactive({ name : '손지만' , age : 46 , address : '노원구' , fam : [ {name : '손이현' , age: 16} , {name : '이나진' , age : 44 }]}) ;

const changeData = () =>{
    dataArray.fam[1].name  = '이나진2' ;
}

const insertData = () =>{
    dataArray.fam.push({ name : '손삼현' , age :1 }) ; 
}

const computedChangeData = computed(()=>{

    return  dataArray.fam.length  ; 

} )

</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.main_class {
    display: flex;
    justify-content: left ;
    align-items: center;
    background-color: antiquewhite;
    height: 200px ; /* 컨테이너의 높이를 조정합니다. */
  
}

p {
    text-align: center; /* 수평 가운데 정렬을 위해 text-align 속성을 사용합니다. */
    margin: 30px ; /* 기본 마진을 제거합니다. */
}


.button_class {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(230, 158, 64);
    height: 200px ; /* 컨테이너의 높이를 조정합니다. */

}

</style>