<template lang="pug">
.todo-input
  input(type="text", placeholder="Добавьте задачу нажатием enter", v-model="todo.name", @keydown.enter="addTodo")
 
 
</template>

<script>
let todoId = 0;

export default {
  data() {
    return {
      todo: {
        id: 0,
        name: "",
        checked: false
      }
    };
  },

  methods: {
    addTodo() {
      todoId++;
      this.todo.id = todoId;
      this.$emit("addTodo", { ...this.todo });
      this.todo.name = "";
    }
  },

  components: {}
};
</script>

<style lang="scss" scoped></style>
