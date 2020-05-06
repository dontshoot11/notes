<template lang="pug">

  ul.list
    li(v-for="todo in todos" ).item 
      todo(:todo="todo" @deleteTodo="deleteTodo" @checkTodo="editTodo" @confirmEdit="editTodo" v-bind:class="{'checked': todo.checked}")
 
</template>

<script>
import todo from "./noteTodoTodo";
export default {
  props: { todos: Array },

  components: { todo },

  methods: {
    deleteTodo(todo) {
      this.$emit("deleteTodo", todo);
    },
    editTodo(todo) {
      this.$emit("editTodo", todo);
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  margin-top: 15px;
  @media (max-width: 560px) {
    margin-bottom: 15px;
  }
}
</style>
