<template>

    <el-tabs
      v-model="taskStore.getActiveTaskName"
      type="card"
      class="demo-tabs"
      closable
      @tab-remove="taskStore.removeTaskList"
    
     >
      <el-tab-pane
        v-for="item in taskStore.getTaskList"
        :key="item.name"
        :label="item.title"
        :name="item.name"/>
  
    </el-tabs>

  </template>
  <script  setup>
  import { ref } from 'vue'

  import { useTaskStore } from '@/stores/taskStore' ;

  const taskStore  = useTaskStore() ;

//   const activeTabName = computed(() => {
//       return visitedStore.activeTabName ;
//     }) ;
  
//   const editableTabsValue = ref('2010') ;

//   watch(taskStore.taskList, (newVal, oldVal) => {

//      console.log('watch data 변경 ==> ' , newVal )
      
//      editableTabsValue.value = taskStore.getActiveTaskName ;
//     });


//   const changeTab = (tab) => {

//     console.log('tabs changed  ==> ' , tab ) ;

//     // taskStore.updateActiveTaskName(tabs) ;
//   };



  </script>
  <style>
  .demo-tabs > .el-tabs__content {
    padding: 0px ;
    height : 0px ; 
    /* color: #005eff; */
    font-size: 0px;
    /* font-weight: 600; */
  }

  .el-tabs__header {
    padding: 0px;
    position: relative;
    margin-top  : 3px ;
    margin-left : 3px ;
}


.el-header {
    /* --el-header-padding: 0 0px;  */
    /* --el-header-height: 60px; */
    padding: 0px !important; /* TODO : .el-header 별도로 분리해서 표기 할 것*/
    box-sizing: border-box;
    flex-shrink: 0;
    height: var(--el-header-height);
}
  </style>
  