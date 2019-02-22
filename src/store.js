import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      //ตัวแปรของ Vue X
      todos: [
        {
          name: 'การบ้าน Adv web',
          isDone: false
        }
      ]
  },
  mutations: {
     //การทำงาน State
     NEW_TODO(state, data){
        state.todos.push(data)
     }
  },
  actions: {
    //การทำงานข้างนอก
    newTodo({commit},data){
      commit('NEW_TODO',data)
    }
  }
})
