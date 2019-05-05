<template>
  <div>
    <div>222222222</div>
    <div>
      <nuxt-link to="/todos">jump to todos</nuxt-link>
    </div>
    <div>
      <nuxt-link to="/ctx-example-cimponent">jump to cimponent</nuxt-link>
    </div>
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
