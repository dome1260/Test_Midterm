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
     },
     SET_TODO_STATUS(state, data){
        state.todos[data.index].isDone = data.status //เปลี่ยนค่า state ที่ตำแหน่งไหน ให้เป็นอะไร
     },
     CLEAR_DONE(state){
      state.todos = state.todos.filter( todo => todo.isDone === false)
    }
  },
  actions: {
    //การทำงานข้างนอก
    newTodo({commit},data){
      commit('NEW_TODO',data)
    },
    setTodoStatus ({commit},data){
      commit('SET_TODO_STATUS',data)
    },
    clearDone({commit}){
      commit('CLEAR_DONE')
    }
  }
})
