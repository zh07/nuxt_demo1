<template>
  <div>
    <span>222222222</span>
    <nuxt-link to="ctx-example-cimponent">查看ject同时注入</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  asyncData(context) {
    context.app.myInjectedFunction('ctx')
  },
  mounted() {
    this.$myInjectedFunction('test')
  }
}
</script>

<style scoped>

</style>
