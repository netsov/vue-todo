<template>
  <div>
    <input type="text" v-model="text" />
    <input type="button" value="AddTodo" @click="addTodo()" :disabled="!text" />
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data: function() {
    return {
      text: ""
    };
  },
  methods: {
    addTodo: function() {
      if (!this.text) return;
      this.$emit("added", this.text);
      this.text = "";
    }
  }
};
</script>

<style scoped></style>
