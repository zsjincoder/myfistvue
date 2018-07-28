<template>
  <div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text" @click="change">文字按钮</el-button>
  </div>
</template>

<script>
    export default {
        name: "Main",
        methods: {
        change() {
          this.$router.push({path:'/child'})
        }
      }
    }
</script>

<style scoped>

</style>
