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

  // taskStore.updateTaskList({ title : itemList.title , name : itemList.index  , content : itemList.title , active : true }) ;
  taskStore.updateTaskList({ title : itemList.title , name : itemList.route  , content : itemList.title , active : true }) ;

};

const menuList = [
  { index : '1000' , title : '제품관리' , icon : 'Goods' , desc : 'product' 
    , submenu : [
                  { index : 'MM1010' , title : '제품등록' , desc : '제품등록' , route : '/product/ProductRegistration' , active : false ,} 
                , { index : 'MM1020' , title : '제품현황' , desc : '제품현황' , route : '/product/ProductListView' , active : false ,} 
                ] 
  } ,
  { index : '2000' , title : '매장관리' , icon : 'House' , desc : 'store' 
    , submenu : [ 
                  { index : 'SD2010' , title : '매장등록' , desc : '매장등록' , route : '/store/StoreRegistration' , active : false ,} 
                , { index : 'SD2020' , title : '매장현황' , desc : '매장현황' , route : '/store/StoreListView' , active : false ,} 
                ] 
  } ,
  { index : '3000' , title : '입고관리' , icon : 'ArrowDown' , desc : 'stockin' 
    , submenu : [ 
                  { index : '3010' , title : '입고등록' , desc : '입고등록' , route : '/stockin/StockInRegistration' , active : false ,} 
                , { index : '3020' , title : '입고현황' , desc : '입고현황' , route : '/stockin/StockInListView' , active : false ,} 
                ] 
  } ,
  { index : '4000' , title : '출고관리' , icon : 'ArrowUp' , desc : 'stockout' 
    , submenu : [ 
                  { index : '4010' , title : '출고등록' , desc : '출고등록' , route : '/stockout/StockOutRegistration' , active : false ,} 
                , { index : '4020' , title : '출고현황' , desc : '출고현황' , route : '/stockout/StockOutListView' , active : false ,} 
                ] 
  } ,
  { index : '5000' , title : '판매관리' , icon : 'Coin' , desc : 'sale' 
    , submenu : [ 
                  { index : '5010' , title : '판매등록' , desc : '판매등록' , route : '/sale/SaleRegistration' , active : false ,} 
                , { index : '5020' , title : '판매현황' , desc : '판매현황' , route : '/sale/SaleListView' , active : false ,} 
                ] 
  } ,
  { index : '6000' , title : '매니져관리' , icon : 'Star' , desc : 'manager' 
    , submenu : [ 
                  { index : '6010' , title : '매니져등록'       , desc : '매니져등록'       , route : '/manager/ManagerRegistration' , active : false ,} 
                , { index : '6020' , title : '매니져수수료관리' , desc : '매니져수수료관리' , route : '/manager/ManagerCommissionManagement' , active : false ,}  
                ] 
  } ,
  { index : '7000' , title : '배분관리' , icon : 'Rank' , desc : 'allocation ' 
    , submenu : [ 
                  { index : '7010' , title : '배분등록' , desc : '배분등록' , route : '/allocation/AllocationRegistration' , active : false ,} 
                ]
  } ,
  { index : '8000' , title : '재고관리' , icon : 'Box' , desc : 'inventory' 
    , submenu : [ 
                  { index : '8010' , title : '매장재고현황' , desc : '매장재고현황' , route : '/inventory/InventoryStoreListView'     , active : false ,} 
                , { index : '8020' , title : '창고재고현황' , desc : '창고재고현황' , route : '/inventory/InventoryWarehouseListView' , active : false ,} 
                , { index : '8030' , title : '종합재고현황' , desc : '종합재고현황' , route : '/inventory/InventoryOvervieweListView' , active : false ,} 
                , { index : '8040' , title : '품번재고현황' , desc : '품번재고현황' , route : '/inventory/InventoryProductListView'   , active : false ,} 
                ] 
  } ,
  { index : '9000' , title : '정산관리' , icon : 'Memo' , desc : '' 
    , submenu : [
                  { index : '9010' , title : '생산대금현황'   , desc : '생산대금현황'   , route : '/payment/PaymentProduction' , active : false ,} 
                , { index : '9020' , title : '매출정산현황'   , desc : '매출정산현황'   , route : '/payment/PaymentSales' , active : false ,} 
                , { index : '9030' , title : '판매수수료현황' , desc : '판매수수료현황' , route : '/payment/PaymentManagerCommission' , active : false ,} 
               ]
  } ,
  { index : '1100' , title : '분석' , icon : 'DataAnalysis' , desc : 'analysis' 
    , submenu : [
                  { index : '1110' , title : '스타일별분석' , desc : '스타일별분석' , route : '/analysis/AnalysisProductView' , active : false ,} 
                , { index : '1120' , title : '매장별분석'   , desc : '매장별분석'   , route : '/analysis/AnalysisStoreView' , active : false ,}
                , { index : '1130' , title : '판매분석'     , desc : '판매분석'     , route : '/analysis/AnalysisSalesView' , active : false ,}
               ] 
  } ,
  { index : '1200' , title : '설정' , icon : 'Setting' , desc : 'setting' 
    , submenu : [
                  { index : '1210' , title : '사용자관리' , desc : '사용자관리' , route : '/setting/SettingUserRegistration' , active : false ,} 
                , { index : '1220' , title : '코드관리'   , desc : '코드관리'   , route : '/setting/SettingCommonCodeRegistration' , active : false ,} 
                ] 
  } ,
  { index : '1300' , title : '커뮤니티' , icon : 'Calendar' , desc : 'community' 
    , submenu : [ 
                  { index : '1310' , title : '공지사항' , desc : '공지사항' , route : '/community/NoticeListView' , active : false ,} 
                ]
  } ,
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