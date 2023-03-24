<template>

    <el-tabs
      v-model="activeTaskValue"
      type="card"
      class="task-tabs"
      closable
      @tab-change="taskChange"
      @tab-remove="taskStore.removeTaskList">
      <el-tab-pane
        v-for="item in taskStore.getTaskList"
            :key   = "item.name"
            :label = "item.title"
            :name  = "item.name"
       />
    </el-tabs>

</template>

<script setup>

  import { useTaskStore } from '@/stores/taskStore' ;

  const router = useRouter();

  const taskStore = useTaskStore() ;
  const activeTaskValue = ref('')  ;

  const taskChange = (_taskName) =>{

    console.log('task name = >>> ' ,  _taskName ) ; 

    router.push({ path: _taskName });

    taskStore.updateActiveTaskName(_taskName) ;


  }

  //% activeTaskValue 에 직접 taskStore.getActiveTaskName() 연결 시 event handle 오류 발생 하여 watch 로 구현
  //% TODO :: watch 제거 하여 재구현 할 것  ( 오류 원인 파악 안 됨 )
  //% 2023.03.22
  watch(taskStore.getActiveTaskName, (newVal, oldVal) => {
    activeTaskValue.value = taskStore.getActiveTaskName.taskName ;
  });

  onMounted(() => {
    activeTaskValue.value = taskStore.getActiveTaskName.taskName || '/dashboard/Dashboard' ; 
  });  

</script>

<style>
 .task-tabs > .el-tabs__content {
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
  