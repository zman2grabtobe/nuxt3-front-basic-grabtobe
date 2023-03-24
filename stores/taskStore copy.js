import { defineStore } from 'pinia'
// import { createPersistedState } from '@pinia/plugin-persistedstate'

export const useTaskStore = defineStore('task', () => {

  //% STATE
  
  const taskList = reactive([
    { title : 'HOME' , name : '1001' , content : 'HOME' , route : '' , active : true ,} ,
  ]) ;

  const activeTaskName = ref('1001') ;


  //% GETTER

  const getActiveTaskName = computed(() => activeTaskName.value) ;

  const getTaskList = computed(() => taskList) ;


  //% ACTION

  function updateActiveTaskName(_taskName){

    console.log( '엑티브 네임 변경 ==> ' , _taskName ) ;

    activeTaskName.value  = _taskName ;
    // updateActiveTaskName(_taskName);
    // return activeTaskName.value ;
  }

  function updateTaskList(_taskObject){

   
    let cnt = 0 ; 
    taskList.forEach((item, index) => {

        if (_taskObject.name === item.name){  

          console.log( ' 여기 타냐 = > ' , _taskObject.name , ' ' , item.name ) ;

          // activeTaskName.value = item.name ;
          updateActiveTaskName(item.name);
          cnt++ 

        }

    })

    if ( cnt === 0 ){

      console.log( ' 2 cnt 0이 아니여서 리스트 푸쉬 = > ' , _taskObject) ;

       taskList.push(_taskObject)
      //  activeTaskName.value = _taskObject.name ;
       updateActiveTaskName(_taskObject.name); 

      } ;

      console.log( ' 3 cnt 0이 taskList = > ' , taskList) ;
      console.log( ' activeTaskName = > ' , activeTaskName.value) ;

    // return activeTaskName.value ;
  }


  function removeTaskList(_taskName){
    // 활성화 상태의 탭을 닫을 때만 실행
    if(_taskName === activeTaskName.value){

      taskList.forEach((item, index) => {
        // 앞 혹은 뒤 탭이 활성화
        if (item.name === _taskName) {
          if(taskList[index + 1]) {
            // activeTaskName.value = taskList[index + 1].name ;
            updateActiveTaskName(taskList[index + 1].name); 
          }else if(taskList[index - 1]){
            // activeTaskName.value = taskList[index - 1].name ;
            updateActiveTaskName(taskList[index - 1].name); 
          }else{
            // activeTaskName.value = null  ;
            updateActiveTaskName('1001'); 
          };
        }
      })
    }
  
    // splice 로 삭제
    taskList.splice(taskList.findIndex(item => item.name == _taskName),1) ;

  }

   // persist 옵션 적용
  //  createPersistedState({ persist: true })(useTaskStore)

  return {

    getTaskList, 
    getActiveTaskName , 
    updateActiveTaskName ,
    updateTaskList,
    removeTaskList,

  }

  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  },
)