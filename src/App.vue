<template>
  <div id="app">
    <Stars
    :num="starNum"
    :size="size"
    @getStarNum="getStarNum"
    ></Stars>
  </div>
</template>

<script>

export default {
  data(){
    return {
      starNum:0,
      size:32
    }
  },
  methods:{
    getStarNum(number){
      this.starNum = number
    }
  }
}
</script>

<style lang="scss">

</style>
