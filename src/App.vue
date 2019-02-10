<template>
  <div id="app">
    <AddTodo v-on:added="addTodo($event)" />
    <Todos
      :todos="todos"
      @deleted="deleteTodo($event)"
      @completed="completeTodo($event)"
    ></Todos>
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import Todos from "./components/Todos.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "app",
  components: {
    AddTodo,
    Todos
  },
  computed: mapState(["todos"]),
  methods: {
    ...mapActions(["deleteTodo", "addTodo", "completeTodo"])
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
