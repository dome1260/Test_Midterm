<template>
  <div>
      <h1>
        {{message}}
      </h1>
      <button @click="alert()">show alert</button>
  </div>
</template>

<script>

export default {
  props:['message'],
  methods:{
      alert(){
          this.$emit('onAlert') //การไปเรียก methods ที่ส่งเข้ามา
      }
  }
}

</script>

<style scoped>

</style>
