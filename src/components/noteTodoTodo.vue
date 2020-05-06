<template lang="pug">
    .todo
        .todo__content(v-if="!isEditMode")
          .todo__checkbox( v-on:click="checkTodo" v-bind:class="{'checked': todo.checked}")

        
          .todo__name {{todo.name}}
        input.todo__input(type="text" @keydown.enter="confirmEdit" autofocus placeholder="Добавьте задачу нажатием enter" v-model="todo.name" v-if="isEditMode")
        .navigation
          button.todo__button.todo__button--confirm(v-if="isEditMode" v-on:click="confirmEdit") ✓
          
          button.todo__button.todo__button--edit(v-if="!isEditMode" v-on:click="editTodo") 🛠
          button.todo__button.todo__button--cross(v-on:click="deleteTodo") +
        


</template>

<script>
export default {
  data() {
    return {
      isEditMode: false
    };
  },

  methods: {
    editTodo() {
      this.isEditMode = true;
    },
    deleteTodo() {
      this.$emit("deleteTodo", this.todo);
    },
    checkTodo() {
      this.todo.checked = !this.todo.checked;
      this.$emit("checkTodo", { ...this.todo });
    },
    confirmEdit() {
      this.$emit("confirmEdit", { ...this.todo });
      this.isEditMode = false;
    }
  },
  props: { todo: {} },

  components: {}
};
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.todo__name {
  cursor: pointer;
}

.todo__button {
  cursor: pointer;

  text-decoration: none;
}

.checked .todo__buton {
  text-decoration: none !important;
}

.todo__checkbox {
  height: 10px;
  width: 10px;
  border: 1px solid black;
  position: relative;
  cursor: pointer;
  margin-right: 15px;
}

.todo__content {
  display: flex;
  align-items: center;
}

.todo__checkbox::before {
  display: none;
  content: "🗸";
  position: absolute;
  bottom: -10px;
  left: -3px;
  font-weight: bold;
  font-size: 28px;
}

.todo__button--confirm {
  &:hover {
    color: green;
  }
}

.checked::before {
  display: block;
}

.navigation {
  margin-bottom: 0;
}

button {
  min-width: 25px;
}

.todo__button--cross {
  transform: rotate(45deg);
  font-weight: bold;
  font-size: 28px;

  &:hover {
    color: red;
  }
}

.todo__button--edit {
  &:hover {
    color: blue;
  }
}

.todo__input {
  border-bottom: 1px solid black;
  padding: 3px;
}
</style>
