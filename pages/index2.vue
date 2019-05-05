<template>
  <div class="main">
    <h1>Hello there</h1>
    <p>This is an example of a named views</p>
    <ul>
      <li>
        <NuxtLink to="/">
          Root
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/index2/section">
          Section
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/index2/child/123">
          child 123
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/index2/child/234">
          child 234
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/main">
          Main page with named view in layout
        </NuxtLink>
      </li>
    </ul>

    <hr>
    <div>
      <div class="left">
        <NuxtChild name="left" />
      </div>
      <div class="content">
        <NuxtChild />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stage'
}
</script>

<style scoped>
  .left {
    background: red;
  }

  .content {
    background: green;
  }

  .main {
    margin: auto;
    max-width: 420px;
    padding: 10px;
  }

  .left {
    max-width: 150px;
    display: inline-block;
    vertical-align: top;
    border: 1px;
  }

  .left:empty {
    display: none;
  }

  .content {
    display: inline-block;
  }
</style>


