import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        text: "wervwergerw",
        completed: true
      },
      {
        text: "qwfwef",
        completed: false
      },
      {
        text: "qwf33333wef",
        completed: true
      }
    ]
  },
  mutations: {
    DELETE(state, value) {
      state.todos = state.todos.filter(todo => todo.text !== value);
    },
    ADD(state, value) {
      state.todos.unshift({
        text: value,
        completed: false
      });
    },
    COMPLETE(state, value) {
      state.todos = state.todos.map(todo =>
        todo.text === value ? { ...todo, completed: !todo.completed } : todo
      );
    }
  },
  actions: {
    deleteTodo({ commit }, value) {
      commit("DELETE", value);
    },
    addTodo({ commit }, value) {
      commit("ADD", value);
    },
    completeTodo({ commit }, value) {
      commit("COMPLETE", value);
    }
  }
});
