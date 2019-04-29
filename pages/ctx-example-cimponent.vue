<template>
  <div>
    <span>inject 同时注入context,vue实例</span>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  asyncData(context) {
    context.app.$myInjectedFunction2('works with content')
  },

  mounted() {
    this.$myInjectedFunction2('works in mounted')
  }
}
</script>
