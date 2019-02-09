<template>
  <div>
    <span v-bind:class="{ completed: completed }">{{ text }}</span>
    <input type="checkbox" v-model="completed" v-on:click="complete()">
    <button v-on:click="$emit('deleted', text)">x</button>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    text: String,
    completed: Boolean
  },
  data: function() {
    return {
      // isCompleted: this.completed
    }
  },
  computed: {
    // isCompleted: function() {
    //   return this.completed
    // }
  },
  methods: {
    complete: function () {
      this.$emit('completed', this.text)
    }
  }
}
</script>

<style scoped>
  .completed {
    text-decoration: line-through;
  }
</style>
