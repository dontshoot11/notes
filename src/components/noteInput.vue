<template lang="pug">
  div.input-area
    .header
  
      h2.heading создание заметки
    .navigation
        button.button.button--left(v-on:click="sendNote") сохранить
    
    
        button.button(v-on:click="startAbort") отменить
    .inputs
    
      textarea(type="text", v-model="note.text" placeholder="Текст заметки" ).input.input--textarea
      .inputs__todos
        todoInput(@addTodo="addTodo").input.input--todo
        todoList(:todos="note.todos" @deleteTodo="deleteTodo")
    .popup(v-if="wantToAbort")
          .popup__content
            .popup__text Выйти без сохранения?
            .popup__navigation
              button.button.button--left(v-on:click="abortChanges") да
              button.button(v-on:click="abortAbort") нет
    
    
     
      
    
    
      
    
    
   
    
    
</template>

<script>
import todoList from "./noteTodoList";
import todoInput from "./noteTodoInput";
import { mapMutations } from "vuex";

let uniqueId = 0;

export default {
  data() {
    return {
      note: {
        id: 0,
        text: "",
        todos: []
      },
      wantToAbort: false
    };
  },

  mounted: function() {
    let savedId = localStorage.getItem("savedId");

    if (savedId) {
      console.log(savedId);

      uniqueId = savedId;
    }
  },

  methods: {
    ...mapMutations(["addNote", "editNote"]),
    addTodo(todo) {
      this.note.todos.push(todo);
    },

    deleteTodo(todo) {
      this.note.todos = this.note.todos.filter(function(c) {
        return c !== todo;
      });
      this.editNote(this.note);
    },

    sendNote() {
      uniqueId++;
      this.note.id = uniqueId;
      let stringedId = this.note.id;
      localStorage.setItem("savedId", stringedId);
      this.addNote({ ...this.note });
      this.note.text = "";
      this.note.todos = [];
      this.$router.go(-1);
    },

    startAbort() {
      this.wantToAbort = true;
    },

    abortChanges() {
      this.$router.go(-1);
    },
    abortAbort() {
      this.wantToAbort = false;
    }
  },

  components: {
    todoList,
    todoInput
  }
};
</script>

<style lang="scss" scoped>
.input {
  vertical-align: text-top;
  border: 1px solid black;
  resize: none;
}
</style>
