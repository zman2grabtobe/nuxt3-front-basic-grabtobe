<template>

      <el-menu
        default-active="2"
        class="side-menu-bar"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Goods /></el-icon>
            <span>제품관리</span>
          </template>
            <el-menu-item index="1-1">제품등록</el-menu-item>
            <el-menu-item index="1-2">제품현황</el-menu-item>
          </el-sub-menu>

        <el-sub-menu index="2">
          <template #title>
            <el-icon><House /></el-icon>
            <span>매장관리</span>
          </template>
            <el-menu-item index="2-1">매장등록</el-menu-item>
            <el-menu-item index="2-2">매장현황</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="3">
          <template #title>
            <el-icon><ArrowDown /></el-icon>
            <span>입고관리</span>
          </template>
            <el-menu-item index="3-1">입고등록</el-menu-item>
            <el-menu-item index="3-2">입고현황</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="4">
          <template #title>
            <el-icon><ArrowUp /></el-icon>
            <span>출고관리</span>
          </template>
            <el-menu-item index="4-1">출고등록</el-menu-item>
            <el-menu-item index="4-2">출고현황</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="5">
          <template #title>
            <el-icon><Coin /></el-icon>
            <span>판매관리</span>
          </template>
            <el-menu-item index="5-1">판매등록</el-menu-item>
            <el-menu-item index="5-2">판매현황</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="6">
          <template #title>
            <el-icon><Star /></el-icon>
            <span>매니져관리</span>
          </template>
            <el-menu-item index="6-1">매니져등록</el-menu-item>
            <el-menu-item index="6-2">매니져수수료관리</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="7">
          <template #title>
            <el-icon><Rank /></el-icon>
            <span>배분</span>
          </template>
            <el-menu-item index="7-1">배분등록</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="8">
          <template #title>
            <el-icon><Box /></el-icon>
            <span>재고관리</span>
          </template>
            <el-menu-item index="8-1">매장재고현황</el-menu-item>
            <el-menu-item index="8-2">창고재고현황</el-menu-item>
            <el-menu-item index="8-3">종합재고현황</el-menu-item>
            <el-menu-item index="8-4">품번재고현황</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="9">
          <template #title>
            <el-icon><Memo /></el-icon>
            <span>정산관리</span>
          </template>
            <el-menu-item index="9-1">생산대금현황</el-menu-item>
            <el-menu-item index="9-2">매출정산현황</el-menu-item>
            <el-menu-item index="9-3">판매수수료현황</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="10">
          <template #title>
            <el-icon><DataAnalysis /></el-icon>
            <span>분석</span>
          </template>
            <el-menu-item index="10-1">스타일별분석</el-menu-item>
            <el-menu-item index="10-2">매장별분석</el-menu-item>
            <el-menu-item index="10-3">판매분석</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="11">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>설정</span>
          </template>
            <el-menu-item index="11-1">사용자관리</el-menu-item>
            <el-menu-item index="11-2">코드관리</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="12">
          <template #title>
            <el-icon><Calendar /></el-icon>
            <span>커뮤니티</span>
          </template>
            <el-menu-item index="12-1">공지사항</el-menu-item>
        </el-sub-menu>
       
      </el-menu>
  
 </template>

<script lang="ts" setup>
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

} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
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