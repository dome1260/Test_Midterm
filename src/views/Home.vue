<template>
  <div class="home">
    <br>
    <h1>Home</h1><br>
    Name: <input type="text" v-model="todoName"><br>
    <button @click="createTodo()">เพิ่ม TODO</button>
    <showMessage :message="message" @onAlert="showAlert" />
  </div>
</template>

<script>

import showMessage from '@/components/ShowMessage'
import {mapActions} from 'vuex'

export default {
  name: 'home',
  components:{
      showMessage
  },
  data(){
    return{
      message:'Hello vue js',
      todoName: ''
    }
  },
  methods:{
    ...mapActions({
        newTodo: 'newTodo'
    }),
    showAlert(){
      alert('Hello this is alert')
    },
    createTodo(){
      this.newTodo({
        name: this.todoName,
        isDone: false
      })
      this.todoName = ''
    }
  }
}
</script>
