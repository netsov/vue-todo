<template>
  <div id="app">
    <AddTodo v-on:added="onTodoAdd($event)" />
    <Todos
      :todos="todos"
      v-on:deleted="onTodoDelete($event)"
      v-on:completed="onTodoComplete($event)"
    ></Todos>
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import Todos from "./components/Todos.vue";

export default {
  name: "app",
  components: {
    AddTodo,
    Todos
  },
  data: function() {
    return {
      todos: [
        {
          text: "wervwergerw",
          completed: true
        },
        {
          text: "qwfwef",
          completed: false
        }
      ]
    };
  },
  methods: {
    onTodoDelete: function(value) {
      this.todos = this.todos.filter(todo => todo.text !== value);
    },
    onTodoAdd: function(value) {
      this.todos.unshift({
        text: value,
        completed: false
      });
    },
    onTodoComplete: function(value) {
      this.todos = this.todos.map(todo =>
        todo.text === value ? { ...todo, completed: !todo.completed } : todo
      );
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
