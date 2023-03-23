<template>
  <el-container class="layout-container" >

    <el-header class= "layout-nav-bar" > header </el-header>
   
      <el-container class="layout-sub-container">
        
        <el-aside class="layout-side-bar" >
            <el-scrollbar>
              <SideMenu/>
            </el-scrollbar>
        </el-aside>
              <el-container class="layout-main-container" >
                <el-header><VisitedTab/></el-header>
                 <el-scrollbar>
                   <el-main class="layout-main" >
                    
                    <NuxtPage keepalive />

                  </el-main>
                </el-scrollbar>
              </el-container>

      </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'


</script>

<style scoped>

.layout-container{
  height : 100% ;
  /* background-color :aqua ; */
}

.layout-nav-bar{
  /* background-color :rgb(255, 0, 234) ; */
  border-bottom: 1px solid #d3d3d3;
  height: 55px ;
  width : 100% ;
}

.layout-sub-container{
  /* background-color :rgb(12, 109, 88) ; */
  width : 100% ;
}

.layout-side-bar{
  /* background-color :rgb(255, 196, 0) ; */
  width : 200px ;
  /* height : calc(100% - 50px) ; */
}
.layout-main-container{
  /* background-color :rgb(161, 143, 80) ; */
  
   height : calc(100vh - 55px) ;
   

}

.div-test {
  /* background-color : blue ; */
  width: 100% ;
}

.layout-main{
  display : block ; 
  /* background-color :rgb(0, 231, 77) ; */
  padding : 0px ;
  width : calc(100vw - 208px ) ;
  margin-top : 8px ;
  margin-left : 8px ;
   

}


/* .el-header {
  position: sticky ;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
} */
/* .layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}  */
</style>