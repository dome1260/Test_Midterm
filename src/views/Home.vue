<template>
  <div class="home">
    <br>
    <h1>Home</h1><br>
    Name: <input type="text"><br>
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
      message:'Hello vue js'
    }
  },
  methods:{
    ...mapActions({
        newTodo: 'newTodo'
    }),
    showAlert(){
      alert('Hello this is alert')
    }
  }
}
</script>
