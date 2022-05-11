<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      //清楚缓存并返回至登录页
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
  },
}
</script>
<style lang="less" scoped>
</style>