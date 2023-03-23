<template>

      <el-menu
        default-active="1"
        class="side-menu-bar"
        @open ="handleOpen"
        @close="handleClose"
      >

      <el-sub-menu v-for="( menuList , i ) in menuList"  :key="i" :index="menuList.index">
          <template #title>
            <!-- <el-icon><Goods /></el-icon> -->
            <el-icon><component :is="menuList.icon"></component></el-icon>
            <span>{{menuList.title}}</span>
          </template>
            <el-menu-item v-for="(itemlist , j) in menuList.submenu" :key="j" :index="itemlist.index" @click="moveMenu(itemlist)">{{itemlist.title}}</el-menu-item>
       </el-sub-menu>
       
      </el-menu>
  
 </template>

<script  setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Goods,
  House,
  ArrowDown,
  ArrowUp,
  Coin,
  Star,
  Rank,
  Box,
  Memo,
  DocumentCopy,
  DataAnalysis,
  Calendar,

} from '@element-plus/icons-vue' ;

import { useTaskStore } from '@/stores/taskStore' ;

const taskStore  = useTaskStore() ;

const moveMenu = ( itemList ) => {

  console.log(' itemList ==> ' ,  itemList ) ;
  console.log(' taskStore.taskList ==> ' ,  taskStore.taskList ) ;

  taskStore.updateTaskList({ title : itemList.title , name : itemList.index  , content : itemList.title , active : true }) ;

};

const menuList = [
  { index : '1000' , title : '제품관리' , icon : 'Goods' , desc : '' 
    , submenu : [ { index : '1010' , title : '제품등록' , desc : '제품등록' , route : '' , active : false ,} 
                , { index : '1020' , title : '제품현황' , desc : '제품현황' , route : '' , active : false ,} ] } ,
  { index : '2000' , title : '매장관리' , icon : 'House' , desc : '' 
    , submenu : [ { index : '2010' , title : '매장등록' , desc : '매장등록' , route : '' , active : false ,} 
                , { index : '2020' , title : '매장현황' , desc : '매장현황' , route : '' , active : false ,} ] } ,
  { index : '3000' , title : '입고관리' , icon : 'ArrowDown' , desc : '' 
    , submenu : [ { index : '3010' , title : '입고등록' , desc : '입고등록' , route : '' , active : false ,} 
                , { index : '3020' , title : '입고현황' , desc : '입고현황' , route : '' , active : false ,} ] } ,
  { index : '4000' , title : '출고관리' , icon : 'ArrowUp' , desc : '' 
    , submenu : [ { index : '4010' , title : '출고등록' , desc : '출고등록' , route : '' , active : false ,} 
                , { index : '4020' , title : '출고현황' , desc : '출고현황' , route : '' , active : false ,} ] } ,
  { index : '5000' , title : '판매관리' , icon : 'Coin' , desc : '' 
    , submenu : [ { index : '5010' , title : '판매등록' , desc : '판매등록' , route : '' , active : false ,} 
                , { index : '5020' , title : '판매현황' , desc : '판매현황' , route : '' , active : false ,} ] } ,
  { index : '6000' , title : '매니져관리' , icon : 'Star' , desc : '' 
    , submenu : [ { index : '6010' , title : '매니져등록'       , desc : '매니져등록' , route : '' , active : false ,} 
                , { index : '6020' , title : '매니져수수료관리' , desc : '매니져수수료관리' , route : '' , active : false ,} ] } ,
  { index : '7000' , title : '배분관리' , icon : 'Rank' , desc : '' 
    , submenu : [ { index : '7010' , title : '배분등록' , desc : '배분등록' , route : '' , active : false ,} ] } ,
  { index : '8000' , title : '재고관리' , icon : 'Box' , desc : '' 
    , submenu : [ { index : '8010' , title : '매장재고현황' , desc : '매장재고현황' , route : '' , active : false ,} 
                , { index : '8020' , title : '창고재고현황' , desc : '창고재고현황' , route : '' , active : false ,} 
                , { index : '8030' , title : '종합재고현황' , desc : '종합재고현황' , route : '' , active : false ,} 
                , { index : '8040' , title : '품번재고현황' , desc : '품번재고현황' , route : '' , active : false ,} 
                ] } ,
  { index : '9000' , title : '정산관리' , icon : 'Memo' , desc : '' 
    , submenu : [ { index : '9010' , title : '생산대금현황'   , desc : '생산대금현황'   , route : '' , active : false ,} 
                , { index : '9020' , title : '매출정산현황'   , desc : '매출정산현황'   , route : '' , active : false ,} 
                , { index : '9030' , title : '판매수수료현황' , desc : '판매수수료현황' , route : '' , active : false ,} 
               ] } ,
  { index : '1100' , title : '분석' , icon : 'DataAnalysis' , desc : '' 
    , submenu : [ { index : '1110' , title : '스타일별분석' , desc : '스타일별분석' , route : '' , active : false ,} 
                , { index : '1120' , title : '매장별분석'   , desc : '매장별분석'   , route : '' , active : false ,}
                , { index : '1130' , title : '판매분석'     , desc : '판매분석'     , route : '' , active : false ,}
               ] } ,
  { index : '1200' , title : '설정' , icon : 'Setting' , desc : '' 
    , submenu : [ { index : '1210' , title : '사용자관리' , desc : '사용자관리' , route : '' , active : false ,} 
                , { index : '1220' , title : '코드관리'   , desc : '코드관리'   , route : '' , active : false ,} ] } ,
  { index : '1300' , title : '커뮤니티' , icon : 'Calendar' , desc : '' 
    , submenu : [ { index : '1310' , title : '공지사항' , desc : '공지사항' , route : '' , active : false ,} ] } ,
]


const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

</script>

<style scoped>
.side-menu-bar {
  width: 200px;
  /* height : 100% ; */
  height: calc(100vh - 55px ) ;
}
</style>