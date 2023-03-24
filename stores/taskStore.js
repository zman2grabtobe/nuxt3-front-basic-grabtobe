import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {

  state: () => ({
    taskList: [{ title : 'HOME' , name : '/dashboard/Dashboard' , content : 'HOME' , route : '' , active : true ,} ,],
    activeTaskName : { taskName : '/dashboard/Dashboard' } ,  // object 형태만 localStorge 작동 ( 원인 파악 안 됨 )
  }),

  getters: {
    getActiveTaskName: (state) =>{
      return state.activeTaskName ;
    },

    getTaskList:(state) => {
      return state.taskList ;
    },
  },

  actions: {
    updateActiveTaskName(_taskName){
      this.activeTaskName.taskName  = _taskName ;
    } ,

    updateTaskList(_taskObject){
      let count = 0 ; 
      this.taskList.forEach((item, index) => {
          if (_taskObject.name === item.name){  
            this.updateActiveTaskName(item.name) ;
            count++ 
          }
      })
      if (count === 0){
        this.taskList.push(_taskObject) ; 
        this.updateActiveTaskName(_taskObject.name) ; 
      } ;
    } ,

    removeTaskList(_taskName){
      // 활성화 상태의 탭을 닫을 때만 실행
      if(_taskName === this.activeTaskName.taskName){
      // 오르쪽 or 왼쪽 탭으로 활성화 상태 이동
       this.taskList.forEach((item, index) => {
          if (item.name === _taskName) {
            const taskName = this.taskList[index + 1] || this.taskList[index - 1] || { name : ''} ;
            this.updateActiveTaskName(taskName.name) ; 
          }
        })
      }
      // splice 로 삭제 ( 반응성 유지 )
      const index = this.taskList.findIndex(item => item.name == _taskName) ;
      this.taskList.splice(index,1) ;
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
})
