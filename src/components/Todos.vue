<template>
  <div>
    <Todo v-for="todo in todos"
          v-bind:key="todo.text"
          v-bind:text="todo.text"
          v-bind:completed="todo.completed"
          v-on:deleted="onTodoDelete($event)"
          v-on:completed="onTodoComplete($event)"
    ></Todo>
  </div>
</template>

<script>
  import Todo from './Todo'

  export default {
    name: 'Todos',
    props: {
      todos: Array
    },
    components: {
      Todo
    },
    methods: {
      onTodoDelete: function (value)  {
        this.$emit('deleted', value)
      },

      onTodoComplete: function (value)  {
        this.$emit('completed', value)
      }
    }
  }
</script>

<style scoped>
</style>
