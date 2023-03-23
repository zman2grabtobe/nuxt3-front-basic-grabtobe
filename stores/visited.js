import { defineStore } from 'pinia'

export const useVisitedStore = defineStore('visited', {
  state: () => ({
    tabs: [{
      title   : 'HOME' , 
      name    : '1001' , 
      content : 'HOME' , 
      active  :  true  ,
            },
          ],
  }),
  
  getters: {
    activeTabName: (state) => {

    //  console.log( 'pinia tabs  === >' ,  state.tabs  ) ;
     console.log( 'pinia tabs index === >' ,  state.tabs.findIndex(tabs => tabs.active === true ) ) ;

     let i = state.tabs.findIndex(tabs => tabs.active === true ) || 0  ; 

      console.log( 'pinia tabs  33333=== > ' , i ) ;

     if ( i < 0 ) i = 0 ;  

     console.log( 'pinia i === >' ,  i ) ;

     return state.tabs[i].name  ;
  
    }
  },

  actions: {

    activeTab(tabName) {

      console.log('pinia activeTab ==> ' , tabName) ;

        this.tabs.forEach((tab, index) => {

            if (tabName === tab.name){  
              this.tabs[index].active = true ; 
            }
            else { 
              this.tabs[index].active = false ;
            }
        })
    },

    addTab(tabObj) {

      console.log( 'add tab start ' , tabObj.name , ' '  ) ;


      let cnt = 0 ; 
      this.tabs.forEach((tab, index) => {

        console.log( 'add tab loop ' , tabObj.name , ' ',   tab.name ) ;
          if (tabObj.name === tab.name){  
             this.tabs[index].active = true ; 
             cnt++ 
          }
          else { 
             this.tabs[index].active = false ;
          }
      })

      console.log( 'pinia cnt  === >' ,  cnt  ) ;

       if ( cnt === 0 ) this.tabs.push(tabObj) ;
    } ,


    removeTab(tabName) {

      // 활성화 상태의 탭을 닫을 때만 실행
      if(tabName === this.activeTabName){

        this.tabs.forEach((tab, index) => {
         console.log( 'tab.name 비교 targename  ===> ' , tab.name  , ' ' , tabName  ) ; 
         // 앞 혹은 뒤 탭이 활성화
          if (tab.name === tabName) {
            if(this.tabs[index + 1]) {
              this.tabs[index + 1].active = true ;
            }else{
              this.tabs[index - 1].active = true ;
            };
          }else{
            this.tabs[index].active = false  ;
          }
        })
      }
    
      // splice 로 삭제
      this.tabs.splice(this.tabs.findIndex(tabs => tabs.name == tabName),1) ;
    },
  },
persist : true },)