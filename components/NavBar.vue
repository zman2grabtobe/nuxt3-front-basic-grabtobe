 <template>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="1">HOME</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Solution</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3" disabled>Info</el-menu-item>
      <el-menu-item index="4"><NuxtLink to="/home">Business1</NuxtLink></el-menu-item>
      <el-menu-item index="5"><NuxtLink to="/home2">Business1</NuxtLink></el-menu-item>
      <el-menu-item index="6"><NuxtLink to="/auth/login">로그인</NuxtLink></el-menu-item>
      <el-menu-item index="7">Business4</el-menu-item>
      <el-menu-item index="8">Business5</el-menu-item>
      <el-menu-item index="9">매출 및 목표관리</el-menu-item>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const activeIndex = ref('1')
  const activeIndex2 = ref('1')

  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }

  </script> 

<style>

</style>
  