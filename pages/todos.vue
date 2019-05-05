<template>
  <div>
    <div class="comput">
      <button @click="addCounter">+</button>
      <span>{{ counter }}</span>
      <button @click="subCounter">-</button>
    </div>

    <div class="list">
      <button @click="remove">删除</button>

      <ul>
        <li v-for="todo in todos" :key="todo.text">
          <label :for="todo.text">
            <input :id="todo.text" type="checkbox" :checked="todo.done" @change="toggle(todo)">
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
          </label>
        </li>
        <li>
          <input placeholder="What needs to be done?" @keyup.enter = "addTodo">
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  ul,li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .comput {
    display: flex;
    justify-content: center;
    padding: 30px;
  }
  .comput span {
    padding: 0 20px;
  }
  .list {
    padding: 30rpx;
  }
  .list button {
    display: block;
    width: 60rpx;
    height: auto;
    margin: 0 auto;
  }
  .list ul {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .done {
    text-decoration: line-through;
  }
</style>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      obj: {
        a: 1,
        b: 2,
        c: 3
      }
    }
  },
  created() {
    this.obj = {
      ...this.obj,
      a: 5
    }

    console.log(this.obj)
  },
  computed: {
    todos() {
      return this.$store.state.todos.list
    },
    counter() {
      return this.$store.state.counter
    }
  },
  methods: {
    addTodo(e) {
      if (e.target.value === '') return false

      this.$store.commit('todos/add', e.target.value)

      e.target.value = ''
    },

    ...mapMutations({
      toggle: 'todos/toggle',
      remove: 'todos/remove',
      addCounter: 'increment',
      subCounter: 'decrement'
    })
  }
}
</script>
