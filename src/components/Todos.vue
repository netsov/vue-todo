<template>
  <div>
    <Todo
      v-for="todo in todos"
      :key="todo.text"
      :text="todo.text"
      :completed="todo.completed"
      @deleted="onTodoDelete($event)"
      @completed="onTodoComplete($event)"
    ></Todo>
  </div>
</template>

<script>
import Todo from "./Todo";

export default {
  name: "Todos",
  props: {
    todos: Array
  },
  components: {
    Todo
  },
  methods: {
    onTodoDelete: function(value) {
      this.$emit("deleted", value);
    },

    onTodoComplete: function(value) {
      this.$emit("completed", value);
    }
  }
};
</script>

<style scoped></style>
