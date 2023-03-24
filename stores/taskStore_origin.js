import { defineStore } from 'pinia'
// import { createPersistedState } from '@pinia/plugin-persistedstate'

export const useTaskStore = defineStore('task',  {

  state: () => ({
    taskList: [{ title : 'HOME' , name : '1001' , content : 'HOME' , route : '' , active : true ,} ,],
    activeTaskName : { taskName : '1001' } , 
  }),

  getters: {

    getActiveTaskName: (state) =>{
      return state.activeTaskName ;
    },

    getTaskList:(state) => {
      return state.taskList;
    },
   
  },

  actions: {

    updateActiveTaskName(_taskName){

      console.log(' ActiveTaskName is Update => ' , _taskName ) ;
  
      this.activeTaskName.taskName  = _taskName ;

    } ,


    updateTaskList(_taskObject){
   
      let cnt = 0 ; 
      this.taskList.forEach((item, index) => {
  
          if (_taskObject.name === item.name){  
  
            console.log( ' 여기 타냐 = > ' , _taskObject.name , ' ' , item.name ) ;
  
            this.updateActiveTaskName(item.name);
            cnt++ 
  
          }
  
      })
  
      if ( cnt === 0 ){
  
        console.log( ' 2 cnt 0이 아니여서 리스트 푸쉬 = > ' , _taskObject) ;
  
         this.taskList.push(_taskObject)
        //  activeTaskName.value = _taskObject.name ;
        this.updateActiveTaskName(_taskObject.name); 
  
        } ;
  
        console.log( ' 3 cnt 0이 taskList = > ' , this.taskList) ;
        console.log( ' activeTaskName = > ' , this.activeTaskName) ;
  
      // return activeTaskName.value ;
    } ,

    removeTaskList(_taskName){
      // 활성화 상태의 탭을 닫을 때만 실행
      if(_taskName === this.activeTaskName){
  
        this.taskList.forEach((item, index) => {
          // 앞 혹은 뒤 탭이 활성화
          if (item.name === _taskName) {
            if(this.taskList[index + 1]) {
              // activeTaskName.value = taskList[index + 1].name ;
              this.updateActiveTaskName(taskList[index + 1].name); 
            }else if(this.taskList[index - 1]){
              // activeTaskName.value = taskList[index - 1].name ;
              this.updateActiveTaskName(this.taskList[index - 1].name); 
            }else{
              // activeTaskName.value = null  ;
              this.updateActiveTaskName('1001'); 
            };
          }
        })
      }
    
      // splice 로 삭제
      this.taskList.splice(this.taskList.findIndex(item => item.name == _taskName),1) ;
  
    }


   
  },
  persist: {
    storage: persistedState.localStorage,
  },
})
